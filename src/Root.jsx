import {Outlet, useLocation} from "react-router-dom";
import Navbar from "./components/Navbar/Navbar.jsx";
import Footer from "./components/Footer/Footer.jsx";
import LoadingScreen from "./components/LoadingScreen/LoadingScreen.jsx";
import Modal from "./components/Modal/Modal.jsx";
import {useEffect, useRef} from "react";
import {useDispatch} from "react-redux";
import {useGetAnnouncements, useGetIntentions, useGetNews, useGetPhotos} from "./utils/customHooks.js";
import {AnimatePresence} from "framer-motion";
import HeaderImage from "./components/HeaderImage/HeaderImage.jsx";

function Root() {

    const location = useLocation();

    const dispatch = useDispatch();

    const fetchNews = useGetNews();
    const fetchIntention = useGetIntentions();
    const fetchAnnouncements = useGetAnnouncements();
    const fetchPhotos = useGetPhotos();

    const firstLoad = useRef(true);

    useEffect(() => {
        if (firstLoad.current) {
            fetchNews();
            fetchIntention();
            fetchAnnouncements();
            fetchPhotos();

            firstLoad.current = false;
        }
    }, [dispatch, fetchAnnouncements, fetchIntention, fetchNews, fetchPhotos]);

    return (
        <>
            <LoadingScreen/>
            <Modal/>
            <Navbar/>
            {location.pathname !== "/" && <HeaderImage key={"headerImage"}/>}
            <AnimatePresence>
                <Outlet key={"outlet"}/>
            </AnimatePresence>
            <Footer/>
        </>
    );
}

export default Root;