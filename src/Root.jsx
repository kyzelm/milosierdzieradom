import {Outlet, useLocation} from "react-router-dom";
import Navbar from "./components/Navbar/Navbar.jsx";
import Footer from "./components/Footer/Footer.jsx";
import LoadingScreen from "./components/LoadingScreen/LoadingScreen.jsx";
import Modal from "./components/Modal/Modal.jsx";
import {useEffect, useRef} from "react";
import {useGetAnnouncements, useGetIntentions, useGetNews, useGetPhotos} from "./utils/customHooks.js";
import HeaderImage from "./components/HeaderImage/HeaderImage.jsx";
import {AnimatePresence} from "framer-motion";

function Root() {

  const location = useLocation();

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
  }, [fetchAnnouncements, fetchIntention, fetchNews, fetchPhotos]);

  return (
    <div>
      <LoadingScreen/>
      <Modal/>
      <Navbar/>
      {location.pathname !== "/" && <HeaderImage key={"headerImage"}/>}
      <AnimatePresence mode={"wait"}>
        <Outlet key={location.pathname}/>
      </AnimatePresence>
      <Footer/>
    </div>
  );
}

export default Root;