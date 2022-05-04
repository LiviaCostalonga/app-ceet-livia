import {react} from "react";
import {View, Text, Button, Image} from "react-native";
import Estilo from "../estilo/Estilo";
import MenuPrincipal from "./MenuPrincipal";
import Menu from "./Menu";
import BarraSuperior from "./BarraSuperior";
import { SafeAreaView, ScrollView,StatusBar } from 'react-native';
//import minhaImagem from '../img/vasco.jpeg';
//const minhaImagem =  require('../img/vasco.jpg');

const TelaPrincipal = ({navigation}) =>{
    return(
    <View style={Estilo.fundoTela}>    
     <SafeAreaView>
    <ScrollView>
        <BarraSuperior></BarraSuperior>
        <MenuPrincipal></MenuPrincipal>
        <Button title="Historia" onPress={() => navigation.navigate('Historia')}/>
        <Button title="Cursos" onPress={() => navigation.navigate('Cursos')}/>
        <Button title="Portal" onPress={() => navigation.navigate('Portal')}/>
        <Button title="Contato" onPress={() => navigation.navigate('Contato')}/>
        </ScrollView>
  </SafeAreaView>  
    </View>
    );
}


export default TelaPrincipal; 