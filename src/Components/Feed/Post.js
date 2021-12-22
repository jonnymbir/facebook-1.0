import { Avatar } from "@material-ui/core";
import {
  AccountCircle as AccountCircleIcon,
  ChatBubbleOutline as ChatBubbleOutlineIcon,
  ExpandMoreOutlined as ExpandMoreOutlinedIcon,
  NearMe as NearMeIcon,
  ThumbUp as ThumbUpIcon,
} from "@material-ui/icons";
import React from "react";
import "./Post.css";

const Post = ({ profilePic, image, username, timestamp, message }) => {
  return (
    <div className="post">
      <div className="post__top">
        <Avatar src={profilePic} className="post__avatar" />
        <div className="post__topInfo">
          <h3>{username}</h3>
          <p>{ new Date(timestamp?.toDate()).toUTCString() }</p>
        </div>
      </div>

      <div className="post__bottom">
        <p>{message}</p>
      </div>

      {image &&
      <div className="post__image">
        <img src={image} alt="Image" />
      </div>
      }

      <div className="post__options">
        <div className="post__option">
          <ThumbUpIcon />
          <p>Like</p>
        </div>
        <div className="post__option">
          <ChatBubbleOutlineIcon />
          <p>Comment</p>
        </div>
        <div className="post__option">
          <NearMeIcon />
          <p>Share</p>
        </div>
        <div className="post__option">
          <AccountCircleIcon />
          <ExpandMoreOutlinedIcon />
        </div>
      </div>
    </div>
  );
};

export default Post;
