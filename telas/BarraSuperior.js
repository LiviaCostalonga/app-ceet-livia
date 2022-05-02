import * as React from 'react';
import { Appbar } from 'react-native-paper';
import { Platform,Image, StyleSheet } from 'react-native';


const MORE_ICON = Platform.OS === 'ios' ? 'dots-horizontal' : 'dots-vertical';

const BarraSuperior = () => (
    <Appbar.Header style={styles.corFundo}>
    <Image style={styles.logo}
        source={require('../img/logo.png')}
/>
       <Appbar.Content title="CEET Vasco Coutinho " />      
       <Appbar.Action icon={MORE_ICON} onPress={() => {}} />
    </Appbar.Header>
);

const styles = StyleSheet.create({
  corFundo: {
    backgroundColor: 'white',
    marginTop: 15,
    marginBottom:15
  },
  logo:{
    width: 70,
    height: 70,
    marginLeft: 10,
  },
  fonteTitulo: {
  fontFamily: 'sans-serif-light',
      fontWeight: 'normal',
  }
});

export default BarraSuperior;