import React,{useState, useEffect} from 'react';
import Accordion from './Accordion';
import Search from './Search';
import Dropdown from './Dropdown';
import CustomAccordion from './CustomAccordion';

const rows = [
  {
    title: "Refunds",
    content: "Email me"
  },
  {
    title: "Reschedule",
    content: "You can't"
  },
  {
    title: "Contact",
    content: "Call me"
  }
]

const options = [
  {
    label: "the color red",
    value: "red"
  },
  {
    label: "the color blue",
    value: "blue"
  },
  {
    label: "the color green",
    value: "green"
  }
]

const App = () => {

  const [chosenOption, setChosenOption] = useState(options[0]);

  return(
    <Dropdown options = {options} chosenOption = {chosenOption} setChosenOption = {setChosenOption} />

  )
}

export default App;
