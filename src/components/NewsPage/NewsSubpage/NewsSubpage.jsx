import {useNavigate, useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {storyblokApi} from "../../../main.jsx";
import RichTextDangerouslyInnerHTML from "../../RichTextDangerouslyInnerHTML/RichTextDangerouslyInnerHTML.jsx";
import AnimatedMain from "../../AnimatedMain/AnimatedMain.jsx";
import LoadingAnimationBlock from "../../LoadingAnimationBlock/LoadingAnimationBlock.jsx";

function NewsSubpage() {
    const {slug} = useParams()
    const navigate = useNavigate();
    const [news, setNews] = useState(null);

    useEffect(() => {
        storyblokApi.get(`cdn/stories/news/${slug}`).then(response => {
            setNews(response.data.story);
        }).catch(error => {
            navigate('/404');
            console.log(error);
        });
    }, [navigate, slug]);

    return (<>
        <AnimatedMain>
            {news !== null && <>
                <h2>{news.content.title}</h2>
                <RichTextDangerouslyInnerHTML richText={news.content.text}/>
            </>}
            {news === null && <LoadingAnimationBlock/>}
        </AnimatedMain>
    </>);
}

export default NewsSubpage;