import react, {useState}  from 'react'; 
import {View,Text,Button,StyleSheet} from "react-native";

const Contador = () =>{
    const [contador, setContador] = useState(1) // USESTATE É UM HOOK RESPONSAVEL POR MODIFICAR E MONITORAR VARIAVEIS
                                                //O que sera manipulado é o setContador
    return(
      <View style={styles.container}>
        <Text >
          {contador}
        </Text>
        <Button onPress={()=>{setContador(contador+1)}} title="Me clique" />
      </View>
    );
  }

  const styles = StyleSheet.create({ 
    container: { 
     flex: 1, //pega em toda tela 
     justifyContent: 'center', //centraliza na horizontal
     alignItems: 'center' //centraliza na vertical
    }, 
  });

  export default Contador; 