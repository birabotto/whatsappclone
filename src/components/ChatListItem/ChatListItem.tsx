import React from "react";
import "./ChatListItem.css";
import { ChatListItemType } from "../../types/ChatListItemType";

type Props = {
  data: ChatListItemType;
  active: boolean;
  onClick: () => void;
};
function ChatListItem({ data, active, onClick }: Props) {
  return (
    <div className={`chatListItem ${active ? "active" : ""}`} onClick={onClick}>
      <img className="chatListItem--avatar" src={data.image} alt="" />
      <div className="chatListItem--lines">
        <div className="chatListItem--line">
          <div className="chatListItem--name">{data.title}</div>
          <div className="chatListItem--date">19:00</div>
        </div>
        <div className="chatListItem--line">
          <div className="chatListItem--lastMsg">
            <p>
              The following npm package, @material-ui/icons, includes the 1,100+
              official Material icons converted to SvgIcon components.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ChatListItem;
