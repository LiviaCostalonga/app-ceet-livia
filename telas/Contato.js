import React, {useState}  from 'react'; 
export {StatusBar} from 'expo-status-bar'; 
import {View,Button,StyleSheet, StatusBar,Image,TextInput,Text,TouchableOpacity} from "react-native";
import { Picker } from "@react-native-picker/picker";
import { RadioButton } from 'react-native-paper';


const Contato = () => {

  const [nome,setNome] = useState(''); 
  const [email,setEmail] = useState(''); 
  const [telefone,setTelefone] = useState(''); 
  const [texto,setTexto] = useState(''); 
  const [checked, setChecked] = React.useState('Apple'); //escolha inicial
  const cadastro = () =>{
    alert(nome);
    alert(email);
    alert(telefone); 
    alert(texto);
  }
return(
  <View style={styles.container}>
     <StatusBar hidden/> 
  
     <Image style={styles.logo}
        source={require('../img/logo.png')}/>

        <TextInput placeholder="Seu nome" style={styles.textInput} onChangeText={text=>setNome(text)} />

        <TextInput placeholder="Seu e-mail" style={styles.textInput} onChangeText={text=>setEmail(text)} />

        <TextInput placeholder="(99) 99999-9999" style={styles.textInput} onChangeText={text=>setTelefone(text)} />

      <RadioButton
        value="Duvida" 
        status={ checked === 'Duvida' ? 'checked' : 'unchecked' } //if the value of checked is Apple, then select this button
        onPress={() => setChecked('Duvida')} //when pressed, set the value of the checked Hook to 'Apple' 
      
      />
      <RadioButton
        value="Sugestão"
        status={ checked === 'Sugestão' ? 'checked' : 'unchecked' }
        onPress={() => setChecked('Sugestão')} style={styles.radio}
      />
      <RadioButton
        value="Reclamação"
        status={ checked === 'Reclamação' ? 'checked' : 'unchecked' }
        onPress={() => setChecked('Reclamação')} style={styles.radio}
      />
      <Text> {checked}</Text>
        <TextInput placeholder="Sua dúvida, reclamação, sugestão..." style={styles.textInputGrande} onChangeText={text=>setTexto(text)} />

        <TouchableOpacity style={styles.btnEnviar} onPress={()=>cadastro()}>
          <Text style={{color:'white',textAlign:'center'}}>ENVIAR</Text>
        </TouchableOpacity>
  </View>
);
}

const styles = StyleSheet.create({
container: {
  flex: 1,
  backgroundColor: '#fff',
  alignItems: 'center',
  justifyContent: 'center',
  padding: 20,
  marginBottom:'55%'
},
textInput: {
  width: '100%',
  height: 40,
  backgroundColor: '#E6E6E6',
borderRadius: 20,
paddingLeft: 10,
marginBottom: 10,

},
textInputGrande: {
  width: '100%',
  height: 90,
  backgroundColor: '#E6E6E6',
borderRadius: 20,
paddingLeft: 10,
marginBottom: 10,
},
btnEnviar:{
width: '100%',
height: 40,
borderRadius: 20,
justifyContent: 'center',
backgroundColor: '#0431B4'
},
logo:{
  marginBottom:30
},
});

  export default Contato; 