import react, {useState}  from 'react'; 
export {StatusBar} from 'expo-status-bar'; 
import {View,Button,StyleSheet, StatusBar,Image,TextInput,Text,TouchableOpacity} from "react-native";



const Contato = () => {

  const [nome,setNome] = useState(''); 
  const [email,setEmail] = useState(''); 
  const [telefone,setTelefone] = useState(''); 
  const [duvida,setDuvida] = useState(''); 
 
  const cadastro = () =>{
    alert(nome);
    alert(email);
    alert(duvida);
  }
return(
  <View style={styles.container}>
     <StatusBar hidden/> 
  
     <Image style={styles.logo}
        source={require('../img/logo.png')}/>

        <TextInput placeholder="Seu nome" style={styles.textInput} onChangeText={text=>setNome(text)} />

        <TextInput placeholder="Seu e-mail" style={styles.textInput} onChangeText={text=>setEmail(text)} />

        <TextInput placeholder="(99) 99999-9999" style={styles.textInput} onChangeText={text=>setNome(text)} />

        <TextInput placeholder="Sua dúvida, reclamação, sugestão..." style={styles.textInput} onChangeText={text=>setDuvida(text)} />

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
},
textInput: {
  width: '100%',
  height: 40,
  backgroundColor: '#E6E6E6',
borderRadius: 20,
paddingLeft: 10,
marginBottom: 10
},
btnEnviar:{
width: '100%',
height: 40,
borderRadius: 20,
justifyContent: 'center',
backgroundColor: '#0431B4'
},
});

  export default Contato; 