import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Historia from './telas/Historia';
import Cursos from './telas/Cursos';
import TelaPrincipal from './telas/TelaPrincipal';
import Portal from './telas/Portal'; 
import Contato from './telas/Contato'; 

const Stack = createNativeStackNavigator(); 

const App = () => {
 return(
  <NavigationContainer>
    <Stack.Navigator > 
      <Stack.Screen name="Home" component={TelaPrincipal}/>
      <Stack.Screen name="Historia" component={Historia}/>
      <Stack.Screen name="Cursos" component={Cursos}/>    
      <Stack.Screen name="Portal" component={Portal}/>    
      <Stack.Screen name="Contato" component={Contato}/>
    </Stack.Navigator>
  </NavigationContainer>
 );
}

export default App; 


