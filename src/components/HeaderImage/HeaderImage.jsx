import styles from './HeaderImage.module.css';
import {motion} from "framer-motion";

function HeaderImage() {
  return <motion.div initial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity: 0}} transition={{duration: 0.5}}
                     className={styles.headerImage}></motion.div>
}

export default HeaderImage;