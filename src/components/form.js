import React,{useState} from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import  "../component_stylesheets/form.css";
//class Form extends React.Component{
const Form=(props)=>{
    // state={
    //     userName:''
    // }
    const [userName,setUserName]=useState('');
   const handleSubmit=async(event)=>{
        event.preventDefault();
        const resp= await axios.get(`https://api.github.com/users/${this.state.userName}`);
        //this.props.onSubmit(resp.data);
        props.onSubmit(resp.data);
        //this.setState({userName:''});
        setUserName('');
    }
    // render(){
    //     const {userName}=this.state;
        return(
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Github Username" value={userName} onChange={event=>this.setState({userName:event.target.value})} required/>
                <button >Add Card</button>
            </form>
        )
    }
//}
Form.propTypes={
    onSubmit:PropTypes.func.isRequired
}
export default Form;