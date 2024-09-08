import style from "./ColumnListCon.module.css";
import ColumnListBlock from "./ColumnListBlock/ColumnListBlock.jsx";
import PropTypes from "prop-types";
import {useState} from "react";

function ColumnListCon({itemsList}) {
    const [activeIndex, setActiveIndex] = useState(0);

    return (
        <div className={style.columnCon}>
            {itemsList !== null && itemsList.length !== 0 && itemsList.map((item, index) => {
                return (
                    <ColumnListBlock key={item.id} active={index === activeIndex} text={item.text}
                                     date={item.date} handleClick={() => setActiveIndex(index)}/>
                )
            })}
            {itemsList && itemsList.length === 0 && <p>Brak elementów</p>}
            {itemsList === -1 && <p>Wystąpił błąd podczas ładowania elementów</p>}
        </div>
    )
}

ColumnListCon.propTypes = {
    itemsList: PropTypes.array
};

export default ColumnListCon;