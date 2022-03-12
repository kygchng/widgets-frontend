import React, {useState} from 'react';
import axios from 'axios';

const Dropdown = ({options, chosenOption, setChosenOption}) => {
    const [isOpen, setIsOpen] = useState(false);

    const onLabelClick = () => {
        setIsOpen(!isOpen);
    }

    const openLabelStatus = isOpen ? "visible active" : "";
    const openMenuStatus = isOpen ? "visible transition" : "";

    const optionList = options.map(option => {
        if(option.value === chosenOption.value) {
            return null;
        }
        return (
            <div key = {option.value} className = "item" onClick = {() => setChosenOption(option)}>
                {option.label}
            </div> 
        )
    })

    return(
        <div className = "ui form">
            <div className = "field">
                <label className = "label">
                    Select a color
                </label>
                <div className = {`ui selection dropdown ${openLabelStatus}`} onClick = {() => onLabelClick()}>
                    <i className = "dropdown icon"> </i>
                    <div className = "text">
                        {chosenOption.label}
                    </div>
                    <div className = {`menu ${openMenuStatus}`}>
                        {optionList}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dropdown;