import styles from "./ImageCarrousel.module.css";
import PropTypes from "prop-types";
import {useState} from "react";
import BlockButton from "../BlockButton/BlockButton.jsx";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faAngleLeft, faAngleRight} from "@fortawesome/free-solid-svg-icons";
import {useImage} from "react-image";
import LoadingAnimationBlock from "../LoadingAnimationBlock/LoadingAnimationBlock.jsx";

function ImageCarrousel({images}) {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const {src, isLoading} = useImage({
        srcList: images[currentImageIndex].filename,
        useSuspense: false,
    });

    const handleNextImage = () => {
        setCurrentImageIndex((currentImageIndex + 1) % images.length);
    };

    const handlePreviousImage = () => {
        setCurrentImageIndex(currentImageIndex === 0 ? images.length - 1 : currentImageIndex - 1);
    };

    return (<div className={styles.carrousel}>
        <div className={styles.imageCon}>
            {!isLoading && <img src={src} alt="zdjęcie wydarzenia"/>}
            {isLoading && <LoadingAnimationBlock/>}
        </div>
        <div className={styles.navCon}>
            <BlockButton onClick={handlePreviousImage}>
                <FontAwesomeIcon icon={faAngleLeft}/>
            </BlockButton>
            <BlockButton onClick={handleNextImage}>
                <FontAwesomeIcon icon={faAngleRight}/>
            </BlockButton>
        </div>
    </div>);
}

ImageCarrousel.propTypes = {
    images: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default ImageCarrousel;