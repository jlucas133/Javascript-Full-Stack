import React, { Fragment } from 'react';

const DescriptionWithLink = (props) => {
    return (
        <Fragment>
            <p>{props.text}</p>
            <p><a href={props.url}>{props.url}</a></p>
        </Fragment>
    )
}

export default DescriptionWithLink;