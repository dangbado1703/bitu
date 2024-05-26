import { useState } from "react";

const MessageInput = ({
  sendMessage,
  onClose,
}: {
  sendMessage: (message: string) => void;
  onClose: () => void;
}) => {
  const [text, setText] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (text.trim()) {
      setText("");
      sendMessage(text);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div style={{ display: "flex", height: 40, gap: 12, marginTop: 8 }}>
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Enter your message"
          className="input-common"
          style={{ width: "60%" }}
        />
        <button type="submit" className="button-common">
          Gửi tin
        </button>
        <button className="button-common" onClick={onClose}>
          Thoát phòng
        </button>
      </div>
    </form>
  );
};

export default MessageInput;
