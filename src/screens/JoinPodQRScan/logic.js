import { NavigationActions, NavigationAction } from 'react-navigation';
import { App, DataProtection, TermsAndConditions } from '../../redux/constants';
import { SCREENS } from '../../navigator/routes';

export const goTo = (routeName) => async dispatch => {
  // dispatch()
  console.log('LOGIC NAVIGATE goTo');

  dispatch(NavigationActions.navigate({ routeName: SCREENS.Profile}));
};
