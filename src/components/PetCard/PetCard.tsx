import React, { FC, useMemo } from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import Image from 'next/image';
import Link from 'next/link';
import { APP_ROUTS } from '@/constants/routes';
import { url } from 'inspector';

interface IPetCard {
  pet: IPet;
  url: string;
}

export const PetCard: FC<IPetCard> = ({ pet, url }) => {
  const petName = useMemo(() => {
    if (pet.breeds.length > 0) {
      return pet.breeds[0].name;
    }

    return 'Unknown breed';
  }, []);

  return (
    <Link href={url}>
      <Card>
        <CardHeader>
          <CardTitle className="text-base">{petName}</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="h-[250px] w-full relative">
            <Image
              alt="pet image"
              src={pet.url}
              fill
              className="rounded-md"
              sizes="(max-width: 600px) 100vw, max-width: 1200px) 50vw, 
              33vw"
              quality={80}
            />
          </div>
        </CardContent>
      </Card>
    </Link>
  );
};
