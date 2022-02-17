import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center'
  },
  label: {
    marginBottom: 8,

    color: 'white',
    fontSize: 16
  },
  input: {
    width: 160,

    marginBottom: 18,
    padding: 8,

    borderColor: 'white',
    borderRadius: 8,
    borderWidth: 1,

    backgroundColor: '#FF6A6A',

    color: 'black',
    fontSize: 24,
    fontWeight: 'bold'
  },
  textCenter: {
    textAlign: 'center'
  },
  readOnly: {
    backgroundColor: 'lightgreen',

    color: 'black'
  }
});
