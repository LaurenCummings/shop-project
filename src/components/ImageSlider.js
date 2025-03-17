import './ImageSlider.css';
import { useState } from 'react';
import { ArrowCircleLeft, ArrowCircleRight } from 'phosphor-react';

const ImageSlider = ({images}) => {
    const [imageIndex, setImageIndex] = useState(0);

    function showPrevImage() {
        setImageIndex(index => {
            if (index === 0) {
                return images.length - 1;
            }
            return index - 1;
        })
    }

    function showNextImage() {
        setImageIndex(index => {
            if (index === images.length - 1) {
                return 0;
            }
            return index + 1;
        })
    }

    return (
        <div className="imageSlider">
            <img src={images[imageIndex]} alt="product" className="img-slider-img" />
            <button onClick={showPrevImage} className="img-slider-btn-left"><ArrowCircleLeft size={32} /></button>
            <button onClick={showNextImage} className="img-slider-btn-right"><ArrowCircleRight size={32} /></button>
        </div>
    )
}

export default ImageSlider;