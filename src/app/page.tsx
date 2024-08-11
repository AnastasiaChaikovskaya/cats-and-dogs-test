'use client';

import { PetCard } from '@/components/PetCard/PetCard';
import { SkeletonCard } from '@/components/SekeletonCard/SkeletonCard';
import { Separator } from '@/components/ui/separator';
import { APP_ROUTS } from '@/constants/routes';
import { useCatsBreedList } from '@/hooks/api';
import { useDogsBreedList } from '@/hooks/api/dog/useDogsBreedList';
import { Cat, Dog } from 'lucide-react';

export default function Home() {
  const {
    data: catsList,
    isLoading: catsIsLoading,
    isError: catsIsError,
  } = useCatsBreedList({ limit: '4', page: '0', has_breeds: '1' });
  const {
    data: dogsList,
    isLoading: dogsIsLoading,
    isError: dogsIsError,
  } = useDogsBreedList({ limit: '4', page: '0', has_breeds: '1' });

  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-2">
        <div>
          <div className="flex items-center gap-1">
            <Dog className="h-6 w-6 inline-block" />
            <h2 className="text-2xl">Dogs</h2>
          </div>
          <Separator />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-3">
          {dogsIsLoading && Array.from({ length: 4 }, (_, i) => <SkeletonCard key={i} />)}
          {dogsList &&
            dogsList.length > 0 &&
            dogsList.map((dog) => (
              <PetCard pet={dog} key={dog.id} url={APP_ROUTS.App.Main.Dogs.DogDetails.makePath(dog.id)} />
            ))}
          {dogsIsError ||
            (dogsList?.length === 0 && (
              <p>No data</p>
              // empty component
            ))}
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <div>
          <div className="flex items-center gap-1">
            <Cat className="h-6 w-6 inline-block" />
            <h2 className="text-2xl">Cats</h2>
          </div>
          <Separator />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-3">
          {catsList &&
            catsList.length > 0 &&
            catsList.map((cat) => (
              <PetCard pet={cat} key={cat.id} url={APP_ROUTS.App.Main.Cats.CatDetails.makePath(cat.id)} />
            ))}
          {catsIsLoading && Array.from({ length: 4 }, (_, i) => <SkeletonCard key={i} />)}
          {catsIsError ||
            (catsList?.length === 0 && (
              <p>No data</p>
              // empty component
            ))}
        </div>
      </div>
    </div>
  );
}
