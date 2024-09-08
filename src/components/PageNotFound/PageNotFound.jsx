import {Link} from "react-router-dom";
import BlockButton from "../BlockButton/BlockButton.jsx";
import AnimatedMain from "../AnimatedMain/AnimatedMain.jsx";
import HeaderImage from "../HeaderImage/HeaderImage.jsx";

function PageNotFound() {
    return (<>
        <AnimatedMain>
            <h1>Nie znaleziono strony</h1>
            <p>Przepraszamy, ale strona, której szukasz, nie istnieje.</p>
            <Link to={"/"}><BlockButton>Powróć do strony głównej</BlockButton></Link>
        </AnimatedMain>
    </>);
}

export default PageNotFound;