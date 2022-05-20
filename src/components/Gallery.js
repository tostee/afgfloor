import React from "react";
import { _IMAGES } from "../data/data";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";

class Gallery extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: []
    };
  }

  render() {
    return (
      <div className="">
        <ImageGallery showThumbnails={true} items={_IMAGES} />
      </div>
    );
  }
}
export default Gallery;