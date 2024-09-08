import {createBrowserRouter} from "react-router-dom";
import Root from "./Root.jsx";
import PageNotFound from "./components/PageNotFound/PageNotFound.jsx";
import MainPage from "./components/MainPage/MainPage.jsx";
import AnnouncementsPage from "./components/AnnouncementsPage/AnnouncementsPage.jsx";
import IntentionsPage from "./components/IntentionsPage/IntentionsPage.jsx";
import NewsPage from "./components/NewsPage/NewsPage.jsx";
import NewsSubpage from "./components/NewsPage/NewsSubpage/NewsSubpage.jsx";
import GalleryPage from "./components/GalleryPage/GalleryPage.jsx";
import GallerySubpage from "./components/GalleryPage/GallerySubpage/GallerySubpage.jsx";
import ContactPage from "./components/ContactPage/ContactPage.jsx";

const router = createBrowserRouter([{
    element: <Root/>, children: [
        {
            path: "*",
            element: <PageNotFound/>
        },
        {
            path: "/",
            element: <MainPage/>
        },
        {
            path: "/announcements",
            element: <AnnouncementsPage/>
        },
        {
            path: "/intentions",
            element: <IntentionsPage/>
        },
        {
            path: "/news",
            children: [
                {
                    index: true,
                    element: <NewsPage/>
                },
                {
                    path: ":slug",
                    element: <NewsSubpage/>
                }
            ],
        },
        {
            path: "/gallery",
            children: [
                {
                    index: true,
                    element: <GalleryPage/>
                },
                {
                    path: ":slug",
                    element: <GallerySubpage/>
                }
            ],
        },
        {
            path: "/contact",
            element: <ContactPage/>
        }
    ]
}]);

export default router;