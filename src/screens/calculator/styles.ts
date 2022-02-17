import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',

    backgroundColor: 'darkgreen'
  },
  title: {
    marginBottom: 32,

    color: 'lime',
    fontSize: 32,
    fontWeight: 'bold'
  },
  iconsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',

    width: '100%',
    maxWidth: 400,

    marginVertical: 16
  }
});
