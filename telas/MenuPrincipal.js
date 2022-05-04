import * as React from 'react';
import { Avatar, Button, Card, Image } from 'react-native-paper';
import {View} from 'react-native'; 

const LeftContent = props => <Avatar.Icon {...props} icon="folder" />

const MenuPrincipal = ({navigation}) => {
  return (
  <View>
  <Card>
    <Card.Cover Image
        source={require('../img/vasco.jpg')}  />
    <Card.Actions>
    <Button title="Historia" onPress={() => navigation.navigate('Historia')}>HISTÓRIA </Button>
    </Card.Actions>
     <Card>
    <Card.Cover source={{ uri: 'https://res.cloudinary.com/dte7upwcr/image/upload/f_auto,w_1500/blog/blog2/cursos-de-informatica/cursos-de-informatica-img_header.jpg' }} />
    <Card.Actions>
    <Button title="Cursos" onPress={() => navigation.navigate('Cursos')}>CURSOS </Button>
    </Card.Actions>
  </Card>
   <Card>
    <Card.Cover Image
        source={require('../img/portal.png')} />
    <Card.Actions>
    <Button title="Portal" onPress={() => navigation.navigate('Portal')}>PORTAL </Button>
    </Card.Actions>
  </Card>
  </Card>
  </View>
 
 
);
  }



export default MenuPrincipal;

const Navegacao = ({navigation}) =>{
  <View>
       <Image source={require('../img/logo.png')}/>
      <Button title="Historia" onPress={() => navigation.navigate('Historia')}/>
      <Button title="Cursos" onPress={() => navigation.navigate('Cursos')}/>
      <Button title="Cursos" onPress={() => navigation.navigate('Cursos')}/>
  </View>
}
