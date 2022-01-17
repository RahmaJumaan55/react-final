import video from "../video/book.mp4"
import styles from "./video.module.css"
function Video() {
    return ( 
        <>
        <video className={styles.video1} src={video} autoPlay muted loop ></video>

        </>
     );
}

export default Video; 