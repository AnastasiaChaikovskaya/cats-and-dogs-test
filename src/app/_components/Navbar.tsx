'use client';

import React, { useMemo } from 'react';
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu';
import Link from 'next/link';
import { APP_ROUTS } from '@/constants/routes';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';

export const Navbar = () => {
  const pathName = usePathname();

  return (
    <NavigationMenu>
      <NavigationMenuList className="gap-3">
        <NavigationMenuItem>
          <Link href={APP_ROUTS.App.Main.Dogs.Root.path} legacyBehavior passHref>
            <NavigationMenuLink
              className={cn(
                'hover:bg-stone-100 transition-colors p-2 rounded-md text-black',
                pathName === APP_ROUTS.App.Main.Dogs.Root.path &&
                  'bg-black text-white p-2 rounded-md pointer-events-none',
              )}
            >
              {APP_ROUTS.App.Main.Dogs.Root.name}
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <Link href={APP_ROUTS.App.Main.Cats.Root.path} legacyBehavior passHref>
            <NavigationMenuLink
              className={cn(
                'hover:bg-stone-100 transition-colors p-2 rounded-md text-black',
                pathName === APP_ROUTS.App.Main.Cats.Root.path &&
                  'bg-black text-white p-2 rounded-md pointer-events-none',
              )}
            >
              {APP_ROUTS.App.Main.Cats.Root.name}
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
};
