import React from 'react';
import { View, Text, Image } from 'react-native';
import FastImage from 'react-native-fast-image'

import Styles from '../../Styles';
// import {} from '../../../../assets/'
const avatarPlaceholder = require('../../../../assets/avatar.png');

export const AvatarIcon = ({ url, style }) => (
  <FastImage
    source={{
      uri: url,
      priority: FastImage.priority.normal,
    }}
    defaultSource={avatarPlaceholder}
    style={[{ margin: 5 }, Styles.avatarIcon, style]} />
)

export const BottomPart = ({ commentsCount = 0, likesCount = null }) => (
  <View style={{
    width: '100%', alignItems: 'center',
    justifyContent: likesCount ? 'space-between' : 'center',
    height: 30
  }} >
    <Text > {commentsCount} comments</Text>
    {likesCount && <Text>{likesCount} likes</Text>}
  </View>
)

export const UserName = ({
  name = 'Unkhown User',
  styles = {}
}) => (
    <View style={[{
      flexDirection: 'row',// paddingHorizontal: 5,
      justifyContent: 'flex-start',
    }, styles.container || {}]} >
      <Text style={[{ fontSize: 20, fontWeight: '500' }, styles.textStyle || {}]} >{name}</Text>
    </View>
  )
