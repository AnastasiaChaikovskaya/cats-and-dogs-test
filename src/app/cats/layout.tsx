import React, { Suspense } from 'react';

const CatLayout = ({ children }: React.PropsWithChildren) => {
  return <Suspense>{children}</Suspense>;
};

export default CatLayout;
