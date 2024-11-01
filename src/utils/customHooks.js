import {useEffect, useRef, useState} from "react";
import {useLocation} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {storyblokApi} from "../main.jsx";
import {dataActions} from "../store/dataSlice.js";
import {getDateStoryblokFormat} from "./storyblokDataConverter.jsx";

// uiEvents --------------------------------------------------------------------

export function useScrollBackground() {
    const section = useRef();
    const [scroll, setScroll] = useState(0);

    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            setScroll(window.scrollY);
        };

        handleScroll();

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    useEffect(() => {
        let formula = "center calc(-7dvh + " + window.scrollY * -0.5 + "px)";

        if (location.pathname === "/") {
            formula = "center calc(100% + " + window.scrollY * -0.5 + "px)";
        }

        if (section.current) {
            section.current.style.setProperty("background-position", formula);
        }
    }, [location.pathname, scroll]);

    return section;
}

// storyblok -------------------------------------------------------------------

export function useGetIntentions() {
    const dispatch = useDispatch();

    function fetchIntentions() {
        storyblokApi.get("cdn/stories", {
            starts_with: "intentions/",
            page: 1,
            per_page: 10,
            sort_by: "content.date:desc",
        }).then(response => {
            if (response.data.stories.length === 0) {
                dispatch(dataActions.setIntentions([]));
                return;
            }

            dispatch(dataActions.setIntentions(response.data.stories.map(story => {
                return {
                    id: story.id,
                    text: story.content.text,
                    date: story.content.date,
                };
            })));
        }).catch(error => {
            dispatch(dataActions.setIntentions(-1));
            console.error(error);
        });
    }

    return fetchIntentions;
}

export function useGetAnnouncements() {
    const dispatch = useDispatch();

    function fetchAnnouncements() {
        storyblokApi.get("cdn/stories", {
            starts_with: "announcements/",
            page: 1,
            per_page: 10,
            sort_by: "content.date:desc",
        }).then(response => {
            if (response.data.stories.length === 0) {
                dispatch(dataActions.setAnnouncements([]));
                return;
            }

            dispatch(dataActions.setAnnouncements(response.data.stories.map(story => {
                return {
                    id: story.id,
                    date: story.content.date,
                    text: story.content.text,
                };
            })));
        }).catch(error => {
            dispatch(dataActions.setAnnouncements(-1));
            console.error(error);
        });
    }

    return fetchAnnouncements;
}

export function useGetNews() {
    const nextNewsPage = useSelector(state => state.data.nextNewsPage);
    const dispatch = useDispatch();

    function fetchNews() {
        dispatch(dataActions.setNewsPending(true));

        storyblokApi.get("cdn/stories", {
            starts_with: "news/",
            page: nextNewsPage,
            per_page: 12,
            sort_by: "content.date:desc",
            filter_query: {
                "date": {
                    "lt_date": getDateStoryblokFormat(new Date()),
                }
            },
        }).then(response => {
            if (response.data.stories.length === 0) {
                dispatch(dataActions.addNextNews([]));
                dispatch(dataActions.setNewsPending(false));
                return;
            }

            dispatch(dataActions.addNextNews(response.data.stories.map(story => {
                return {
                    id: story.id,
                    title: story.content.title,
                    date: story.content.date,
                    titleImage: `${story.content.image.filename}/m/filters:format(webp)`,
                    slug: `/news/${story.slug}`,
                };
            })));
            dispatch(dataActions.setNewsPending(false));
        }).catch(error => {
            dispatch(dataActions.addNextNews(-1));
            dispatch(dataActions.setNewsPending(false));
            console.error(error);
        });
    }

    return fetchNews;
}

export function useGetPhotos() {
    const nextPhotosPage = useSelector(state => state.data.nextPhotosPage);
    const dispatch = useDispatch();

    function fetchPhotos() {
        dispatch(dataActions.setPhotosPending(true));

        storyblokApi.get("cdn/stories", {
            starts_with: "gallery/",
            page: nextPhotosPage,
            per_page: 6,
            sort_by: "first_published_at:desc",
        }).then(response => {
            if (response.data.stories.length === 0) {
                dispatch(dataActions.addNextPhotos([]));
                dispatch(dataActions.setPhotosPending(false));
                return;
            }

            dispatch(dataActions.addNextPhotos(response.data.stories.map(story => {
                return {
                    id: story.id,
                    title: story.content.title,
                    titleImage: `${story.content.titleImage.filename}/m/filters:format(webp)`,
                    slug: `/gallery/${story.slug}`,
                };
            })));
            dispatch(dataActions.setPhotosPending(false));
        }).catch(error => {
            dispatch(dataActions.addNextPhotos(-1));
            dispatch(dataActions.setPhotosPending(false));
            console.error(error);
        });
    }

    return fetchPhotos;
}