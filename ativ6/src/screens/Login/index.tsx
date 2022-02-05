import React, { useState } from "react";
import { Pressable, TextInput, View } from "react-native";
import { Button } from "../../components/Button";
import { Logo } from "../../components/Logo";
import { Tabs } from "../Tabs";

import { styles } from './styles';

type Props = {
  navigation: any;
};

export function Login({ navigation }: Props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onSubmit = () => {
    navigation.navigate('Tabs', {})
  }

  return (
    <View style={styles.container}>
      <Logo />
      <TextInput
        value={email}
        onChangeText={(email) => setEmail(email)}
        placeholder={'Email'}
        style={styles.input}
      />
      <TextInput
        value={password}
        onChangeText={(password) => setPassword(password)}
        placeholder={'Password'}
        secureTextEntry={true}
        style={styles.input}
      />

      <Button 
        title={'Entrar'}
        color={'#222222'}
        backgroundColor={'#D2BE04'}
        onPress={onSubmit}
      />
    </View>
  );

}