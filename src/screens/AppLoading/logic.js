import { NavigationActions } from 'react-navigation';
import { SCREENS } from '../../navigator/routes';

export const goTo = (routeName) => async dispatch => {
  // dispatch()
  console.log('LOGIC NAVIGATE goTo');

  dispatch(NavigationActions.navigate({ routeName: routeName}));
};
