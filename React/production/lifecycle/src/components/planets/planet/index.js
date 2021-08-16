import React from 'react';
import GrayImg from '../../shared/gray_img';
import DescriptionWithLink from '../../shared/description_with_link';

const Planet = (props) => {

    let title;
    title = <h4>{props.name}</h4>

    return (
        <div>
            {title}
            <DescriptionWithLink description={props.description} link={props.link} />
            <GrayImg img_url={props.img_url} gray={props.gray} />
            <hr />
        </div>
    )
}

export default Planet;