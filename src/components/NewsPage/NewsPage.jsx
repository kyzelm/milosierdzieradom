import {useSelector} from "react-redux";
import BlockButton from "../BlockButton/BlockButton.jsx";
import {useGetNews} from "../../utils/customHooks.js";
import FlexListCon from "../FlexListCon/FlexListCon.jsx";
import AnimatedMain from "../AnimatedMain/AnimatedMain.jsx";
import LoadingAnimationBlock from "../LoadingAnimationBlock/LoadingAnimationBlock.jsx";

function NewsPage() {
  const newsList = useSelector(state => state.data.news);
  const nextPageIndex = useSelector(state => state.data.nextNewsPage);
  const isPending = useSelector(state => state.data.newsPending);

  const fetchNews = useGetNews();

  return <AnimatedMain>
    <h2>Wiadomości</h2>
    <FlexListCon itemsList={newsList}/>
    {isPending && <LoadingAnimationBlock/>}
    {(nextPageIndex - 1) * 12 === newsList?.length &&
      <BlockButton onClick={fetchNews}>Załaduj więcej</BlockButton>}
  </AnimatedMain>;
}

export default NewsPage;