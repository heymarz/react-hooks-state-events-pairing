function Comment(props){
 
  return(
    <div>
    <h3>{props.comment.user}</h3>
    <p>{props.comment.comment}</p>
  </div>
  )
}

export default Comment;