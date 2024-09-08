import styles from './FlexListBlock.module.css';
import PropTypes from "prop-types";
import {HashLink} from "react-router-hash-link";

function FlexListBlock({title, image, date, slug, ...props}) {
    return (
        <HashLink to={slug + "/#"} className={styles.flexBlock} {...props}>
            <article>
                <img src={image} alt={title}/>
                {date && <p>{date}</p>}
            </article>
            <h3>{title}</h3>
        </HashLink>
    );
}

FlexListBlock.propTypes = {
    title: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    date: PropTypes.string,
    slug: PropTypes.string.isRequired,
};

export default FlexListBlock;