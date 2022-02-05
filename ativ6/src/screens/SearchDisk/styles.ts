import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    backgroundColor: '#222222',
  },
  content: {
    paddingTop: 135,
    paddingBottom: 184,
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    width: 275,
    height: 50,
    padding: 10,
    borderRadius: 6,
    marginBottom: 14,
    backgroundColor: '#222222',
    color: '#FFFFFF',
    borderWidth: .6,
    borderColor: '#FFFFFF'
  },
  text: {
    fontSize: 20,
    paddingBottom: 8,
    color: '#FFFFFF',
    fontWeight: 'bold',
    fontFamily: 'Roboto'
  }
});