import { useToast } from '@/components/ui/use-toast';
import { DOG_QUERY_KEYS } from '@/constants/query-keys';
import { getDogsBreedList } from '@/sevices';
import { IBaseQueryParams } from '@/types/general';
import { useQuery } from '@tanstack/react-query';
import { useEffect } from 'react';

export const useDogsBreedList = (queryParams: IBaseQueryParams) => {
  const { toast } = useToast();
  const dogsQuery = useQuery({
    queryKey: [DOG_QUERY_KEYS.GET_DOGS_BREED_LIST, queryParams],
    queryFn: () => getDogsBreedList(queryParams),
  });

  useEffect(() => {
    if (dogsQuery.isError) {
      toast({
        title: 'Server error',
        description: 'Unable to fetch dog breed list',
      });
    }
  }, [dogsQuery.isError]);

  return dogsQuery;
};
