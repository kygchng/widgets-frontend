import React,{useState, useEffect} from 'react';

const Accordion = ({rows}) => {

    const[openRow, setOpenRow] = useState(null);

    const onTitleClick = (index) => {
        setOpenRow(index);
    }

    const accordion = rows.map( (row, index) => {
        const isOpen = index === openRow ? "active" : "";
        return (
            <div>
                <div className = {`title ${isOpen}`} onClick = {() => onTitleClick(index)}>
                    <i className = "dropdown icon"></i>
                    {row.title}
                </div>
                <div className = {`content ${isOpen}`}>
                    <p>
                        {row.content}
                    </p>
                </div>
            </div>
        )
    })
    return <div className = "ui styled accordion"> {accordion} </div> 
}

export default Accordion;