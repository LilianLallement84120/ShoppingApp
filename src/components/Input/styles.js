import { StyleSheet } from 'react-native';
import { colors } from '../../utils/colors';

export const styles = StyleSheet.create({
  container: {
    marginVertical: 16
  },
  label: {
    color: colors.blue,
    marginBottom: 8,
    fontWeight: 'bold'
  },
  input: {
    paddingHorizontal: 17,
    paddingVertical: 22,
    opacity: 0.4,
    flex: 1
  },
  inputContainer: {
    borderWidth: 1,
    borderColor: colors.grey,
    borderRadius: 14,
    flexDirection: 'row'
  },
  eye: {
    width: 24,
    height: 24,
    marginRight: 8,
    marginTop: 24
  }
});
