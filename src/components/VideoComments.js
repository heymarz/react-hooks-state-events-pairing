import Comment from "./Comment"

function VideoComments (props){
  // I want to display each comment
  function renderComments(){
    return props.comments.map((comment,index)=>{
        return(
      <Comment
      key={index} 
      comment={comment} 
      />
    )})}

  return(
    <div id="comment-container">
      <h2>{props.comments.length} Comments</h2>
      {renderComments()}
    </div>
  )
}

export default VideoComments;