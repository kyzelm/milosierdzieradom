import styles from './Navbar.module.css';
import {useLocation} from "react-router-dom";
import {useEffect, useState} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faAngleUp, faBars, faXmark} from "@fortawesome/free-solid-svg-icons";
import {HashLink, NavHashLink} from "react-router-hash-link";
import {useDispatch, useSelector} from "react-redux";
import {uiActions} from "../../store/uiSlice.js";
import {AnimatePresence, motion} from "framer-motion";

const navbarItems = [
    {name: 'Start', link: ''},
    {name: 'Ogłoszenia', link: '/announcements'},
    {name: 'Intencje', link: '/intentions'},
    {name: 'Wiadomości', link: '/news'},
    {name: 'Galeria', link: '/gallery'},
    {name: 'Kontakt', link: '/contact'},
];

function Navbar() {
    const currentPath = useLocation().pathname.split('/')[1];

    const showUpArrow = useSelector(state => state.ui.showUpArrow);
    const useMobileNav = useSelector(state => state.ui.useMobileNav);
    const dispatch = useDispatch();

    const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > window.innerHeight) {
                dispatch(uiActions.setUpArrowState(true));
            } else {
                dispatch(uiActions.setUpArrowState(false));
            }
        };

        handleScroll();

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [dispatch]);

    useEffect(() => {
        const handleWindowResize = () => {
            if (window.innerWidth > 768) {
                dispatch(uiActions.setMobileNavState(false));
            } else {
                dispatch(uiActions.setMobileNavState(true));
            }
        };

        handleWindowResize();

        window.addEventListener('resize', handleWindowResize);
        return () => window.removeEventListener('resize', handleWindowResize);
    }, [dispatch]);

    return (
        <>
            {useMobileNav && <div className={styles.mobileNavButton} data-active={isMobileNavOpen}
                                  onClick={() => setIsMobileNavOpen(prev => !prev)}>
                {isMobileNavOpen ? <FontAwesomeIcon icon={faXmark}/> : <FontAwesomeIcon icon={faBars}/>}
            </div>}
            <AnimatePresence>{(!useMobileNav || isMobileNavOpen) &&
                <motion.nav initial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity: 0}}
                            transition={{duration: 0.2}}
                            className={`${styles.nav} ${useMobileNav ? styles.mobileNav : ""}`}>
                    {navbarItems.map(item =>
                        <span key={item.name} onClick={() => setIsMobileNavOpen(false)}
                              className={`${styles.item} ${currentPath === (item.link.split('/')[1] || item.link) ? styles.active : ""}`}>
                            <NavHashLink to={item.link + "/#"}>{item.name}</NavHashLink>
                        </span>
                    )}
                </motion.nav>}</AnimatePresence>
            <div className={`${styles.upArrow} ${showUpArrow ? styles.active : ""}`}>
                <HashLink to={'#'}><FontAwesomeIcon icon={faAngleUp}/></HashLink>
            </div>
        </>
    )
        ;
}

export default Navbar;