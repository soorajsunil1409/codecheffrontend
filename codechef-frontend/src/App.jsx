import NavBar from "./components/NavBar";
import ChatWindow from "./components/ChatWindow";

const App = () => {

  return (
    <div className="flex flex-row h-screen">
      <div className="bg-red-600 h-screen sm:basis-1/4 basis-0 flex-grow"></div>

      <div className="flex flex-col justify-start sm:basis-3/4 w-[100vw]">
        <NavBar />
        <ChatWindow />
      </div>
    </div>
  );
};
export default App;
