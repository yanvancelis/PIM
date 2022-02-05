import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#222222',
  },
  img: {
    borderRadius: 5,
    borderWidth: 4,
    width: 150,
    height: 150,
    marginTop: 15,
  },
  img_modal: {
    borderRadius: 5,
    borderWidth: 4,
    width: 220,
    height: 220,
    marginBottom: 35,
  },
  artist: {
    fontSize: 30,
    paddingBottom: 8,
    color: '#FFFFFF',
    fontWeight: 'bold',
    fontFamily: 'Roboto',
  },
  artistStyle: {
    fontSize: 15,
    paddingBottom: 8,
    color: '#FFFFFF',
    opacity: .5,
    fontFamily: 'Roboto',
    marginBottom: 50
  }
});