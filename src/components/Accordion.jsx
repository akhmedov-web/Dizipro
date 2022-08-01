import React,{ useState } from 'react'
import AddIcon from '@mui/icons-material/Add';
import CloseIcon from '@mui/icons-material/Close';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';

export default function SupportAccordion(props) {
    const [icon, setIcon] = useState(false);
    function toggleIcon() {
        setIcon(!icon)
    }
  return (
    <Accordion onChange={() => toggleIcon()} className="col-xl-8 col-11 mb-2" style={{ border: "2px solid rgba(128, 128, 128, 0.300)", borderRadius: "10px" }}>
    <AccordionSummary
        expandIcon={icon ? <CloseIcon /> : <AddIcon />}
        aria-controls="panel1a-content"
        id="panel1a-header"
    >
        <Typography>{props.data.question}</Typography>
    </AccordionSummary>
    <AccordionDetails>
        <Typography>
        {props.data.answer}
        </Typography>
    </AccordionDetails>
</Accordion>
  )
}
