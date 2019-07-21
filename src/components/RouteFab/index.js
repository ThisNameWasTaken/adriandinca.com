import React, { Suspense, lazy } from 'react';

const RouteFabBase = lazy(() => import('./RouteFab'));

const RouteFab = props =>
  typeof window !== 'undefined' && (
    <Suspense fallback={<></>}>
      {typeof window !== 'undefined' && <RouteFabBase {...props} />}
    </Suspense>
  );

export default RouteFab;
