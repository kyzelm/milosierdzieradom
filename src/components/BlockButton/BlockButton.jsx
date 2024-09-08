import styles from "./BlockButton.module.css";
import PropTypes from "prop-types";

function BlockButton({ children, ...props }) {
  return <button type={"button"} className={styles.button} {...props}>{children}</button>;
}

BlockButton.propTypes = {
  children: PropTypes.node.isRequired,
};

export default BlockButton;