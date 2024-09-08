import styles from "./RichTextDangerouslyInnerHTML.module.css";
import PropTypes from "prop-types";
import {motion} from "framer-motion";
import {renderRichText} from "@storyblok/js";

function RichTextDangerouslyInnerHTML({richText, styling, ...props}) {
    return <motion.div className={`${styles.text} ${styling}`}
                       dangerouslySetInnerHTML={{__html: renderRichText(richText)}} {...props}/>;
}

RichTextDangerouslyInnerHTML.propTypes = {
    richText: PropTypes.object.isRequired,
    styling: PropTypes.string,
};

export default RichTextDangerouslyInnerHTML;