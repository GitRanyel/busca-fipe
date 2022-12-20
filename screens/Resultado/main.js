import React, { useState, useEffect } from 'react';
import { Alert, ActivityIndicator, View } from 'react-native';
import { Botao, TextoBotao, Texto } from '../Inicial/style';
import { SubTexto, styles } from './style';


const Resultado = (navigate) => {
  const placaInformada = navigate.route.params.placa
  const [infos, setInfos] = useState(null);
  const [loading, setLoading] = useState(false);


  const fetchData = () => {
    setLoading(true)
    fetch('https://placa-fipe.apibrasil.com.br/placa/consulta', {
      method: 'post',
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        placa: placaInformada
      })
    })
      .then((res) => res.json())
      .then((results) => {
        setInfos(results)
        setLoading(false)

      })
      .catch((err) => {
        Alert.alert('Algo deu errado!');
        setLoading(false)

      });

  };

  useEffect(() => {
    fetchData();
  }, [placaInformada]);

  return (
    <>
      {loading && (
        <View style={styles.loadingScreen}>
          <ActivityIndicator color="white" size="large"></ActivityIndicator>
          <SubTexto>Isso pode demorar um pouco!</SubTexto>
        </View>
      )}
      <View style={styles.root}>
        {infos != null ? (

          <>
            <SubTexto>Modelo: {infos.Modelo}</SubTexto>
            <SubTexto>Marca: {infos.Marca}</SubTexto>
            {infos.TipoVeiculo == 1 ? (
              <SubTexto>Tipo: Carro</SubTexto>
            ) : (
              <SubTexto>Tipo: Moto</SubTexto>
            )}
            <SubTexto>Valor: {infos.Valor}</SubTexto>
            <SubTexto>AnoModelo: {infos.AnoModelo}</SubTexto>
            <SubTexto>Combustivel: {infos.Combustivel}</SubTexto>
            <SubTexto>Valor IPVA: {infos.ipva}</SubTexto>
            <SubTexto>Cilindradas: {infos.cilindradas}</SubTexto>
            <SubTexto>CodigoFipe: {infos.CodigoFipe}</SubTexto>
            <SubTexto>Cor: {infos.cor}</SubTexto>
            <SubTexto>Municipio: {infos.municipio}</SubTexto>
            <SubTexto>UF: {infos.uf}</SubTexto>
          </>
        ) : (
          <Texto>Nada foi encontrado!</Texto>
        )}
        <Botao onPress={() => {
          navigate.navigation.navigate('Procura')
        }}><TextoBotao>Voltar</TextoBotao></Botao>
      </View>
    </>
  );
};

/* me passa Geraldo 😭*/

export default Resultado;

