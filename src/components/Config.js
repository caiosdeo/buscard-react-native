import React from "react";
import { View, Text, StyleSheet, TextInput, Alert } from "react-native";
import Button from "./Button";
import Card from "./Card";
import { useDispatch, useSelector } from 'react-redux';
import { add_config } from '../redux/configReducer';
import { add_saldo } from '../redux/cartaoReducer';

const Config = () => {

  const { saldo, passSimplesSem, passDuplasSem } = useSelector( (state) => state.config);

  let configState = {
    saldo: saldo,
    passSimplesSem: passSimplesSem,
    passDuplasSem: passDuplasSem
  };

  const dispatch = useDispatch();

  const createAlert = (title, msg) =>
    Alert.alert(title, msg, [
      {text: 'OK', onPress: () => console.log('OK Pressed')},
    ]);

  const handleChange = (e) => {
    configState[e.id] = e.value.replace(",",".");
  }

  const updateSaldo = () => {
    try {
      dispatch(add_saldo(configState.saldo));
      createAlert('Saldo atualizado', 'O saldo do cartão foi atualizado com sucesso e pode ser verificado na aba Cartão.')
    } catch (e) {
      console.log("Error: " + e)
    }
  };

  const saveConfig = () => {
    try {
      dispatch(add_config(configState));
      createAlert('Configurações salvas', 'Sua configuração de passagens foi salva e será utilizada para calcular a recarga mensal.')
    } catch (e) {
      console.log("Error: " + e)
    }
  };

  return (
    <View style={styles.page}>
      <View style={styles.content}>
        <Card>
          <Text style={styles.title}>Atualizar saldo</Text>
          <TextInput 
            style={styles.input} 
            selectionColor={'black'}
            placeholder="e.g. 63.80" 
            placeholderTextColor={'grey'} 
            inputMode="decimal"
            onChangeText={value => handleChange({'id': 'saldo', value})}
            />
          <Button title="Salvar" onPress={updateSaldo}/>
        </Card>
      {/* </View> */}
      {/* <View style={styles.content}> */}
        <Card>
          <Text style={styles.title}>Configuração</Text>
          <Text style={styles.passagens}>Passagens simples por semana</Text> 
          <TextInput 
            style={styles.input} 
            selectionColor={'black'}
            placeholder="2" 
            placeholderTextColor={'grey'} 
            inputMode="numeric"
            onChangeText={value => handleChange({'id': 'passSimplesSem', value})}
          />
          <Text style={styles.passagens}>Passagens duplas por semana</Text> 
          <TextInput 
            style={styles.input} 
            selectionColor={'black'}
            placeholder="10" 
            placeholderTextColor={'grey'} 
            inputMode="numeric"
            onChangeText={value => handleChange({'id': 'passDuplasSem', value})}
          />
          <Button title="Salvar" onPress={saveConfig}/>
        </Card>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  page: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  title: {
    fontSize: 32
  },
  content: {
    backgroundColor: '#dddddd',
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    width: '100%',
  },
  passagens: {
    fontSize: 18,
  },
  input: {
    borderBottomWidth: 1,
    height: 42,
    padding: 12,
    margin: 10,
    backgroundColor: 'white',
  },
});

export default Config;