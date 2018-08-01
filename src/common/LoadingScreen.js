import React from 'react';
import { View, Text } from 'react-native';
import Styles from './Styles';

export default LoadingScreen = ({ onPress }) => (
  <View
    style={[Styles.backgroundColorGray, Styles.centeredFlexCol]}
    onTouchEnd={onPress}
    >
    <Text>LoadingScreen page:
    </Text>
  </View>
);
