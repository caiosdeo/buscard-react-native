import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Button from "./Button";
import { useDispatch, useSelector } from 'react-redux';
import { update_cartao } from '../redux/cartaoReducer';
import Card from "./Card";

const Cartao = () => {

  const { saldo, passSimples, passDuplas } = useSelector( (state) => state.cartao);
  const dispatch = useDispatch();

  return (
    <View style={styles.page}>
      {/* <Text style={styles.title}>Cartao</Text> */}
      <View style={styles.content}>
        <Card style={styles.saldoWrapper}>
          <Text style={styles.saldo}>Saldo</Text>
          <Text style={styles.saldoValue}>R${Number(saldo).toFixed(2).replace(".",",")}</Text>
        </Card>
        <Card style={styles.passagensCard}>
          <Text style={styles.passagens}>Passagens simples:</Text>
          <View style={styles.passagensWrapper}>
            <Text style={styles.qtdPassagens}>{passSimples}</Text>
            <Button title="-1" onPress={() => dispatch(update_cartao("passSimples")) }/>
          </View>
          <Text style={styles.passagens}>Passagens duplas:</Text>
          <View style={styles.passagensWrapper}>
            <Text style={styles.qtdPassagens}>{passDuplas}</Text>
            <Button 
              style={styles.btn}
              title="-1" onPress={() => dispatch(update_cartao("passDuplas")) }/>
          </View>
        </Card>      
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  page: {
    flex: 1,
    alignItems: 'center'
  },
  title: {
    fontSize: 40
  },
  content: {
    backgroundColor: '#dddddd',
    flex: 1,
    flexDirection: 'column',
    justifyContent: "center",
    alignItems: 'center',
    width: '100%',
  },
  saldo: {
    color: 'white',
    fontSize: 20,
    paddingBottom: 5,
    marginLeft:10
  },
  saldoValue : {
    color: 'white',
    fontSize: 40,
    marginVertical: 20,
    paddingLeft: 100,
  },
  saldoWrapper: {
    backgroundColor: '#0066ff',
    flexDirection: "column",
    paddingLeft: 10,
    paddingTop: 30,
    margin: 15,
    borderRadius: 10,
    width: '80%',
    height: '20%',
  },
  passagens: {
    fontSize: 20,
  },
  qtdPassagens: {
    fontSize: 32,
    marginHorizontal: 50
  },
  passagensCard: {
    height: '40%',
    marginVertical: 10,
    justifyContent: "space-between"
  },
  passagensWrapper: {
    // backgroundColor: 'cyan',
    padding: 10,
    margin: 10,
    flexDirection: "row",
    justifyContent: "space-evenly"
  },
});

export default Cartao;