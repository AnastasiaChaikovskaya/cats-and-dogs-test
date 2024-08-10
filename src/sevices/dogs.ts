import { axiosDogsInstance } from '@/api/dogsApi';
import { IBaseQueryParams } from '@/types/general';

export const getDogsBreedList = async (queryParams: IBaseQueryParams) => {
  const response = await axiosDogsInstance.get<IPet[]>('/images/search', { params: queryParams });

  return response.data;
};

export const getDogDetails = async (petId: string) => {
  const response = await axiosDogsInstance.get<IPet>(`/images/${petId}`);
  return response.data;
};
