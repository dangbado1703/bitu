import Bitu from "./bitu/Bitu";
import Chat from "./Chat";
import { Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Chat />} />
      <Route path="/bitu" element={<Bitu />} />
    </Routes>
  );
};

export default App;
