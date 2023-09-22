import logo from "./logo.svg";
import "./App.css";
import { Header } from "./components/Header";
import { Chat } from "./components/Chat";

function App() {
  return (
    <div className="flex flex-col h-screen">
      <Header />
      <Chat />
    </div>
  );
}

export default App;
