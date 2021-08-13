import React, { Fragment } from 'react';

const DescriptionWithLink = (props) => {
    if(!props.text)
        return null;

    if(props.url){
        return (
            
            <Fragment>
                <p>{props.text}</p>
                <p><a href={props.url}>{props.url}</a></p>
            </Fragment>
        )
    }else {
        return (
            
            <Fragment>
                <p><u>{props.text}</u></p>
            </Fragment>
        )
    }
}

export default DescriptionWithLink;