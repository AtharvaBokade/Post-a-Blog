import './heading.css'
function Title(props) {
return(
    <>
    <h4 className="title">Title</h4>
    <div className="input-group input-group-sm title_input">
        <input type="text" onChange={props.title_field} className="form-control " aria-label="Sizing example input" aria-describedby="inputGroup-sizing-lg" />
      </div>
    </>
);
    
}

export default Title;