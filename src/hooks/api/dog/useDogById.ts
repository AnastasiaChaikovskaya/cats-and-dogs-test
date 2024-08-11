import { useToast } from '@/components/ui/use-toast';
import { DOG_QUERY_KEYS } from '@/constants/query-keys';
import { getDogDetails } from '@/sevices';
import { useQuery } from '@tanstack/react-query';
import { useEffect } from 'react';

export const useDogById = (dogId: string) => {
  const { toast } = useToast();
  const dogQuery = useQuery({
    queryKey: [DOG_QUERY_KEYS.GET_DOG_BY_ID, { dogId }],
    queryFn: () => getDogDetails(dogId),
    enabled: !!dogId,
  });

  useEffect(() => {
    if (dogQuery.isError) {
      toast({
        title: 'Server error',
        description: 'Unable to fetch cat breed list',
        variant: 'destructive',
      });
    }
  }, [dogQuery.isError]);

  return dogQuery;
};
