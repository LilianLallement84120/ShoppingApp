import { Dimensions, StyleSheet } from 'react-native';
import { colors } from '../../utils/colors';

const { width } = Dimensions.get('window');

export const styles = StyleSheet.create({
  image: {
    width: (width / 2) - 16,
    height: 200,
    borderRadius: 8,
  },
  container: {
    marginHorizontal: 8,
    paddingTop: 24
  },
  title: {
    paddingVertical: 8,
    color: colors.textGrey
  },
  price: {
    color: colors.black,
    paddingVertical: 8
  }
});