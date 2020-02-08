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
        
        return (
            <div>
                <h1>Hello</h1>
            </div>
        )
    }
}

export default Details;
