import React from 'react';

import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';

const CustomAccordion = ({rows}) => {
    const list = rows.map( (row) => {
        return (
            <Accordion>
                <AccordionSummary> {row.title} </AccordionSummary>
                <AccordionDetails> {row.content} </AccordionDetails>
            </Accordion>
        )
    })

    return <div> {list} </div> 
}

export default CustomAccordion;