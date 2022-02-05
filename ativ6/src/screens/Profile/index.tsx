import { Image, Text, View } from 'react-native';
import { Button } from '../../components/Button';
import React, { ReactPropTypes, useState } from 'react';
import { styles } from './styles';

import profileIcon from '../../assets/profile-default-icon.png';

export function Profile() {
  return (
    <View style={styles.container}>
      <Image
        source={profileIcon}
        style={styles.logo}
      />
      
      <Text style={styles.name}>Yan Vancelis</Text>
      <Text style={styles.description}>Design Digital</Text>

      <Button 
        title={'Sair'}
        color={'#222222'}
        backgroundColor={'#D2BE04'}
        onPress={() => alert('deslogando')}
      />
    </View>
  );
}