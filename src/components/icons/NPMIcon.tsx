import React from 'react';

export const NPMIcon = (props: React.ComponentPropsWithoutRef<'svg'>) => (
  <svg viewBox="0 0 256 256" role="img" ariaLabel="npm icon" {...props}>
    <title>NPM - Node Package Manager</title>
    <g id="npm-logo" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
      <polygon id="npm-letters-background" fill="#CB3837" fillRule="nonzero" points="0 78 0 163.49807 71.1660232 163.49807 71.1660232 177.830116 128 177.830116 128 163.49807 256 163.49807 256 78"></polygon>
      <g id="npm-letters" transform="translate(14.332046, 92.332046)" fill="#FFFFFF" fillRule="nonzero">
        <polygon id="Path" points="28.1698842 5.32907052e-15 -1.42108547e-14 5.32907052e-15 -1.42108547e-14 14.3320464 -1.42108547e-14 56.8339769 28.1698842 56.8339769 28.1698842 14.3320464 42.5019305 14.3320464 42.5019305 56.8339769 56.8339769 56.8339769 56.8339769 14.3320464 56.8339769 3.55271368e-15"></polygon>
        <path d="M71.1660232,0 L71.1660232,53.8687259 L71.1660232,56.8339769 L71.1660232,71.1660232 L99.8301157,71.1660232 L99.8301157,56.8339769 L128,56.8339769 L128,0 L71.1660232,0 Z M113.667954,42.5019305 L99.8301157,42.5019305 L99.8301157,14.3320464 L113.667954,14.3320464 L113.667954,42.5019305 Z" id="Shape"></path>
        <polygon id="Path" points="170.501931 5.32907052e-15 142.332047 5.32907052e-15 142.332047 14.3320464 142.332047 56.8339769 170.501931 56.8339769 170.501931 14.3320464 184.833977 14.3320464 184.833977 56.8339769 199.166023 56.8339769 199.166023 14.3320464 213.49807 14.3320464 213.49807 56.8339769 227.830116 56.8339769 227.830116 14.3320464 227.830116 0.988417 227.830116 3.55271368e-15"></polygon>
      </g>
    </g>
  </svg>
  );

export default NPMIcon;
