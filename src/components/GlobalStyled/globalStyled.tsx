import { memo } from 'react';
import type { FC } from 'react';
import { css, Global } from '@emotion/react';

interface GlobalStyledProps {
  sdk_id?: string;
}

const GlobalStyles = (sdk_id: string) => {
  return css`
    @font-face {
      font-family: 'Inter UI';
      font-style: normal;
      font-display: swap;
      src: ${`url('/assets/font/Inter/Inter-UI-Regular.woff2')`} format('woff2');
    }

    @font-face {
      font-family: 'InterUI-Bold';
      font-style: normal;
      font-display: swap;
      src: ${`url('/assets/font/Inter/Inter-UI-Bold.woff2')`} format('woff2');
    }

    @font-face {
      font-family: 'InterUI-Medium';
      font-style: normal;
      font-display: swap;
      src: ${`url('/assets/font/Inter/Inter-UI-Medium.woff2')`} format('woff2');
    }

    *,
    *::before,
    *::after {
      box-sizing: inherit;
    }

    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
      margin-block-start: 0;
      margin-block-end: 0;
    }

    ul,
    ol {
      margin-block-start: 0;
      margin-block-end: 0;
      padding-inline-start: 0;

      li {
        list-style-type: none;
      }
    }

    p {
      padding: 0;
      margin: 0;
      font-weight: normal;
    }

    address {
      font-style: normal;
    }

    img {
      display: inline-block;
      height: auto;
      max-width: 100%;
      vertical-align: top;
      border: none;
    }

    a {
      color: #52575d;
      color: inherit;
      text-decoration: none;
      outline: none;

      &:hover {
        text-decoration: none;
        outline: none;
      }

      &.disabled {
        pointer-events: none;
        cursor: default;
      }
    }

    button,
    input {
      outline: none;
    }

    input::-webkit-outer-spin-button,
    input::-webkit-inner-spin-button {
      appearance: none;
    }

    :root {
      --doc-height: 100%;
    }

    html {
      padding: 0;
      margin: 0;
      font-family: 'Inter UI';
      color: rgb(51, 51, 51);
      box-sizing: border-box;
      -ms-overflow-style: scrollbar;
      -webkit-tap-highlight-color: transparent;
    }

    /* 复写神策ab测试的透明的样式 */
    html[sa-abtest-link_${sdk_id}],
    html[sa-abtest-vabtest_${sdk_id}] {
      opacity: 1 !important;
      -khtml-opacity: 1 !important;
      -moz-opacity: 1 !important;
      filter: alpha(opacity=1) !important;

      body {
        opacity: 1 !important;
        -khtml-opacity: 1 !important;
        -moz-opacity: 1 !important;
        filter: alpha(opacity=1) !important;
      }
    }

    body {
      padding: 0;
      margin: 0;
      overflow-y: overlay;
      font-family: 'Inter UI';
      font-size: 14px !important;
      line-height: initial !important;
      letter-spacing: initial !important;
      color: rgb(51, 51, 51);
      text-size-adjust: none !important;

      .SnackbarContainer-bottom {
        .SnackbarItem-variantSuccess {
          color: #000;
          background-color: #f2e0d6;
        }
      }
    }

    ::-webkit-scrollbar {
      width: 8px;
      height: 6px;
    }

    ::-webkit-scrollbar-track {
      background: none;
      border-radius: 5px;
      box-shadow: inset 0 0 6px rgb(0 0 0 / 0%);
    }

    ::-webkit-scrollbar-thumb {
      background: #bebebe;
      border-radius: 5px;
      opacity: 0.8;
    }

    .Toastify__toast-body {
      font-family: Arial;
      font-size: 0.16rem;
      font-weight: 400;
      color: #006271;
    }

    .Toastify__toast-container--top-center {
      width: auto !important;
      .Toastify__toast {
        margin-bottom: 0.2rem;
      }
    }
    input:-webkit-autofill {
      -webkit-text-fill-color: #000 !important;
      -webkit-box-shadow: 0 0 0px 1000px transparent inset !important;
      background-color: transparent;
      background-image: none;
      transition: background-color 50000s ease-in-out 0s;
    }

    @keyframes marquee {
      0% {
        left: 0;
      }

      100% {
        left: -100%;
      }
    }

    .bounce {
      position: relative;
      height: 50px;
      overflow: hidden;
      color: #333;
      background: #fefefe;
      border: 1px solid #4a4a4a;
    }

    .bounce p {
      position: absolute;
      width: 100%;
      height: 100%;
      margin: 0;
      line-height: 50px;
      text-align: center;
      transform: translateX(50%);
      animation: bouncing-text 5s linear infinite alternate;
    }

    @-moz-keyframes bouncing-text {
      0% {
        transform: translateX(50%);
      }

      100% {
        transform: translateX(-50%);
      }
    }

    @-webkit-keyframes bouncing-text {
      0% {
        transform: translateX(50%);
      }

      100% {
        transform: translateX(-50%);
      }
    }

    @keyframes bouncing-text {
      0% {
        transform: translateX(50%);
        transform: translateX(50%);
        transform: translateX(50%);
      }

      100% {
        transform: translateX(-50%);
        transform: translateX(-50%);
        transform: translateX(-50%);
      }
    }

    #search-input-box-listbox {
      display: flex;
      flex-wrap: wrap;
      width: 100%;
      padding: 0.25rem 0.15rem;
    }

    .agree-policy-link {
      display: block;
      /* flex-wrap: wrap; */
    }

    // 重置cookie插件样式
    div#onetrust-consent-sdk {
      #onetrust-pc-btn-handler,
      #onetrust-pc-btn-handler.cookie-setting-link {
        outline: 0;
      }
      .ot-sdk-row {
        max-width: 1380px;
        margin: 0 auto;
        position: relative;
        #onetrust-button-group-parent {
          width: auto;
          right: 0;
          left: initial;
          text-align: right;
          padding-right: 0;
        }
      }
      #onetrust-button-group {
        button {
          border-radius: 50px;
        }
        .cookie-setting-link {
          border: 1px solid;
          text-decoration: none;
          padding-left: 10px;
          padding-right: 10px;
          margin-bottom: 10px;
        }
        #onetrust-accept-btn-handler {
          margin-right: 0;
          margin-bottom: 10px;
        }
      }
    }
    .MuiButtonBase-root {
      &.Mui-checked {
        color: #006271 !important;
      }
    }

    .MuiPickersLayout-root {
      .MuiPickersLayout-toolbar {
        display: none;
      }
    }

    .swiper-wrapper {
      position: relative;
      width: 100%;
      height: 100%;
      z-index: 1;
      display: flex;
      transition-property: transform;
      transition-timing-function: var(--swiper-wrapper-transition-timing-function, initial);
      box-sizing: content-box;
    }

    .swiper-slide {
      flex-shrink: 0;
      width: 100%;
      height: 100%;
      position: relative;
      transition-property: transform;
      display: block;
    }

    /* 移动端加购效果 */
    .cart-icon-animate {
      @keyframes cart-icon-zoomin {
        0% {
          transform: scale(1);
        }
        100% {
          transform: scale(1.15);
        }
      }

      @keyframes cart-icon-zoomout {
        0% {
          transform: scale(1.15);
        }

        100% {
          transform: scale(1);
        }
      }
      animation: cart-icon-zoomin 0.3s cubic-bezier(0.4, 0, 1, 1),
        cart-icon-zoomout 0.15s cubic-bezier(0.4, 0, 1, 1) 0.3s;
    }

    #trustbadge-container-98e3dadd90eb493088abdc5597a70810 {
      z-index: 100 !important;
    }

    #onetrust-pc-sdk .save-preference-btn-handler {
      margin-bottom: 0;
      margin-right: 0 !important;
    }

    #onetrust-pc-sdk .ot-btn-container {
      text-align: center !important;
    }

    .headroom {
      z-index: 99 !important;
    }
  `;
};

const GlobalStyled: FC<GlobalStyledProps> = ({ sdk_id = '' }) => {
  const styles = GlobalStyles(sdk_id);

  return <Global styles={styles} />;
};

export default memo(GlobalStyled);
