import { NavigationActions } from 'react-navigation';
import { getUser } from '../../modules/LocalStorage';
import { ROUTES } from '../../navigator/routes';

export const checkUserAuthorization = () => async dispatch => {
  const isUserExist = await getUser();
  // const nextRoute = (await getUser()) ? ROUTES.APP : ROUTES.AUTH;
  isUserExist && dispatch(NavigationActions.navigate({ routeName: ROUTES.APP }));
};
