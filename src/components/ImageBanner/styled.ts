import styled from '@emotion/styled';
import Link from 'next/link';
import BaseImage from '../BaseImage';

export const StyledImageBanner = styled('div')`
  width: 1440px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-column-gap: 0.24rem;
  grid-row-gap: 0.24rem;
`;

export const StyledLink = styled(Link)``;

export const StyledImage = styled('img')``;
