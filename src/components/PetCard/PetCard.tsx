'use client';

import React, { FC, useMemo, useState } from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Image as ImageIcon } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { Skeleton } from '../ui/skeleton';

interface IPetCard {
  pet: IPet;
  url: string;
}

export const PetCard: FC<IPetCard> = ({ pet, url }) => {
  const [isLoading, setIsLoading] = useState(true);
  const petName = useMemo(() => {
    if (pet.breeds.length > 0) {
      return pet.breeds[0].name;
    }

    return 'Unknown breed';
  }, []);

  return (
    <Link href={url} className="w-[250px] md:w-[300px]">
      <Card>
        <CardHeader>
          <CardTitle className="text-base">{petName}</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="h-[250px] w-full relative">
            {isLoading && (
              <Skeleton className="w-full h-[250px] rounded-md flex justify-center items-center">
                <ImageIcon className="h-10 w-10" />
              </Skeleton>
            )}
            <Image
              alt="pet image"
              src={pet.url}
              fill
              className={cn('rounded-md block opacity-100 transition-opacity', isLoading && 'opacity-0')}
              sizes="(max-width: 600px) 100vw, max-width: 1200px) 50vw, 
              33vw"
              quality={80}
              onLoad={() => {
                setIsLoading(false);
              }}
            />
          </div>
        </CardContent>
      </Card>
    </Link>
  );
};
