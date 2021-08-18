import React, {useState, useEffect} from 'react';
import GrayImg from '../../shared/gray_img';
import DescriptionWithLink from '../../shared/description_with_link';
import Form from './form';

async function getSatellites(id) {
    let response = await fetch(`http://localhost:3000/api/${id}.json`)
    let data = await response.json()
    return data;
}

const Planet = (props) => {

    const [satellites, setSatellites] = useState([])

    useEffect(() => { 
        getSatellites(props.id).then(data =>{
            setSatellites(data['satellites'])
        })
    }, [])

    const addSatellites = (new_satellite) => {
        setSatellites([...satellites, new_satellite])
    }

    let title;
    title = <h4>{props.name}</h4>
    return (
        <div>
            {title}
            <DescriptionWithLink description={props.description} link={props.link} />
            <GrayImg img_url={props.img_url} gray={props.gray} />
            <h4>Satélites</h4>
            <hr/>
                <Form addSatellites={addSatellites}/>
            <hr/>
            <ul>
                {satellites.map((satellite, index) =>
                    <li key={index}>{satellite.name}</li>
                )}
            </ul>
            <hr />
        </div>
    )
}

export default Planet;