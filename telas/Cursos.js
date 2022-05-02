import React from 'react'; 
import { SafeAreaView, View, ScrollView, StyleSheet } from 'react-native'; 
import { Text, Card, Icon } from 'react-native-elements';
import BarraSuperior from './BarraSuperior';
import { Button } from 'react-native-paper';


const Cursos = ({navigation}) => { 
  return ( 
    <SafeAreaView style={styles.container}> 
      <ScrollView> 
        <View style={styles.container}> 
        <BarraSuperior></BarraSuperior>
        <Button title="Home" onPress={() => navigation.navigate('Home')}>Home </Button>
          <Card> 
            <Card.Title> INFORMÁTICA</Card.Title> 
            <Card.Divider /> 
            <Card.Image 
              style={{ padding: 0 }} 
              source={require('../img/info.png')} 
            /> 
            <Text style={{ marginBottom: 10 }}> 
            O Curso Técnico em Informática do CEET Vasco Coutinho pretende formar profissional adaptável às exigências requeridas pelas mudanças aceleradas do mercado de trabalho e às necessidades da evolução tecnológica da informática, que cada vez mais invade todos os setores da sociedade (vida privada, comércio, indústria, serviços, etc.), o Técnico em Informática deverá receber uma formação ampla, constituída por competências gerais e específicas que lhe permitam atuar e acompanhar as transformações da área e do mundo do trabalho, de forma autônoma e crítica.
            </Text> 
            
          </Card> 
          <Card> 
            <Card.Title>REDE DE COMPUTADORES</Card.Title> 
            <Card.Divider /> 
            <Card.Image 
              style={{ padding: 0 }} 
              source={require('../img/redes.png')} 
            /> 
            <Text style={{ marginBottom: 10 }}> 
            O Curso Técnico em Redes de Computadores ofertado pelo CEET Vasco Coutinho foi desenvolvido para formar profissionais capazes de atuar com a operacionalização de concepção, projeto, desenvolvimento, manutenção, gerência, administração e operação confiável e segura em Redes de Computadores Locais e de Longa Distância e dos serviços por elas oferecidos.
            O profissional formado no Curso de Redes de Computadores, poderá seguir as seguintes carreiras: Administrador de Redes, responsável por monitorar, implantar e dar suporte na rede de pequenas e médias empresas, indústrias, órgãos públicos, lojas, escolas e faculdades.
            </Text> 
            
          </Card> 
          <Card> 
            <Card.Title>JOGOS DIGITAIS</Card.Title> 
            <Card.Divider /> 
            <Card.Image 
              style={{ padding: 0 }} 
              source={require('../img/jogos.png')} 
            /> 
            <Text style={{ marginBottom: 10 }}> 
            A oferta do Curso Técnico em Programação de Jogos Digitais pelo CEET Vasco Coutinho tem por objetivo a formação de profissionais técnicos de Nível Médio que possam trabalhar no desenvolvimento de produtos de entretenimento digital interativo em diferentes plataformas, como computadores e dispositivos móveis digitais.
            O profissional formado por este curso encontrará oportunidades de atuação nas áreas de Entretenimento, Propaganda e Marketing, Educação a distância e Simuladores. Há ainda a possibilidade de construção de novas interfaces e formas de interação na internet e em outros sistemas interativos.Como o curso tem como foco a programação de jogos digitais, o profissional também poderá trabalhar em áreas que envolvam programação, seja na produção de softwares ou de sistemas web. O mercado de entretenimento on-line é internacional e demanda profissionais capazes de desenvolver jogos e sistemas interativos cada vez mais lúdicos.
            </Text> 
          </Card> 
        </View> 
      </ScrollView> 
    </SafeAreaView> 
  ); 
};

const styles = StyleSheet.create({ 
  container: { 
    flex: 1,  
    backgroundColor: 'white', 
  }, 
});

export default Cursos;