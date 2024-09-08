import PropTypes from "prop-types";
import {motion} from "framer-motion";

function AnimatedMain({children}) {
    return (
        <motion.main initial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity: 0}} transition={{duration: 0.5}}>
            {children}
        </motion.main>
    );
}

AnimatedMain.propTypes = {
    children: PropTypes.node.isRequired,
};

export default AnimatedMain;