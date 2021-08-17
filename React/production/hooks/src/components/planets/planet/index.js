import React from 'react';
import GrayImg from '../../shared/gray_img';
import DescriptionWithLink from '../../shared/description_with_link';

async function getSatellites(id){
    let response = await fetch(`http://localhost:3000/api/${id}.json`)
    let data = await response.json()
    return data;
}



class Planet extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            satellites: []
        }
    }

    
    componentDidMount(){
        getSatellites(this.props.id).then(data =>{
            this.setState(state =>({
                satellites: data['satellites']
            }))
        })
    }

    render() {
        let title;
        title = <h4>{this.props.name}</h4>
        return (
            <div>
                {title}
                <DescriptionWithLink description={this.props.description} link={this.props.link} />
                <GrayImg img_url={this.props.img_url} gray={this.props.gray} />
                <h4>Satélites</h4>
                <ul>
                    {this.state.satellites.map((satellite, index) =>
                        <li key={index}>{satellite.name}</li>
                    )}
                </ul>
                    
                <hr />
            </div>
        )
    }


}

export default Planet;