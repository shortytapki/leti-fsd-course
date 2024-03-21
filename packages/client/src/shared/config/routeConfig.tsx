import { type RouteProps } from 'react-router-dom';

export enum AppRoutes {
  MAIN = 'main',
  TRACKS = 'tracks',
  ALBUMS = 'albums',
  ARTISTS = 'artists',
  // last
  NOT_FOUND = 'not_found',
}

export const RoutePaths: Record<AppRoutes, string> = {
  [AppRoutes.MAIN]: '/',
  [AppRoutes.TRACKS]: '/tracks',
  [AppRoutes.ALBUMS]: '/albums/:id', // + ID
  [AppRoutes.ARTISTS]: '/artists',
  [AppRoutes.NOT_FOUND]: '*',
};

export const routeConfig: Record<AppRoutes, RouteProps> = {
  [AppRoutes.MAIN]: {
    path: RoutePaths.main,
    element: <>This main page</>,
  },
  [AppRoutes.TRACKS]: {
    path: RoutePaths.tracks,
    element: <>This is tracks page</>,
  },
  [AppRoutes.ALBUMS]: {
    path: RoutePaths.albums,
    element: <>This is albums page</>,
  },
  [AppRoutes.ARTISTS]: {
    path: RoutePaths.artists,
    element: <>This is artists page</>,
  },
  // Last
  [AppRoutes.NOT_FOUND]: {
    path: RoutePaths.not_found,
    element: <>404</>,
  },
};
