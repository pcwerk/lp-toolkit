import "./App.css";
import { Header } from "./components/Header";
import { Chat } from "./components/Chat.jsx";
import { ModalProvider } from "./contexts/ModalContext";

function App() {
  return (
    <ModalProvider>
      <div className="flex flex-col h-screen">
        <Header />
        <Chat />
      </div>
    </ModalProvider>
  );
}

export default App;
