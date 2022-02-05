import { ScrollView, Text, TextInput } from 'react-native';

import React, { useState } from 'react';
import { api } from '../../services/api';
import { styles } from './styles';

import { Disk } from '../../components/Disk';

export function SearchDisk() {
  const [params, setParams] = useState("");

  const [disks, setDisks] = useState<any>([]);
  
  const search = (value: string) => {
    
    setParams(value);
    
    async function getDisks() {
      const disks = await api.get(`search.php?s=${value}`);
      
      setDisks(disks.data.artists);
    }
    getDisks();
  }

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <Text style={styles.text}>{'Buscar artistas'}</Text>
      <TextInput
        value={params}
        onChangeText={search}
        placeholder={'Buscar por artista'}
        style={styles.input}
      />
      { 
        disks?.map(({ strArtistThumb, strArtist, strStyle }:any) => {
          if (strArtistThumb) {
            return <Disk imageUri={strArtistThumb} artistSrc={strArtist} styleSrc={strStyle}/>;
          }
        })
      }
    </ScrollView>
  );
}