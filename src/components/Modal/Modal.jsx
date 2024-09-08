import styles from "./Modal.module.css";
import {useDispatch, useSelector} from "react-redux";
import {uiActions} from "../../store/uiSlice.js";
import {AnimatePresence, motion} from "framer-motion";

function Modal() {
    const showModal = useSelector(state => state.ui.showModal);
    const modalContent = useSelector(state => state.ui.modalContent);
    const dispatch = useDispatch();

    function clearModal() {
        dispatch(uiActions.setModalState(false));
        dispatch(uiActions.setModalContent({text: ''}));
    }

    return <AnimatePresence>
        {showModal && <motion.dialog
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            exit={{opacity: 0}}
            onClose={clearModal} className={styles.dialog}>
            <div className={styles.backdrop} onClick={clearModal}></div>
            <div className={styles.textBlock}>
                {modalContent.text}
                <br/>
                <button onClick={clearModal}>Zamknij</button>
            </div>
        </motion.dialog>}
    </AnimatePresence>
}

export default Modal;