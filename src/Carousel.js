// Carousel Implementation

import React from "react";

// Note: Button handles photos a lot better
class Carousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      photos: [],
      active: 0
    };

    this.handleIndexClick = this.handleIndexClick.bind(this);
  }
  static getDerivedStateFromProps({ media }) {
    let photos = ["http://placeorgi.com/600/600"];

    if (media.length) {
      photos = media.map(({ large }) => large);
    }

    return { photos };
  }
  // `+` urinary plus turns it into a number
  handleIndexClick(event) {
    this.setState({
      active: +event.target.dataset.index
    });
  }

  render() {
    const { photos, active } = this.state;

    return (
      <div className="carousel">
        <img src={photos[active]} alt="animals" />

        <div className="carousel-smaller">
          {photos.map((photo, index) => (
            //eslint-disable-next-line
            <img
              key={index}
              onClick={this.handleIndexClick}
              alt="animal thumbnail"
              data-index={index}
              src={photo}
              className={index === active ? "active" : ""}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default Carousel;
