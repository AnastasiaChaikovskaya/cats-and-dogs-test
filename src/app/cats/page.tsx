'use client';

import { PetCard } from '@/components/PetCard/PetCard';
import { SkeletonCard } from '@/components/SekeletonCard/SkeletonCard';
import { APP_ROUTS } from '@/constants/routes';
import { useCatsBreedList } from '@/hooks/api';
import { usePathname, useSearchParams } from 'next/navigation';
import { useRouter } from 'next/router';
import React, { use, useCallback } from 'react';

const CatsPage = () => {
  // const router = useRouter();
  // const pathname = usePathname();
  const searchParams = useSearchParams();

  const createQueryString = useCallback(
    (page: string, limit: string) => {
      const params = new URLSearchParams(searchParams.toString());
      params.set(page, limit);

      return params.toString();
    },
    [searchParams],
  );

  const { data, isLoading, isError } = useCatsBreedList({ page: '0', limit: '10', has_breeds: '1' });
  if (isLoading) {
    return (
      <div className="flex flex-col items-center flex-wrap gap-2 md:flex-row md:gap-3 md:justify-center">
        {Array.from({ length: 11 }, (_, i) => (
          <SkeletonCard key={i} />
        ))}
      </div>
    );
  }
  return (
    <div className="flex flex-col items-center flex-wrap gap-2 md:flex-row md:gap-3 md:justify-center">
      {data &&
        data.length > 0 &&
        data.map((cat) => <PetCard pet={cat} url={APP_ROUTS.App.Main.Cats.CatDetails.makePath(cat.id)} />)}
    </div>
  );
};

export default CatsPage;
