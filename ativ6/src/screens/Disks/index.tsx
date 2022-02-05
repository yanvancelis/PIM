import { Image, ScrollView, Text } from 'react-native';
import { styles } from './styles';

const favDisks = [
  { link: 'https://www.theaudiodb.com/images/media/artist/thumb/ytppqt1369385779.jpg' },
  { link: 'https://www.theaudiodb.com/images/media/artist/thumb/syruvu1359799268.jpg' },
  { link: 'https://www.theaudiodb.com/images/media/artist/thumb/spxspp1378604337.jpg' },
  { link: 'https://www.theaudiodb.com/images/media/artist/thumb/xwsqyp1525202197.jpg' }
]

export function Disks() {
  return (
    <>
      <ScrollView style={styles.container} contentContainerStyle={styles.content}>
        <Text style={styles.text}>{'Favoritos'}</Text>
        { 
        favDisks?.map(({ link }:any) => {
          if (link) {
            return <Image source={{uri: link}} style={styles.img}/>;
          }
        })
      }
      </ScrollView>
    </>
  );
}