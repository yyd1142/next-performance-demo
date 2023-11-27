import styled from '@emotion/styled';

export const StyledFooterBar = styled('div')`
  width: 100%;
  background-color: #f5f5f5;
  padding: 0.24rem 0;

  .footer-wrapper {
    width: 1440px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-column-gap: 0.24rem;
    grid-row-gap: 0.24rem;
    line-height: 0.3rem;

    .footer-title {
      font-size: 0.16rem;
      font-weight: bold;
    }

    .footer-sub-content {
      font-size: 0.14rem;
      cursor: pointer;
      display: block;
    }
  }
`;
