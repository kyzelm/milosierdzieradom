import ColumnListCon from "../ColumnListCon/ColumnListCon.jsx";
import {useSelector} from "react-redux";
import AnimatedMain from "../AnimatedMain/AnimatedMain.jsx";

function AnnouncementsPage() {
    const announcements = useSelector(state => state.data.announcements);

    return (<>
        <AnimatedMain>
            <h2>Ogłoszenia</h2>
            <ColumnListCon itemsList={announcements}/>
        </AnimatedMain>
    </>);
}

export default AnnouncementsPage;