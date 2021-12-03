import './name.css'
function Name(props) {
    return(
    <>
    <h4 className="name">Your Name</h4>
    <div className="input-group input-group-sm name_input">
        <input type="text" onChange={props.name_field} className="form-control " aria-label="Sizing example input" aria-describedby="inputGroup-sizing-lg" />
      </div>
    </>
    );
}
export default Name;