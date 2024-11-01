import styles from "./RichTextDangerouslyInnerHTML.module.css";
import PropTypes from "prop-types";
import {motion} from "framer-motion";
import {richTextResolver} from "@storyblok/richtext";

const {render} = richTextResolver()

function RichTextDangerouslyInnerHTML({richText, styling, ...props}) {
  return <motion.div className={`${styles.text} ${styling}`}
                     dangerouslySetInnerHTML={{__html: render(richText)}} {...props}/>;
}

RichTextDangerouslyInnerHTML.propTypes = {
  richText: PropTypes.object.isRequired,
  styling: PropTypes.string,
};

export default RichTextDangerouslyInnerHTML;