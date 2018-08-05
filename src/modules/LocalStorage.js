import { AsyncStorage } from 'react-native';

export const saveUser = async user => {
  try {
    await AsyncStorage.setItem('USER', JSON.stringify(user))
  } catch (e) {
    console.error(e);
  }
}

export const getUser = async () => {
  try {
    return JSON.parse((await AsyncStorage.getItem('USER')));
  } catch (e) {
    console.error(e);
    return null;
  }
}


