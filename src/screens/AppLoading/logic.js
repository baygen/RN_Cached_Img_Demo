import { NavigationActions } from 'react-navigation';
import { getUser } from '../../modules/LocalStorage';
import { ROUTES } from '../../navigator/routes';

export const checkUserAuthorization = () => async dispatch => {
  console.log('LOGIC NAVIGATE goTo');
  const nextRoute = (await getUser()) ? ROUTES.APP : ROUTES.AUTH;
  dispatch(NavigationActions.navigate({ routeName: nextRoute }));
};
