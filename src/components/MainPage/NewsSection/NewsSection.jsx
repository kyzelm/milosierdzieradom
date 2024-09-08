import styles from './NewsSection.module.css';
import {useSelector} from "react-redux";
import FlexListCon from "../../FlexListCon/FlexListCon.jsx";
import LoadingAnimationBlock from "../../LoadingAnimationBlock/LoadingAnimationBlock.jsx";

function NewsSection() {
    const newsList = useSelector(state => state.data.news);
    const isPending = useSelector(state => state.data.newsPending);

    return <section className={styles.newsSection}>
        <h2>Najnowsze wiadomości</h2>
        <FlexListCon itemsList={newsList ? newsList.filter((news, index) => {
            return index < 3;
        }): null}/>
        {isPending && <LoadingAnimationBlock/>}
    </section>
}

export default NewsSection;