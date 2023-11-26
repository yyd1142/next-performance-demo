import type { FC } from 'react';
import Script from 'next/script';

const HtmlSizeScript: FC = () => {
  return (
    <Script
      id="__html_font_size__"
      strategy="beforeInteractive"
      dangerouslySetInnerHTML={{
        __html:
          "!(function(e){var t=e.document,n=t.documentElement,a='orientationchange'in e?'orientationchange':'resize',d=function(){var j=n.getBoundingClientRect();var e=j.width;var f=e<=960?(e/7.5>100?100:Math.ceil(e/7.5)):100;n.setAttribute('style','--doc-height: '+n.clientHeight+'px; font-size: '+f+'px')};if(t.readyState==='loading')d();document.documentElement.addEventListener(\"touchmove\",function(event){if(event.touches.length>1)event.preventDefault()},false);t.addEventListener&&(e.addEventListener(a,d,!1),'interactive'===t.readyState||t.addEventListener('DOMContentLoaded',function(){setTimeout(d)},!1))})(window);",
      }}
    />
  );
};

export default HtmlSizeScript;