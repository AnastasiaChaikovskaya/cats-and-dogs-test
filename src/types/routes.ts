export type TAppRouteItem = {
  /**
   * Path to the page route.
   * @example '/signin'
   */
  path: string;
  /**
   * Name of the page route.
   * @example 'Sign In'
   */
  name: string;
  /**
   * Unique key of the page route.
   * @example 'signin'
   */
  key: string;
  /**
   * Optional function to construct the path to the page route.
   */
  makePath: (...arguments_: (number | string)[]) => string;
};

export type TAppRoutes = {
  App: {
    Main: {
      Root: TAppRouteItem;
      Cats: {
        Root: TAppRouteItem;
        CatDetails: TAppRouteItem;
      };
      Dogs: {
        Root: TAppRouteItem;
        DogDetails: TAppRouteItem;
      };
    };
  };
};
