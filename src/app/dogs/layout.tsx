import React, { Suspense } from 'react';

const DogLayout = ({ children }: React.PropsWithChildren) => {
  return <Suspense>{children}</Suspense>;
};

export default DogLayout;
