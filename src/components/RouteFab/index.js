import React, { Suspense, lazy } from 'react';

const RouteFabBase = lazy(() => import('./RouteFab'));

const RouteFab = props => {
  return (
    <Suspense fallback={<></>}>
      {typeof window !== 'undefined' && <RouteFabBase {...props} />}
    </Suspense>
  );
};

export default RouteFab;
