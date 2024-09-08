import styles from "./FlexListCon.module.css";
import FlexListBlock from "./FlexListBlock/FlexListBlock.jsx";
import {getDateFromStoryblokFormat} from "../../utils/storyblokDataConverter.js";
import PropTypes from "prop-types";

function FlexListCon({itemsList}) {
    return <div className={styles.flexCon}>
        {itemsList !== null && itemsList !== -1 && <>
            {itemsList.map((news) => <FlexListBlock key={news.id}
                                                      date={news.date ? getDateFromStoryblokFormat(news.date) : null}
                                                      image={news.titleImage}
                                                      title={news.title}
                                                      slug={news.slug}/>)}
        </>}
        {itemsList && itemsList.length === 0 && <p>Brak wiadomości</p>}
        {itemsList === -1 && <p>Wystąpił błąd podczas ładowania wiadomości</p>}
    </div>
}

FlexListCon.propTypes = {
    itemsList: PropTypes.array
};

export default FlexListCon;