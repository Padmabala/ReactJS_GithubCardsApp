import React from 'react';
import PropTypes from 'prop-types';
import styles from "../component_stylesheets/card.css";
//class Card extends Component{
const Card=(props)=>{
    
    //render(){
        const {avatar_url,name}=props;
        
        console.log("Hey",avatar_url,name,props.company);
        return(
            <div className={styles.githubProfile}>
                <img src={avatar_url} />
                <div className={styles.info}>
        <div className={styles.name}>{name}</div>
                    <div className={styles.company}>{props.company}</div>
                </div>
            </div>
        )
 //   }
}
Card.propTypes={
    profile:PropTypes.object.isRequired,
    avatar_url:PropTypes.string.isRequired,
    name:PropTypes.string.isRequired,
    company:PropTypes.string.isRequired
}
export default Card;