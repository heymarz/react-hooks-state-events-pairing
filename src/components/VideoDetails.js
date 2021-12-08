import { useState } from "react";

function VideoDetails(props){
  const [upvotes, setUpvotes] = useState(props.upvotes)
  const [downvotes, setDownvotes] = useState(props.downvotes)
  
  function handleClick(event){
    switch(event.target.id){
      case "upvote-button":
        setUpvotes(upvotes + 1);
        break;
      case "downvote-button":
        setDownvotes(downvotes - 1);
        break;
      case "toggle-button":
        const container = document.getElementById("comment-container");
        container.classList.toggle("hidden")
        if(event.target.innerText==="Hide Comment"){
          event.target.innerText = "Show Comment"
        }else{
          event.target.innerText = "Hide Comment"
        }
        break;
      default:
        break;
    }
  }

  return(
    <div>
    <h1>{props.title}</h1>
    <p>{props.views} Views | Uploaded {props.date}</p>
    <button onClick={handleClick} id="upvote-button">{upvotes} 👍</button>
    <button onClick={handleClick} id="downvote-button">{downvotes} 👎</button>
    <br></br>
    <br></br>
    <button onClick={handleClick} id="toggle-button">Hide Comments</button>
    </div>
  )
}

export default VideoDetails;