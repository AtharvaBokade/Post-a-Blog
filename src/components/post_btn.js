import './post_btn.css'
function Post_btn(props) {
    return(
        <button type="button" className="btn btn-success btn-lg post_btn" onClick={props.blog}>Post</button>
    );  
    }
    export default Post_btn;