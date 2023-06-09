import { StyleSheet } from 'react-native';
import { colors } from '../../utils/colors';

export const styles = StyleSheet.create({
  container: {
    paddingRight: 12
  },
  checkbox: {
    borderWidth: 1,
    borderColor: colors.grey,
    width: 22,
    height: 22,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8
  },
  innerCheckbox: {
    backgroundColor: colors.grey,
    justifyContent: 'center',
    width: 22,
    height: 22,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: colors.grey,
    borderRadius: 8
  },
  image: {
    width: 10,
    height: 10
  }
});