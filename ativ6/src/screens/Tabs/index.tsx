import * as React from 'react';
import { Text } from 'react-native';
import { BottomNavigation } from 'react-native-paper';
import { Disks } from '../Disks';
import { Profile } from '../Profile';
import { SearchDisk } from '../SearchDisk';
import { styles } from './styles';

const DiskRoutes = () => <Disks />

const SearchDiskRoutes = () => <SearchDisk/>;

const ProfileRoute = () => <Profile/>;

export function Tabs({ navigation }: any){
  const [index, setIndex] = React.useState(0);

  const [routes] = React.useState([
    { key: 'disks', title: 'Meus discos', icon: 'adjust' },
    { key: 'search_disks', title: 'Buscar discos', icon: 'magnify' },
    { key: 'profile', title: 'Meu perfil', icon: 'account' },
  ]);

  const renderScene = BottomNavigation.SceneMap({
    disks: DiskRoutes,
    search_disks: SearchDiskRoutes,
    profile: ProfileRoute,
  });

  return (
    <BottomNavigation
      navigationState={{ index, routes }}
      onIndexChange={setIndex}
      renderScene={renderScene}
      barStyle={styles.tabs}
      activeColor={'#D2BE04'}
    />
  );
};