import React from 'react';
import { Skeleton } from '../ui/skeleton';

export const SkeletonDetails = () => {
  return (
    <div className="flex flex-col gap-4 items-center md:flex-row md:justify-between">
      <Skeleton className="w-full md:w-[500px] h-[300px]" />
      <div className="flex flex-col gap-2 shadow-md rounded-sm lg:w-[500px] p-3">
        <Skeleton className="h-3 w-full" />
        <Skeleton className="h-3 w-full" />
        <Skeleton className="h-3 w-full" />
        <Skeleton className="h-3 w-full" />
      </div>
    </div>
  );
};
