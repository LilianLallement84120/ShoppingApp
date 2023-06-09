import { StyleSheet } from 'react-native';
import { colors } from '../../../utils/colors';

export const styles = StyleSheet.create({
  container: {
    paddingVertical: 150,
    paddingHorizontal: 25,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.white
  },
  image: {
    width: '100%',
    height: 200,
  },
  titleContainer: {
    marginVertical: 54,
    width: '100%'
  },
  title: {
    fontSize: 40,
    fontWeight: 'bold',
    textAlign: 'center'
  },
  innerTitle: {
    color: colors.orange,
    textDecorationLine: 'underline'
  },
  buttonContainer: {
    width: '100%',
  },
  signIn: {
    color: colors.blue,
    textAlign: 'center',
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 30,
  }
});