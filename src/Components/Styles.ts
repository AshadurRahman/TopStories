import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  sectionDescription: {
    fontSize: 18,
    fontWeight: '400',
  },
  listContainer: {
        width: '100%'
    },
  list: {
      width: '100%',
      paddingLeft: ("2%")
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
    width: '20%',
    height: '10%',
    position: 'absolute',
    bottom: '20%',
    right: '10%',
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center'
  },
  floatIcon: {
    fontWeight: 'bold',
    fontSize: 28,
  }
});

export default styles;