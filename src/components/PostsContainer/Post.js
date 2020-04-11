// You will add code in this file
import React, { useState } from "react";
import CommentSection from "../CommentSection/CommentSectionContainer";
import LikeSection from "./LikeSection";
import PostHeader from "./PostHeader";


import "./Posts.css";

// pass props in this file to
const Post = props => {
  // set up state for the likes
  const [likes, setLikes]= useState(props.post.likes);
  const likeValue=()=>{
    setLikes(likes +1)
  }


  return (
    <div className="post-border">
      <PostHeader
        username={props.post.username}
        thumbnailUrl={
          props.post.thumbnailUrl
        }
      />
      <div className="post-image-wrapper">
        <img
          alt="post thumbnail"
          className="post-image"
          src={props.post.imageUrl}
        />
      </div>
      <LikeSection 
      likesFunction={likeValue}
      likesNumber={likes} 
       />

       {/*where is postID coming from and what does it do? */}
      <CommentSection
        postId={props.post.imageUrl}
        comment={props.post.comments}
      />
      
    </div>
  );
};

export default Post;


