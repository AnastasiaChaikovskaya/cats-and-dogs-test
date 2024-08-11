'use client';

import PetDetails from '@/app/_components/PetDetails';
import { SkeletonDetails } from '@/components/SkeletonDetails/SkeletonDetails';
import { useDogById } from '@/hooks/api/dog/useDogById';
import { Image as ImageIcon, Loader } from 'lucide-react';
import { useParams } from 'next/navigation';
import React from 'react';

const DogDetailPage = () => {
  const { breed } = useParams<{ breed: string }>();
  const { data, isLoading, isError } = useDogById(breed);
  return <div>{isLoading ? <SkeletonDetails /> : <PetDetails pet={data as IPet} />}</div>;
};
export default DogDetailPage;
