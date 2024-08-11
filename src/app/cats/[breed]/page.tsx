'use client';

import PetDetails from '@/app/_components/PetDetails';
import { SkeletonDetails } from '@/components/SkeletonDetails/SkeletonDetails';
import { useCatById } from '@/hooks/api';
import { Loader } from 'lucide-react';
import { useParams } from 'next/navigation';
import React from 'react';

const CatDetailPage = () => {
  const { breed } = useParams<{ breed: string }>();
  const { data, isLoading, isError } = useCatById(breed);
  return <div>{isLoading ? <SkeletonDetails /> : <PetDetails pet={data as IPet} />}</div>;
};

export default CatDetailPage;
