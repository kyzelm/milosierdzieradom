import styles from './LoadingScreen.module.css';
import {useSelector} from "react-redux";
import {useEffect, useState} from "react";
import {AnimatePresence, motion} from "framer-motion";

function LoadingScreen() {
    const news = useSelector(state => state.data.news);
    const announcements = useSelector(state => state.data.announcements);
    const photos = useSelector(state => state.data.photos);
    const intentions = useSelector(state => state.data.intentions);

    const [showLoadingScreen, setShowLoadingScreen] = useState(true);

    useEffect(() => {
        if (news || announcements || photos || intentions) {
            setTimeout(() => setShowLoadingScreen(false), 1000);
        }
    }, [news, announcements, photos, intentions]);

    return (<AnimatePresence>
        {showLoadingScreen && <motion.div
            initial={{opacity: 1}}
            animate={{opacity: 1}}
            exit={{opacity: 0}}
            className={styles.loadingScreen}>
            <span></span>
            <span></span>
        </motion.div>}
    </AnimatePresence>);
}

export default LoadingScreen;