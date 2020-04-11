// You will add code to this file
import React, { useState } from "react";
import CommentInput from "./CommentInput";
import Comment from "./Comment";
import "./Comment.css";



const CommentSection = (props) => {
  // Add state for the comments


  

  const [comments]= useState(props.comment);

 
  return (
    <div>
      {comments.map((commentz,index)=>{
        return <Comment key={index} comment={commentz} />
      })}
      <CommentInput />
    </div>
  );
};

export default CommentSection;
