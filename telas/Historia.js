import {react} from 'react'; 
import { SafeAreaView, View, ScrollView, StyleSheet,Text } from 'react-native'; 
import { Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';
import BarraSuperior from './BarraSuperior';

const App = ({navigation}) => { 
  return ( 
    <SafeAreaView style={styles.container}> 
      <ScrollView> 
        <View style={styles.container}> 
        <BarraSuperior></BarraSuperior>
        <Button title="Home" onPress={() => navigation.navigate('Home')}>Home </Button>
          <Card>
            <Card.Content>
              <Paragraph>O Centro Estadual de Educação Técnica (CEET) Vasco Coutinho é uma instituição de Educação Profissional criada e mantida pelo Governo do Estado do Espírito Santo, com o objetivo de oferecer Educação Profissional, de acordo com o Sistema de Educação Profissional do Estado, em cumprimento aos objetivos estabelecidos pelo Plano Estadual de Educação Profissional do Estado do Espírito Santo – PEP/ES.</Paragraph>
            </Card.Content>
            <Card.Cover source={require('../img/vasco.jpg')} />
            <Card.Content>
            <Title>História</Title>
              <Paragraph>A escola foi fundada em 1931 e sua primeira unidade, denominada “Escolas Reunidas Vasco Coutinho”, era localizada à Rua Dom Jorge de Menezes, no bairro da Prainha de Vila Velha.
              Em 1932 foi iniciada a construção do prédio atual, que ficou pronto um ano depois.
              Desse ano até 2002 o local abrigou uma secretaria escolar que atendia aos antigos alunos. No final do ano, entretanto, a escola fechou as portas e a antiga administração estadual doou o prédio para a Justiça. Neste período, a escola foi depredada e saqueada e chegou a ser invadida.
              Em dezembro de 2012, conforme Lei Estadual nº 9.971, o Vasco Coutinho foi transferido da SEDU para a SECTTI. A partir deste momento, a SECTTI passou a atuar como órgão gestor do CEET, desempenhando as funções de administrar, assessorar, acompanhar, monitorar e prover condições adequadas ao funcionamento da escola.
              No ano de 2013, a Escola passou a ofertar cursos de Educação a Distância (EaD) e tornou-se núcleo desta modalidade de ensino na Educação Profissinonal do Estado.
              </Paragraph>
              <Card.Cover source={require('../img/historia.webp')} />
            </Card.Content>
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

export default App;