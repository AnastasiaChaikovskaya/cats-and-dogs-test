import { TAppRoutes } from '@/types/routes';

export const APP_ROUTS: TAppRoutes = {
  App: {
    Main: {
      Root: {
        key: 'main',
        path: '/',
        name: 'Main',
        makePath: () => `/`,
      },
      Cats: {
        Root: {
          key: 'cats',
          path: '/cats',
          name: 'Cats',
          makePath: () => `/cats`,
        },
        CatDetails: {
          key: 'cat',
          path: 'cats/:breed',
          name: 'Cat',
          makePath: (breed) => `cats/${breed}`,
        },
      },
      Dogs: {
        Root: {
          key: 'dogs',
          path: '/dogs',
          name: 'Dogs',
          makePath: () => `/dogs`,
        },
        DogDetails: {
          key: 'dog',
          path: 'dogs/:breed',
          name: 'Dog',
          makePath: (breed) => `dogs/${breed}`,
        },
      },
    },
  },
};
