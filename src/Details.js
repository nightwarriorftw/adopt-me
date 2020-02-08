import React from 'react';
import Pet from "@frontendmasters/pet";

class Details extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {
            loading: true
        };
    }

    componentDidMount() {
        Pet.animal(this.props.id).then( ({animal}) => {
            this.setState({
                name: animal.name,
                animal: animal.type,
                location: `${animal.contact.address.city} ${animal.contact.address.country}`,
                description: animal.description,
                media: animal.photos,
                breed: animal.breeds.primary,
                loading: false
            })
        }, console.error);
    }

    render() {
        if(this.state.loading) {
            return <h1 className="item-center">Loading...</h1>
        }

        const { name, animal, location, description, media, breed} = this.state;
        return (
            <div className="details">
                <div>
                    <h1>{name}</h1>
                    <h2>{`${animal} - ${breed} - ${location}`}</h2>
                    <button>Adopt Name</button>
                    <p>{description}</p>
                </div>
            </div>
        )
    }
}

export default Details;
