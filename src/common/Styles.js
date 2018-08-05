import { StyleSheet, Dimensions } from 'react-native';
const { width, height } = Dimensions.get('window');

export const phoneSize = {
  HEIGHT: height,
  WIDTH: width
};

export default StyleSheet.create({
  centeredFlexCol: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1
  },
  postImage: {
    width: WIDTH,
    height: WIDTH,
    backgroundColor: COLORS.TRANSPARENTS.green
  },
  avatarIcon: {
    width: 80,
    height: 80,
    borderRadius: 40
  },
  centeredContainerRow: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  centeredContainerColumn: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },
  fullHeightWidth: {
    height: '100%',
    width: '100%'
  },
  backgroundColorGray: {
    backgroundColor: 'gray'
  },
  rowWidthContainer: {
    width: width,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',// 'space-between'
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: '5%',
    paddingRight: '5%'
  },
  input: {
    width: 0.9 * width,
    lineHeight: 16,
    fontSize: 14
  }
});

const COLORS = {
  white: '#fff',
  black: '#000',
  TRANSPARENTS: {
    green: '#27ff007a'
  }
}