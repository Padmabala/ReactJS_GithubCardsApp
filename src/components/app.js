import React,{Component} from 'react';
import PropTypes from 'prop-types';
import styles from "../component_stylesheets/app.css"
import CardList from './cardList';
import Form from './form';
class App extends Component{
    testData = [
        {name: "Dan Asimov", avatar_url: "https://avatars0.githubusercontent.com/u/810438?v=4", company: "@facebook"},
        {name: "Sophie Alpert", avatar_url: "https://avatars2.githubusercontent.com/u/6820?v=4", company: "ham"},
        {name: "Sebastian Mark", avatar_url: "https://avatars2.githubusercontent.com/u/63648?v=4", company: "Facebook"},
    ];
    // constructor(props){
    //     super(props);
    //     state={
    //         profiles:testData
    //     };
    // }
    state={
        profiles:this.testData
    }
    addNewProfile=(profileData)=>{
        this.setState(prevState=>({
            //profiles:[...this.state.profiles,profileData]
            profiles:[...prevState.profiles,profileData]
        }))
    }
    render(){
        const {profiles}=this.state;
        return(
            <div className={styles.header}>
                {this.props.title}
            <Form onSubmit={this.addNewProfile}/>
            <CardList profiles={profiles}/>
            </div>

        )
    }
}

App.propTypes=PropTypes.string.isRequired;

export default App;