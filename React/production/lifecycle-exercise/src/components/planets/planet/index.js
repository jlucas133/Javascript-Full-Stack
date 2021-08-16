import React from 'react';
import GrayImg from '../../shared/gray_img';
import DescriptionWithLink from '../../shared/description_with_link';

class Planet extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            satellites: []
        }
    }

    render() {
        let title;
        title = <h4>{this.props.name}</h4>
        return (
            <div>
                {title}
                <DescriptionWithLink description={this.props.description} link={this.props.link} />
                <GrayImg img_url={this.props.img_url} gray={this.props.gray} />
                <hr />
            </div>
        )
    }


}

export default Planet;