import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#222222',
  },
  logo: {
    marginBottom: 40,
    borderWidth: 4,
    width: 130,
    height: 130,
  },
  name: {
    color: '#FFFFFF',
    fontSize: 22,
    fontWeight: 'bold',
    fontFamily: 'Roboto'
  },
  description: {
    color: '#FFFFFF',
    fontFamily: 'Roboto',
    marginBottom: 120
  }
});