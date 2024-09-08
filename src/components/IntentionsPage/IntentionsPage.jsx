import {useSelector} from "react-redux";
import ColumnListCon from "../ColumnListCon/ColumnListCon.jsx";
import AnimatedMain from "../AnimatedMain/AnimatedMain.jsx";

function IntentionsPage() {
    const intentions = useSelector(state => state.data.intentions);

    return (<>
        <AnimatedMain>
            <h2>Intencje</h2>
            <ColumnListCon itemsList={intentions}/>
        </AnimatedMain>
    </>);
}

export default IntentionsPage;