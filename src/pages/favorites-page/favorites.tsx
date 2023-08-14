import { useEffect } from 'react';
import { FavoritesList } from '../../components/favorites-list/favorites-list';
import { useAppDispatch } from '../../hooks/use-app-dispatch';
import { useAppSelector } from '../../hooks/use-app-selector';
import { FavoritesEmpty } from './favorites-empty';
import { loadFavorites } from '../../store/async-actions';
import { LoadingStatus } from '../../const';
import { Spinner } from '../../components/spinner/spinner';

const Favorites = () => {
  const dispatch = useAppDispatch();
  const loadingStatus = useAppSelector((store) => store.favoritesLoadingStatus);
  const favorites = useAppSelector((store) => store.favorites);

  useEffect(() => {
    let isMounted = true;

    if (isMounted) {
      dispatch(loadFavorites());
    }

    return () => {
      isMounted = false;
    };
  }, [dispatch]);

  if (loadingStatus === LoadingStatus.Loading) {
    return <Spinner />;
  }

  if (!favorites.length) {
    return <FavoritesEmpty />;
  }

  return (
    <main className="page__main page__main--favorites">
      <div className="page__favorites-container container">
        {<FavoritesList favorites={favorites} />}
      </div>
    </main>
  );
};

export { Favorites };
