import {
  createStackNavigator,
  createDrawerNavigator,
  createSwitchNavigator,
} from 'react-navigation';

import LoadingScreen from '../screens/AppLoading';
import Feed from '../screens/Feed';
import Login from '../screens/Login';

import Menu from '../screens/Menu';


const MainNavigator = createStackNavigator(
  {
    Feed: { screen: Feed }
  },
  {
    headerMode: 'float',
  }
);


const AppNavigator = createDrawerNavigator(
  {
    MainNavigator: {
      screen: MainNavigator
    }
  },
  {
    contentComponent: Menu,

  }
);

const LoginNavigator = createStackNavigator(
  {
    Login: { screen: Login }
  },
  {
    headerMode: 'none',
  }
);

export default createSwitchNavigator(
  {
    AppLoading: LoadingScreen,
    App: AppNavigator,
    Authorise: LoginNavigator,
  },
  {
    initialRouteName: 'App'
  }
);
