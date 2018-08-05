import React from 'react';
import { View, Text, Image } from 'react-native';
import moment from 'moment';
import FastImage from 'react-native-fast-image';

import Styles from '../../Styles';
const SRC_AVATAR_DEFAULT = require('../../../../assets/avatar.png');
const SRC_IMAGE_DEFAULT = require('../../../../assets/placeholderImage.png');

export const AvatarIcon = ({ url, style = {} }) => (
  <FastImage
    source={{
      uri: url,
      priority: FastImage.priority.normal,
    }}
    defaultSource={SRC_AVATAR_DEFAULT}
    style={[{ margin: 5 }, Styles.avatarIcon, style]} />
);

export const LargeImage = ({ url, style = {}, ...rest }) => {
  let isLoaded = false;
  return (
    <FastImage
      source={{
        uri: url,
        priority: FastImage.priority.high,
      }}
      {...rest}
      onLoadEnd={() => isLoaded = true}
      resizeMode={FastImage.resizeMode.cover}
      defaultSource={SRC_IMAGE_DEFAULT}
      style={[Styles.postImage, style, !isLoaded && { backgroundColor: 'red' }]} />)
};

export const BottomPart = ({ commentsCount = 0, likesCount = null }) => (
  <View
    style={[Styles.bottomRow,
    { justifyContent: likesCount ? 'space-between' : 'center' }]} >
    <Text style={{ display: !!likesCount ? 'flex' : 'none' }}>{likesCount} likes</Text>
    <Text > {commentsCount} comments</Text>
    <Text style={{ display: !!likesCount ? 'flex' : 'none' }}>{moment().format('DD MMM HH:mm')}</Text>
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
  );
