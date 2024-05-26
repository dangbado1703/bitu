import { useEffect, useRef } from "react";

const ChatContainer = ({
  messages,
  username,
}: {
  messages: {
    userId: string;
    text: string;
    timestamp: string;
    isBot: boolean;
    username?: string;
  }[];
  username: string;
}) => {
  const chatContainerRef = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    chatContainerRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "center",
    });
  }, [messages]);

  return (
    <div className="chat-container">
      {messages.map((message, index) => (
        <div key={index} className={message.isBot ? "chat-bot" : "chat-user"}>
          {message.isBot ? (
            message.username === username ? (
              <div className="chat-container__message">
                <div className="message-box message-box__bot">
                  <span>{message.text}</span>
                </div>
                <span className="name">{message.userId}</span>
              </div>
            ) : null
          ) : (
            <div className="chat-container__message">
              <span className="name">{message.userId}</span>
              <div className="message-box message-box__user">
                <span>{message.text}</span>
              </div>
            </div>
          )}
        </div>
      ))}
      <div ref={chatContainerRef} />
    </div>
  );
};

export default ChatContainer;
