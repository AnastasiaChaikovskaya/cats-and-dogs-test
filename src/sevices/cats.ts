import { axiosCatsInstance } from '@/api/catsApi';
import { IBaseQueryParams } from '@/types/general';

export const getCatsBreedList = async (queryParams: IBaseQueryParams) => {
  const response = await axiosCatsInstance.get<IPet[]>('/images/search', { params: queryParams });

  return response.data;
};

export const getCatDetails = async (petId: string) => {
  const response = await axiosCatsInstance.get<IPet>(`/images/${petId}`);
  return response.data;
};
