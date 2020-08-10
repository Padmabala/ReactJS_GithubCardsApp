import React from 'react';
import PropTypes from 'prop-types';
import Card from './card';

const CardList=(props)=>{
    
    const {profiles}=props;
    return(
        <div>
            {
                profiles.map((profile,index)=>
                    <Card key={index} {...profile}/>
                )
            }
        </div>
    )
}
CardList.propTypes=PropTypes.array.isRequired;
export default CardList;