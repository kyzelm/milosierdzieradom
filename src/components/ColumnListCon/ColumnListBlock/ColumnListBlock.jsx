import styles from './ColumnListBlock.module.css';
import PropTypes from "prop-types";
import {getDateFromStoryblokFormat} from "../../../utils/storyblokDataConverter.js";
import RichTextDangerouslyInnerHTML from "../../RichTextDangerouslyInnerHTML/RichTextDangerouslyInnerHTML.jsx";
import {AnimatePresence} from "framer-motion";

function ColumnListBlock({text, date, active, handleClick, ...props}) {
    const dateObj = new Date(date);

    return (
        <article className={styles.block} {...props}>
            <p onClick={handleClick}>{getDateFromStoryblokFormat(dateObj)} - {getDateFromStoryblokFormat(dateObj.setDate(dateObj.getDate() + 7))}</p>
            <AnimatePresence>
                {active && <RichTextDangerouslyInnerHTML initial={{height: 0, margin: 0}} animate={{height: 'auto', margin: '1rem'}} exit={{height: 0, margin: 0}} styling={styles.text} richText={text}/>}
            </AnimatePresence>
        </article>
    );
}

ColumnListBlock.propTypes = {
    text: PropTypes.object.isRequired,
    date: PropTypes.string.isRequired,
    active: PropTypes.bool,
    handleClick: PropTypes.func,
};

export default ColumnListBlock;