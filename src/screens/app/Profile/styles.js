import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: 24,
    paddingHorizontal: 16,
    paddingBottom: 24
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  email: {
    fontSize: 16,
    marginBottom: 16,
  },
  buttonContainer: {
    marginBottom: 12,
  },
  button: {
    backgroundColor: 'transparent',
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 8,
    paddingVertical: 12,
    paddingHorizontal: 24,
  },
  buttonContent: {
    alignItems: 'center',
  },
  buttonText: {
    color: 'blue',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  buttonSubText: {
    color: 'gray',
    fontSize: 12,
    textAlign: 'center',
  },
});
