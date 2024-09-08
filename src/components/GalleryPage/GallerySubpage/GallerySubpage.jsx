import {useNavigate, useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {storyblokApi} from "../../../main.jsx";
import AnimatedMain from "../../AnimatedMain/AnimatedMain.jsx";
import ImageCarrousel from "../../ImageCarrousel/ImageCarrousel.jsx";
import LoadingAnimationBlock from "../../LoadingAnimationBlock/LoadingAnimationBlock.jsx";

function GallerySubpage() {
    const {slug} = useParams()
    const navigate = useNavigate();
    const [photos, setPhotos] = useState(null);

    useEffect(() => {
        storyblokApi.get(`cdn/stories/gallery/${slug}`).then(response => {
            setPhotos(response.data.story);
        }).catch(error => {
            navigate('/404');
            console.log(error);
        });
    }, [navigate, slug]);

    return (<>
        <AnimatedMain>
            {photos !== null && <>
                <h2>{photos.content.title}</h2>
                <ImageCarrousel images={photos.content.images}/>
            </>}
            {photos === null && <LoadingAnimationBlock/>}
        </AnimatedMain>
    </>);
}

export default GallerySubpage;