import React, {Fragment, useState} from 'react';

const Form = (props) => {
    const [fields, setFields] = useState({
        name: ''
    }

    );
    const handleFieldsChange = (event) => setFields({
        ...fields,
        [event.currentTarget.name]: event.currentTarget.value
    });
    const handleSubmit = (event) => {
        props.addPlanet(fields);
        event.preventDefault();
    }

    return (
        <Fragment>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name">Name: </label>
                    <input id="name" type="text" name="name" value={fields.name} onChange={handleFieldsChange}/>
                </div>
                
                <input type="submit"/>
            </form>
            
            
        </Fragment>
    )
}


export default Form;