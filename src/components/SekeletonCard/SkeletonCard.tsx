import React from 'react';
import { Skeleton } from '@/components/ui/skeleton';
import { Card, CardHeader, CardContent } from '../ui/card';

export const SkeletonCard = () => {
  return (
    <Card className="w-[250px] md:w-[300px]">
      <CardHeader>
        <Skeleton className="h-4 w-full" />
      </CardHeader>
      <CardContent>
        <Skeleton className="h-[250px] w-full" />
      </CardContent>
    </Card>
  );
};
