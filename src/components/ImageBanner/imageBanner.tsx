import React, { FC, useState } from 'react';
import { StyledImageBanner, StyledImage, StyledLink } from './styled';

const ImageBanner: FC = () => {
  const [banner] = useState([
    {
      id: '1',
      img: 'https://us.olicdn.com/image/11yqjfbb-1063x500-7-47q8ab.jpg',
      url: 'https://www.olightstore.com/flash-sale-up-to-50-percent-off',
    },
    {
      id: '2',
      img: 'https://us.olicdn.com/image/baton-4-hs-jls-ssl-gzt-1063x500-kb-2-1-3rvot7.jpg',
      url: 'https://www.olightstore.com/new-products',
    },
    {
      id: '3',
      img: 'https://us.olicdn.com/image/11yylbannerab-1063x500-3u4cty.jpg',
      url: 'https://www.olightstore.com/black-friday-gift-2023',
    },
    {
      id: '4',
      img: 'https://us.olicdn.com/image/olightsyflmkt-pc-dhz-9q6r0c.jpg@80q.webp',
      url: 'https://us.obuy.com/s/2G8FTL',
    },
  ]);
  return (
    <StyledImageBanner>
      {banner.map((item) => (
        <StyledLink key={item.id} href={item.url}>
          <StyledImage src={item.img} alt="" width={340} height={160} />
        </StyledLink>
      ))}
    </StyledImageBanner>
  );
};

export default ImageBanner;
