import * as React from "react";
import { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import "yet-another-react-lightbox/plugins/thumbnails.css";
import "./Gallery.scss";




const Gallery = () => {
  const [index, setIndex] = useState(-1);
  const handleClick = (photoIndex) => {
    setIndex(photoIndex);
  };

  return (
    <>
      <div className="gallery-wrapper" >
        <div className="gallery-container" id="gallery">
          <div className="gallery-title">Gallery</div>
          <div className="center-part">
            <div className="front-foto">
              <img
                src="./image/FotoGallery/gallery2.jpg"
                alt="front foto"
                onClick={() => handleClick(0)}
              ></img>
            </div>
            <div className="front-foto">
              <img
                src="./image/FotoGallery/gallery6c.jpg"
                alt="front foto"
                onClick={() => handleClick(1)}
              ></img>
            </div>
            <div className="front-foto">
              <img
                src="./image/FotoGallery/gallery4e.jpg"
                alt="front foto"
                onClick={() => handleClick(2)}
              ></img>
            </div>
          </div>

          <div className="bottom-part">
            <div className="small-foto">
              <img
                src="./image/FotoGallery/frontMain_mini.jpg"
                alt="small-foto"
                onClick={() => handleClick(5)}
              ></img>
            </div>
            <div className="small-foto">
              <img
                src="./image/FotoGallery/pocketSide_mini.jpg"
                alt="small-foto"
                onClick={() => handleClick(6)}
              ></img>
            </div>
            <div className="small-foto">
              <img
                src="./image/FotoGallery/back2_mini.jpg"
                alt="small-foto"
                onClick={() => handleClick(7)}
              ></img>
            </div>
            <div className="small-foto">
              <img
                src="./image/FotoGallery/pocket1_mini.jpg"
                alt="small-foto"
                onClick={() => handleClick(13)}
              ></img>
            </div>

            <div className="small-foto">
              <img
                src="./image/FotoGallery/section1_mini.jpg"
                alt="small-foto"
                onClick={() => handleClick(9)}
              ></img>
            </div>

            <div className="small-foto">
              <img
                src="./image/FotoGallery/net2_mini.jpg"
                alt="small-foto"
                onClick={() => handleClick(12)}
              ></img>
            </div>

            <div className="last-mini-poto">
              <img
             
                src="./image/FotoGallery/straps0_mini.jpg"
                alt="small-foto"
                onClick={() => handleClick(8)}
              ></img>
            </div>
          </div>
        </div>
      </div>
      <Lightbox
        styles={{ root: { "--yarl__color_backdrop": "rgba(0, 0, 0, .9)" } }}
        open={index >= 0}
        index={index}
        close={() => setIndex(-1)}
        plugins={[Fullscreen, Thumbnails, Zoom]}
        slides={[
          { src: "./image/FotoGallery/gallery2.jpg" },
          { src: "./image/FotoGallery/gallery6.jpg" },
          { src: "./image/FotoGallery/gallery4.jpg" },
          { src: "./image/FotoGallery/gallery3.jpg" },
          { src: "./image/FotoGallery/view2.jpg" },
          { src: "./image/FotoGallery/frontMain.jpg" },
          { src: "./image/FotoGallery/pocketSide.jpg" },
          { src: "./image/FotoGallery/back2.jpg" },
          { src: "./image/FotoGallery/straps0.jpg" },
          { src: "./image/FotoGallery/section1.jpg" },
          { src: "./image/FotoGallery/section2.jpg" },
          { src: "./image/FotoGallery/section3.jpg" },
          { src: "./image/FotoGallery/net1.jpg" },
          { src: "./image/FotoGallery/pocket1.jpg" },
          { src: "./image/FotoGallery/pocket2.jpg" },
          { src: "./image/FotoGallery/pocket4.jpg" },
          { src: "./image/FotoGallery/accessories1.jpg" },
          { src: "./image/FotoGallery/accessories2.jpg" },
          { src: "./image/FotoGallery/straps.jpg" },
          { src: "./image/FotoGallery/sideTop.jpg" },
          { src: "./image/FotoGallery/gallery5.jpg" },
        ]}
      />
    </>
  );
};
export default Gallery;
