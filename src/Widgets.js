import React from "react";
import "./Widgets.css";
import {
  TwitterTimelineEmbed,
  TwitterShareButton,
  TwitterTweetEmbed,
} from "react-twitter-embed";
import SearchIcon from "@mui/icons-material/Search";

function Widgets() {
  return (
    <div className="widgets">
      <div className="widgets__input">
        <SearchIcon className="widgets__searchIcon" />
        <input placeholder="Search twitter" type="text" />
      </div>

      <div className="widgets__widgetContainer">
        <h2>What’s happening</h2>
        <TwitterTweetEmbed
          tweetId={"1456509783431778307"}
          options={{ height: 400 }}
        />
        <TwitterTimelineEmbed
          sourceType="profile"
          screenName="MdAnasSabah"
          options={{ height: 400 }}
        />
        <TwitterShareButton
          url={"https://www.facebook.com/"}
          options={{ text: "#react.js is awesome", via: "MdAnasSabah" }}
        />
      </div>
    </div>
  );
}

export default Widgets;
