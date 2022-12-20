import React, { useState } from 'react';
import { Alert, View } from 'react-native';
import { Botao, TextoBotao, Texto } from '../Inicial/style';
import { Entrada, styles } from './style';


const Procura = (navigate) => {
  const [placa, setPlaca] = useState('');

  return (
    <View style={styles.root}>

      <Texto>Informe a placa a ser verificada{'\n'}Ex: xxx9999</Texto>
      <Entrada
        placeholder="Placa" placeholderTextColor="#2e2e2e"
        value={placa}
        onChangeText={setPlaca}
      />

      <Botao onPress={() => {
        if (placa.length > 0) {
          navigate.navigation.navigate('Resultado', { placa })
        } else {
          Alert.alert('Você precisa digitar uma placa!')
        }
      }}><TextoBotao>Verificar placa</TextoBotao></Botao>


    </View>
  );
};

export default Procura;
