import React from 'react';
import { View } from 'react-native';

const Menu = (navigation) => {
  return (
    <View>
      <Image source={require('../img/logo.png')}/>
        <Button title="Historia" onPress={() => navigation.navigate('Historia')}/>
        <Button title="Cursos" onPress={() => navigation.navigate('Cursos')}/>
    </View>
  );
}


export default Menu;