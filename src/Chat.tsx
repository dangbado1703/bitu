import mqtt from "mqtt";
import { useEffect, useState } from "react";
import "./App.scss";
import ChatContainer from "./ChatContainer";
import MessageInput from "./MessageInput";

function Chat() {
  const [clientSocket, setClientSocket] = useState<mqtt.MqttClient | null>(
    null
  );
  const [messages, setMessages] = useState<
    {
      userId: string;
      text: string;
      timestamp: string;
      isBot: boolean;
      username?: string;
    }[]
  >([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isOut, setIsOut] = useState(false);
  const [userId] = useState(
    () => `user_${Math.random().toString(36).substr(2, 9)}`
  );
  const userTopic = `chat/messages`;
  const botId = "BOT";

  const handleConnectSocket = () => {
    const client = mqtt.connect("wss://test.mosquitto.org:8081");
    setClientSocket(client);
    setIsLoading(true);
    client.on("connect", () => {
      setIsLoading(false);
      client.subscribe(userTopic);
    });
    client.on("message", (_, message) => {
      const parsedMessage = JSON.parse(message.toString());
      setMessages((prevMessages) => [...prevMessages, parsedMessage]);
      if (parsedMessage.userId !== botId) {
        const botMessage = {
          userId: botId,
          text: "",
          timestamp: new Date().toISOString(),
          isBot: true,
          username: userId,
        };
        if (isNaN(parsedMessage.text)) {
          botMessage.text =
            "Mình là BOT tính toán Fibonacci. Vui lòng nhập number giúp mình nhé";
        } else {
          const fibSum = fibonacci(Number(parsedMessage.text));
          botMessage.text = fibSum.toString();
        }

        client.publish(userTopic, JSON.stringify(botMessage));
      }
    });

    client.on("end", () => {
      console.log("socket end::");
    });
    return client;
  };

  useEffect(() => {
    const client = handleConnectSocket();

    window.addEventListener("close", () => {
      client.end();
    });

    return () => {
      client.end();
    };
  }, [userId]);

  function fibonacci(n: number) {
    if (n === 1) return 1;
    if (n === 2) return 3;
    let i;
    let fib = [1, 2];
    for (i = 2; i <= n; i++) {
      fib[i] = fib[i - 2] + fib[i - 1];
    }
    const sumFib = fib.reduce((oldSum, newSum) => oldSum + newSum, 0);
    return sumFib;
  }

  const handleSendMessage = (text: string) => {
    const message = {
      userId,
      text,
      sendTime: new Date().toISOString(),
      isBot: false,
    };
    clientSocket?.publish(userTopic, JSON.stringify(message));
  };

  if (isOut) {
    return (
      <div style={{ height: 40 }}>
        <button
          className="button-common"
          onClick={() => {
            setIsOut(false);
            handleConnectSocket();
          }}
        >
          Tham gia
        </button>
      </div>
    );
  } else {
    if (isLoading)
      return (
        <div>
          <span>Đang kết nốt đến MQTT....</span>
        </div>
      );
  }

  return (
    <div className="app">
      <ChatContainer messages={messages} username={userId} />
      <MessageInput
        sendMessage={handleSendMessage}
        onClose={() => {
          clientSocket?.end();
          setIsOut(true);
          setMessages([]);
        }}
      />
    </div>
  );
}

export default Chat;
