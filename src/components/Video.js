import VideoDetails from "./VideoDetails";
import VideoComments from "./VideoComments"

function Video(props){

  return (
    <div>
      <iframe
        width="919"
        height="525"
        src={props.video.embedUrl}
        frameBorder="0"
        allowFullScreen
        title="Thinking in React"
      />
    <VideoDetails 
     title= {props.video.title}
     views={props.video.views}
     date={props.video.createdAt}
     upvotes={props.video.upvotes}
     downvotes={props.video.downvotes}
    />
    <VideoComments comments={props.video.comments} />
      </div>
    
  )
}

export default Video;