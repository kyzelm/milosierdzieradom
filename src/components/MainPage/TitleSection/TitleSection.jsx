import styles from './TitleSection.module.css';
import {useScrollBackground} from "../../../utils/customHooks.js";
import jesusImage from "/src/assets/jezus-miłosierny.webp";
import {HashLink} from "react-router-hash-link";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faAngleDown} from "@fortawesome/free-solid-svg-icons";

function TitleSection() {
    const titleSection = useScrollBackground();

    return <section ref={titleSection} className={styles.titleSection}>
        <img src={jesusImage} alt="Portret Jezusa" className={styles.cornerImage}/>
        <div className={styles.titleBlock}>
            <sub>Parafia pw.</sub>
            <h1>
                Miłosierdzia <br/>
                ㅤBożego
            </h1>
            <sup>w Radomiu</sup>
        </div>
        <HashLink to="#about" className={styles.scrollDown}>
            <FontAwesomeIcon icon={faAngleDown} />
        </HashLink>
    </section>
}

export default TitleSection;