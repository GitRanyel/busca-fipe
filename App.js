
import React from 'react';
import { StyleSheet, View } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Inicial from './screens/Inicial/main';
import Procura from './screens/Procura/main';
import Resultado from './screens/Resultado/main';


const Stack = createStackNavigator();
const screenOptions = {
  headerShown: false
}
  
function App() {
  return (
    <View style={styles.root}>
        <Stack.Navigator initialRouteName='Inicial'>
            <Stack.Screen name="Inicial" component={Inicial} options={screenOptions} />                      
            <Stack.Screen name="Procura" component={Procura} options={screenOptions} />                      
            <Stack.Screen name="Resultado" component={Resultado} options={screenOptions} />                                                     
        </Stack.Navigator>       
    </View>
  );
}

export default () => {
    return (
        <NavigationContainer>
          <App />
        </NavigationContainer>
    );
};


const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: '#58BB84',
  },
});
