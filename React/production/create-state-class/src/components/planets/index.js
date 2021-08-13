import Planet from './planet';
import React, { Fragment } from 'react';

const clickOnPlanet = (name) => {
    console.log(`Um click no Planeta: ${name}`)
}

class Planets extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            planets: [
                {
                    name: "Mercúrio",
                    text: "Mercúrio é o menor[nota 1][nota 2] e mais interno planeta do Sistema Solar, orbitando o Sol a cada 87,969 dias terrestres. A sua órbita tem a maior excentricidade e o seu eixo apresenta a menor inclinação em relação ao plano da órbita dentre todos os planetas do Sistema Solar. Mercúrio completa três rotações em torno de seu eixo a cada duas órbitas. ",
                    url: "https://pt.wikipedia.org/wiki/Merc%C3%BArio_(planeta)",
                    img_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Mercury_in_color_-_Prockter07-edit1.jpg/280px-Mercury_in_color_-_Prockter07-edit1.jpg",
                    clickOnPlanet: clickOnPlanet
                },

                {
                    name: "Plutão",
                    text: "Plutão, formalmente designado 134340 Plutão, é um planeta anão do Sistema Solar e o nono maior e décimo mais massivo objeto observado diretamente orbitando o Sol. Originalmente classificado como um planeta, Plutão é atualmente o maior membro conhecido do cinturão de Kuiper,[12] uma região de corpos além da órbita de Netuno.",
                    url: "https://pt.wikipedia.org/wiki/Plut%C3%A3o",
                    img_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ef/Pluto_in_True_Color_-_High-Res.jpg/280px-Pluto_in_True_Color_-_High-Res.jpg",
                    clickOnPlanet: clickOnPlanet

                }
            ]

        }
    }
    removeLast = () => {
        let new_planets = [...this.state.planets]
        new_planets.pop()
        this.setState(state =>({
            planets: new_planets
        }))
    }

    duplicateLastPlanet = () =>{
        let last_planet = this.state.planets[this.state.planets.length - 1]
        this.setState(state =>({
            planets: [...this.state.planets, last_planet]
        }))
    }

    render() {
        return (
            <Fragment>
                <h3>Planet List</h3>
                <button onClick={this.removeLast}>Remove Last!</button>
                <button onClick={this.duplicateLastPlanet}>Duplicate Last!</button>
                <hr />

                {this.state.planets.map((planet) =>
                    <Planet
                        name={planet.name}
                        text={planet.text}
                        url={planet.url}
                        img_url={planet.img_url}
                        clickOnPlanet={planet.clickOnPlanet}
                    />
                )}

            </Fragment >
        )
    }
}

export default Planets;