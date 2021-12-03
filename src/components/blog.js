import "./blog.css";
function Blog(props) {
  if(props.click===true){
    return (
      <div className="card blog" >
        <div className="card-body">
          <h6 className="card-subtitle mb-2 text-muted">{props.Name}</h6>
          <h5 className="card-title">{props.Title}</h5>
          <p className="card-text">
            {props.Body}

          </p>
        </div>
      </div>
    );
  }
  else{
    return <p></p>;
  }
  
}
 export default Blog;
