import React, { FC } from 'react';
import { StyledFooterBar } from './styled';
import { useSelector } from 'react-redux';

const FooterBar: FC = () => {
  const bottomList = useSelector((state: State) => state.app.bottomList);

  return (
    <StyledFooterBar>
      <div className="footer-wrapper">
        {bottomList.map((item) => (
          <div className="footer-content" key={item.id}>
            <div className="footer-title">{item.nameLang1}</div>
            {item.refRes?.length > 0 && (
              <>
                {item.refRes.map((subitem: any) => (
                  <a href={subitem?.urlKey} className="footer-sub-content" key={subitem.id}>
                    {subitem.titleLang1}
                  </a>
                ))}
              </>
            )}
          </div>
        ))}
      </div>
    </StyledFooterBar>
  );
};

export default FooterBar;
