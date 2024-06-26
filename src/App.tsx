import "./App.css";

import ChatListItem from "./components/ChatListItem/ChatListItem";
import ChatIntro from "./components/ChatIntro/ChatIntro";
import { useState, useEffect } from "react";
import DonutLargeIcon from "@material-ui/icons/DonutLarge";
import ChatIcon from "@material-ui/icons/Chat";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import SearchIcon from "@material-ui/icons/Search";
import { ChatListItemType } from "./types/ChatListItemType";
import { ActiveChat } from "./types/ActiveChat";
import ChatWindow from "./components/ChatWindow/ChatWindow";
function App() {
  const [activeChat, setActiveChat] = useState<ActiveChat>({});
  const [chatlist, setChatlist] = useState<ChatListItemType[]>([
    {
      chatId: 1,
      title: "Fulano",
      image:
        "https://icons.veryicon.com/png/o/miscellaneous/user-avatar/user-avatar-male-5.png",
    },
    {
      chatId: 2,
      title: "Fulano 2",
      image:
        "https://icons.veryicon.com/png/o/miscellaneous/user-avatar/user-avatar-male-5.png",
    },
    {
      chatId: 3,
      title: "Fulano 3",
      image:
        "https://icons.veryicon.com/png/o/miscellaneous/user-avatar/user-avatar-male-5.png",
    },
    {
      chatId: 4,
      title: "Fulano 4",
      image:
        "https://icons.veryicon.com/png/o/miscellaneous/user-avatar/user-avatar-male-5.png",
    },
  ]);
  return (
    <div className="app-window">
      <div className="sidebar">
        <header>
          <img
            className="header--avatar"
            src="https://icons.veryicon.com/png/o/miscellaneous/user-avatar/user-avatar-male-5.png"
            alt=""
          />
          <div className="header--buttons">
            <div className="header--btn">
              <DonutLargeIcon style={{ color: "#919191" }} />
            </div>
            <div className="header--btn">
              <ChatIcon style={{ color: "#919191" }} />
            </div>
            <div className="header--btn">
              <MoreVertIcon style={{ color: "#919191" }} />
            </div>
          </div>
        </header>
        <div className="search">
          <div className="search--input">
            <SearchIcon fontSize="small" style={{ color: "#919191" }} />
            <input type="search" placeholder="Search or new chat" />
          </div>
        </div>
        <div className="chatlist">
          {chatlist.map((item, key) => (
            <ChatListItem
              active={activeChat.chatId === chatlist[key]}
              key={key}
              data={item}
              onClick={() => setActiveChat(chatlist[key])}
            />
          ))}
        </div>
      </div>
      <div className="contentarea">
        {activeChat.chatId !== undefined && <ChatWindow />}
        {activeChat.chatId == undefined && <ChatIntro />}
      </div>
    </div>
  );
}

export default App;
