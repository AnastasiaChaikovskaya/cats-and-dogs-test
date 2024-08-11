import { useToast } from '@/components/ui/use-toast';
import { CATS_QUERY_KEYS } from '@/constants/query-keys';
import { getCatDetails } from '@/sevices';
import { useQuery } from '@tanstack/react-query';
import { useEffect } from 'react';

export const useCatById = (petId: string) => {
  const { toast } = useToast();
  const catQuery = useQuery({
    queryKey: [CATS_QUERY_KEYS.GET_CAT_BY_ID, { petId }],
    queryFn: () => getCatDetails(petId),
    enabled: !!petId,
  });

  useEffect(() => {
    if (catQuery.isError) {
      toast({
        title: 'Server wrong',
        description: 'Unable to fetch cat breed',
        variant: 'destructive',
      });
    }
  }, [catQuery.isError]);

  return catQuery;
};
