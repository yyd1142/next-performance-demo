import React, { FC } from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { StyledAppFooterBar } from './styled';
import { useSelector } from 'react-redux';

const AppFooterBar: FC = () => {
  const bottomList = useSelector((state: State) => state.app.bottomList);

  return (
    <StyledAppFooterBar>
      {bottomList.map((item) => (
        <Accordion key={item.id}>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <div className="footer-title">{item.nameLang1}</div>
          </AccordionSummary>
          {item.refRes?.length > 0 && (
            <AccordionDetails>
              {item.refRes.map((subitem: any) => (
                <a href={subitem?.urlKey} className="footer-sub-content" key={subitem.id}>
                  {subitem.titleLang1}
                </a>
              ))}
            </AccordionDetails>
          )}
        </Accordion>
      ))}
    </StyledAppFooterBar>
  );
};

export default AppFooterBar;
