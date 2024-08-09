import { useEffect, useRef, useState } from "react";
import paperPlaneTopIcon from "/paperPlaneTop.svg";
import MessageBox from "./MessageBox"


const ChatWindow = () => {
  const [message, setMessage] = useState("");
  const [chats, setChats] = useState([
    {
      id: 1,
      messageFrom: "user",
      messageBody: "This is a sent message",
      time: "02:59 PM"
    },
    {
      id: 0,
      messageFrom: "other",
      messageBody: "This is a recieved message",
      time: "02:58 PM"
    },
  ]);

  const chatContainerRef = useRef(null);

  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
    }
  }, [chats]);

  const sendMessage = (e) => {
    e.preventDefault();

    if (!message) return;

    var date = new Date();
    var hour = date.getHours();
    var min = date.getMinutes();
    var t = "AM";

    if (hour >= 12) {
      hour -= (hour > 12 ? 12 : 0);
      t = "PM";
    } if (hour.toString().length == 1) {
      hour = "0" + hour.toString();
    } if (min.toString().length == 1) {
      min = "0" + min.toString();
    }

    var time = `${hour}:${min} ${t}`;

    const newChat = {
      id: chats[chats.length - 1].id + 1,
      messageFrom: "user",
      messageBody: message,
      time: time
    }

    setChats([newChat, ...chats]);
  }

  return (
    <>
      <div className="flex flex-col-reverse overflow-y-scroll h-screen gap-8 p-11 sm:pb-[100px] pb-[200px] bg-[#f4f4f4]" ref={chatContainerRef}>
        {
          chats.map((c) => (
            <MessageBox key={c.id} chat={c} />
          ))
        }
      </div>

      <div className="flex flex-row fixed bottom-0 w-full">
        <input className="h-[80px] flex-grow rounded-xl pl-5 sm:pl-20 bg-white" value={message} onChange={(e) => setMessage(e.target.value)} placeholder="Type your message..." type="text" name="" id="" />
        <button type="button" className="fixed w-[70px] right-0 bottom-1 p-5" onClick={(e) => sendMessage(e)}>
          <img src={paperPlaneTopIcon} alt="" className="text-blue-300" />
        </button>
      </div>
    </>
  )
}
export default ChatWindow