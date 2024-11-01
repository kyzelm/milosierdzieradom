import AnimatedMain from "../AnimatedMain/AnimatedMain.jsx";
import FlexListCon from "../FlexListCon/FlexListCon.jsx";
import {useSelector} from "react-redux";

function GalleryPage() {
  const galleryItems = useSelector(state => state.data.photos);

  return <AnimatedMain>
    <h2>Galeria</h2>
    <FlexListCon itemsList={galleryItems}/>
  </AnimatedMain>;
}

export default GalleryPage;