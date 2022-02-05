import { Image, Text } from 'react-native';
import { styles } from './styles';

import logo from '../../assets/logo.png';

export function Logo() {
  return (
    <>
      <Image
        source={logo}
        style={ styles.logo}
      />
      <Text style={styles.text}>{'Meus Vinis'}</Text>
    </>
  );
}