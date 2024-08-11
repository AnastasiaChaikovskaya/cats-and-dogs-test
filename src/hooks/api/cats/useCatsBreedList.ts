import { useToast } from '@/components/ui/use-toast';
import { CATS_QUERY_KEYS } from '@/constants/query-keys';
import { getCatsBreedList } from '@/sevices';
import { IBaseQueryParams } from '@/types/general';
import { useQuery } from '@tanstack/react-query';
import { useEffect } from 'react';

export const useCatsBreedList = (queryParams: IBaseQueryParams) => {
  const { toast } = useToast();
  const catsQuery = useQuery({
    queryKey: [CATS_QUERY_KEYS.GET_CATS_BREED_LIST, queryParams],
    queryFn: () => getCatsBreedList(queryParams),
  });

  useEffect(() => {
    if (catsQuery.isError) {
      toast({
        title: 'Server error',
        description: 'Unable to fetch cat breed list',
        variant: 'destructive',
      });
    }
  }, [catsQuery.isError]);

  return catsQuery;
};
