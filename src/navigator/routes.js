import {
  createStackNavigator,
  createDrawerNavigator,
  createSwitchNavigator,
} from 'react-navigation';

import LoadingScreen from '../screens/AppLoading';
import Feed from '../screens/Feed/View';
import Login from '../screens/Login/View';

import Menu from '../screens/Menu';

export const ROUTES = {
  FEED: 'Feed',
  APP: 'App',
  AUTH: 'Auth',
  APP_MAIN: 'Main',
  APP_LOADING: 'AppLoading',
  LOGIN: 'Login'
}

const MainNavigator = createStackNavigator(
  {
    [ROUTES.FEED]: { screen: Feed }
  },
  {
    headerMode: 'float',
  }
);


const AppNavigator = createDrawerNavigator(
  {
    [ROUTES.APP_MAIN]: { screen: MainNavigator }
  },
  {
    contentComponent: Menu
  }
);

const LoginNavigator = createStackNavigator(
  {
    [ROUTES.LOGIN]: { screen: Login }
  },
  {
    headerMode: 'none',
  }
);

export default createSwitchNavigator(
  {
    [ROUTES.APP_LOADING]: LoadingScreen,
    [ROUTES.APP]: AppNavigator,
    [ROUTES.AUTH]: LoginNavigator,
  },
  {
    initialRouteName: 'App'
  }
);
