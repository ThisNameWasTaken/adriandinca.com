import React, { Suspense, lazy } from 'react';

const TooltipBase = lazy(() => import('./Tooltip'));

/**
 * @param {{
 * children: React.ReactNode,
 * htmlFor: string,
 * top?: boolean,
 * left?: boolean,
 * bottom?: boolean,
 * right?: boolean,
 * }} param
 */
const Tooltip = ({ children, htmlFor, ...otherProps }) =>
  typeof window !== 'undefined' && (
    <Suspense fallback={<></>}>
      <TooltipBase htmlFor={htmlFor} {...otherProps}>
        {children}
      </TooltipBase>
    </Suspense>
  );

export default Tooltip;
