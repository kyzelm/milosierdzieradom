import styles from './HeaderImage.module.css';
import {useScrollBackground} from "../../utils/customHooks.js";
import {motion} from "framer-motion";

function HeaderImage(){
    const headerImageBlock = useScrollBackground();

    return <motion.div initial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity: 0}} transition={{duration: 0.5}} ref={headerImageBlock} className={styles.headerImage}></motion.div>
}

export default HeaderImage;