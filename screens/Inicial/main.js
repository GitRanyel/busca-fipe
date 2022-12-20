import React from 'react';
import { View } from 'react-native';
import { Botao, TextoBotao, Texto, styles } from './style';


const Inicial = (navigate) => {

  return (
    <View style={styles.root}>

      <Texto>Olá, motorista.</Texto>
      <Texto>Bem vindo ao Busca FIPE, aqui você conseguirá pesquisar uma placa e ver informações referente ao veículo que consta na placa informada!</Texto>
      <Botao onPress={() => { navigate.navigation.navigate('Procura') }}><TextoBotao>Pesquisar Placa</TextoBotao></Botao>

    </View>
  );
};

export default Inicial;


