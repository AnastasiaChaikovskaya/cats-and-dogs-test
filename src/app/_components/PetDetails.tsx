'use client';

import { Skeleton } from '@/components/ui/skeleton';
import { cn } from '@/lib/utils';
import { Separator } from '@radix-ui/react-separator';
import { ImageIcon } from 'lucide-react';
import Image from 'next/image';
import React, { FC, useState } from 'react';

interface IPetDetails {
  pet: IPet;
}

const PetDetails: FC<IPetDetails> = ({ pet }) => {
  const [isLoadingImage, setIsLoadingImage] = useState(true);
  return (
    <div className="flex flex-col gap-4 items-center md:flex-row md:justify-between">
      <div className="relative w-full md:w-[500px] h-[300px]">
        {isLoadingImage && (
          <Skeleton className="w-full md:w-[500px] h-[300px] rounded-md flex justify-center items-center">
            <ImageIcon className="h-10 w-10" />
          </Skeleton>
        )}
        <Image
          alt={pet?.breeds[0].name}
          src={pet.url}
          fill
          className={cn('rounded-md block opacity-100 transition-opacity', isLoadingImage && 'opacity-0')}
          sizes="(max-width: 600px) 100vw, max-width: 1200px) 50vw, 
              33vw"
          quality={80}
          onLoad={() => {
            setIsLoadingImage(false);
          }}
        />
      </div>
      <div className="flex flex-col gap-2 shadow-md rounded-sm lg:w-[500px] p-3">
        <h3 className="text-xl font-bold">{pet.breeds[0].name}</h3>
        <Separator />
        <div className="flex flex-col gap-1">
          <p className="text-sm">Temperament:</p>
          <p className="text-sm">{pet.breeds[0].temperament}</p>
        </div>
        <div className="flex justify-between items-center">
          <p className="text-sm">Imperial:</p>
          <p className="text-sm">{pet.breeds[0].weight.imperial}</p>
        </div>
        <div className="flex justify-between items-center">
          <p className="text-sm">Metric:</p>
          <p className="text-sm">{pet.breeds[0].weight.metric}</p>
        </div>
      </div>
    </div>
  );
};

export default PetDetails;
