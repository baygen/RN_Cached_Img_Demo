import React, { PureComponent } from 'react';
import { View, Text } from 'react-native';
import PropTypes from 'prop-types';
import { AvatarIcon, BottomPart, UserName } from '../statelessComponents';
import Styles from '../Styles';

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
      <View style={Styles.messagePostContainer}>
        <AvatarIcon url={this.props.imageURL} />
        <View style={{ flexDirection: 'column', flex: 1, padding: 5 }}>
          <UserName name={this.props.userName}
            styles={{
              container: {
                justifyContent: 'flex-start'
              }
            }} />
          <Text style={{}} >{this.props.message}</Text>

        </View>
        <BottomPart commentsCount={this.props.commentsCount} />
      </View >
    );
  }
}
