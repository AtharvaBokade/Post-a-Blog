import React from 'react';


import Edit from './editingArea'
import './home.css'
import Header from './header'
import Name from './name'
import Title from './heading'
import Post_btn from './post_btn'
import Right_bg from './right_bg'
import Blog from './blog'
const blog=<h1>Component works</h1>
class Home extends React.Component {
    state={
        Name:"Atharva",
        Title:"Title",  
        Body:"Body",
        click_status1:1,
        
    }
    
    name_field=(event)=>{
        
        var modified_name = event.target.value;
        this.state.Name = modified_name;
        this.setState({Name:this.state.Name})
        
    }
    title_field=(event)=>{
        var modified_title = event.target.value;
        this.state.Title = modified_title;
        this.setState({Title:this.state.Title})
    }
    body_field=(event)=>{
        var modified_body = event.target.value;
        this.state.Body = modified_body;
        this.setState({Body:this.state.Body})
    }
    blog_create=()=>{
        
       this.setState({click_status:true});
       
    
    }
    render() { 
        
        return(

            <>
            <Blog Name={this.state.Name} Title={this.state.Title} Body={this.state.Body} click={this.state.click_status}/>
            <Right_bg/>
            <Header/>    
            <Name name_field={this.name_field.bind(this)}/>
            <Title title_field={this.title_field.bind(this)}/>
            <Edit body_field={this.body_field.bind(this)}/>
            <Post_btn blog={this.blog_create.bind(this)}/>
            </>
        );
    }
}
 
export default Home;