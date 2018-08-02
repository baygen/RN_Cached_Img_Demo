import React, { PureComponent } from 'react';
import { View, Text, Image } from 'react-native';
import PropTypes from 'prop-types';
import { AvatarIcon, BottomPart, UserName } from './components';
import Styles from '../Styles';

// @connect(state => ({}))
export default class MessagePost extends PureComponent {
  static propTypes = {
    userName: PropTypes.string.isRequired,
    message: PropTypes.string.isRequired,
    identifier: PropTypes.number.isRequired,
    commentsCount: PropTypes.number.isRequired,
    type: PropTypes.string.isRequired,
    imageURL: PropTypes.string.isRequired
  }

  render() {
    return (
      // <View style={{ width: '100%', flexDirection: 'column' }}>
      <View style={{
        flex: 1,
        width: '100%',
        flexDirection: 'row',
        flexWrap: 'wrap',
        borderBottomColor: 'gray',
        borderBottomWidth: 1,
        paddingHorizontal: 10,
      }}>
        <AvatarIcon url={this.props.imageURL} />
        <View style={{ flexDirection: 'column', flex: 1 }}>
          <UserName name={this.props.userName}
            styles={{
              container: {
                justifyContent: 'flex-start'
              }
            }} />
          <Text style={{}} >{this.props.message}</Text>

        </View>
        <BottomPart commentsCount={this.props.commentsCount} />
      </View>

      // </View >
    );
  }
}
