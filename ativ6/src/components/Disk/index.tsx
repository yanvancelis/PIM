import { Image, Modal, Text, TouchableHighlight, View, StyleSheet } from 'react-native';
import { styles } from './styles';

import { Button } from '../Button'
import React, { useState } from 'react';
import { IconButton } from 'react-native-paper';

type Props = {
  imageUri: string;
  artistSrc: string;
  styleSrc: string;
}

export function Disk({ imageUri, artistSrc, styleSrc }: Props) {
  const [modalVisible, setModalVisible] = useState(false);
  
  return (
    <>
      <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          style={{height: 50}}
        >
          <IconButton icon={'arrow-left'} color={'#FFFFFF'} size={50} onPress={() => setModalVisible(false)}/>
          <View style={styles.container}>
          <Image
            source={{ uri: imageUri}}
            style={ styles.img_modal}
          />
          <Text style={styles.artist}>{artistSrc}</Text>
          <Text style={styles.artistStyle}>{styleSrc}</Text>
          <Button
            title={'Favoritar'}
            color={'#FFFFFF'}
            backgroundColor={'green'}
            onPress={() => {
              alert('Adicionado!')
              setModalVisible(false);
            }}
          />
          </View>
      </Modal>

    <TouchableHighlight onPress={() => { setModalVisible(true) }}>

    <Image
        source={{ uri: imageUri}}
        style={ styles.img}
    />
    </TouchableHighlight>
    </>
  );
}