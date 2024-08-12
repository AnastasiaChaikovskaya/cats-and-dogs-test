'use client';

import { PetCard } from '@/components/PetCard/PetCard';
import { SkeletonCard } from '@/components/SekeletonCard/SkeletonCard';
import { APP_ROUTS } from '@/constants/routes';
import { useCatsBreedList } from '@/hooks/api';
import { useSearchParams } from 'next/navigation';
import { useRouter } from 'next/navigation';
import React from 'react';
import { Pagination, PaginationContent, PaginationItem } from '@/components/ui/pagination';
import { Button } from '@/components/ui/button';

const CatsPage = () => {
  const searchParams = useSearchParams();
  const router = useRouter();

  const currentPage = searchParams.get('page') || '1';
  const limit = searchParams.get('limit') || '10';

  const { data, isLoading, isError } = useCatsBreedList({
    page: currentPage,
    limit: limit,
    has_breeds: '1',
  });

  const handlePageChange = (newPage: number) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set('page', newPage.toString());
    router.push(`?${params.toString()}`);

    return params;
  };
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
        data.map((cat) => <PetCard key={cat.id} pet={cat} url={APP_ROUTS.App.Main.Cats.CatDetails.makePath(cat.id)} />)}

      <Pagination>
        <PaginationContent className="gap-4">
          <PaginationItem>
            <Button onClick={() => handlePageChange(+currentPage - 1)} disabled={+currentPage <= 1}>
              Previous
            </Button>
          </PaginationItem>

          <PaginationItem>
            <Button onClick={() => handlePageChange(+currentPage + 1)} disabled={+currentPage > 7}>
              Next
            </Button>
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </div>
  );
};

export default CatsPage;
