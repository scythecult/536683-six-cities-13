import { PropsWithChildren } from 'react';
import { Navigate } from 'react-router-dom';
import { AppRoute, AuthStatus } from '../../const';
import { useAppSelector } from '../../hooks/use-app-selector';
import { getAuthStatus } from '../../store/user-process/selectors';

type TPrivateRouteProps = PropsWithChildren;

const PrivateRoute = ({ children }: TPrivateRouteProps) => {
  const authStatus = useAppSelector(getAuthStatus);

  return authStatus === AuthStatus.Auth ? (
    children
  ) : (
    <Navigate to={AppRoute.Login} replace />
  );
};

export { PrivateRoute };
