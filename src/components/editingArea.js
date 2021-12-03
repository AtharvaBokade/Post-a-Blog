import './editingArea.css'
function Edit(props){
  
    return(
        
        <div>
         <textarea className="form-control editingArea" onChange={props.body_field} rows={15} defaultValue={""} />
          
        </div>
        
         
      
    );
   
}
export default Edit;