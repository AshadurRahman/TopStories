import { Dimensions, StyleSheet } from 'react-native';

const deviceHeight = Dimensions.get('window').height;
const deviceWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black',
  },
  sectionDescription: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
    backgroundColor: 'black',
    padding: '1%',
    marginBottom: '1%'
  },
  listContainer: {
      width: '100%',
  },
  list: {
    width: '100%',
    paddingLeft: ("2%"),
  },
  loadingAnimationContainer: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: ('40%'),
  },
  image: { 
    width: '100%',
    height: '25%',
    backgroundColor: 'black',
  },
  floatingButton: {
    backgroundColor: 'lightseagreen',
    width: '15%',
    height: '10%',
    position: 'absolute',
    bottom: '10%',
    right: '10%',
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
  floatIcon: {
    fontWeight: 'bold',
    fontSize: 38,
  },
  webView: {
    width: deviceWidth,
    height: deviceHeight
  }
});

export default styles;