import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { useSelector } from 'react-redux';
import Card from "./Card";

const Recarga = () => {

  const { saldo } = useSelector( (state) => state.cartao);
  const { passSimplesSem, passDuplasSem } = useSelector( (state) => state.config);

  let recarga = 0;

  let qtdPassSimples = 4 * passSimplesSem;
  let qtdPassDuplas = 4 * passDuplasSem;

  let previsaoRecarga = (qtdPassSimples * 3.75) + (qtdPassDuplas * 5.63);

  recarga = previsaoRecarga - saldo;

  return (
    <View style={styles.page}>
      <View style={styles.content}>
        <Card style={styles.saldoWrapper}>
          <Text style={styles.saldo}>Saldo</Text>
          <Text style={styles.saldoValue}>R${Number(saldo).toFixed(2).replace(".",",")}</Text>
        </Card>
        <Card>
          <View style={styles.passagensWrapper}>
            <Text style={styles.passagens}>Passagens simples no mês:</Text>
            <Text style={styles.qtdPassagens}>{qtdPassSimples}</Text>
          </View>
          <View style={styles.passagensWrapper}>
            <Text style={styles.passagens}>Passagens duplas no mês:</Text>
            <Text style={styles.qtdPassagens}>{qtdPassDuplas}</Text>
          </View>  
          <View style={styles.passagensWrapper}>
            <Text style={styles.saldo}>Recarga</Text>
            <Text style={styles.saldoValue}>R${
                (recarga > 0) ? recarga.toFixed(2).replace(".",",") : '0,00'
              }
            </Text>
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
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },
  saldo: {
    fontSize: 24,
    paddingBottom: 5,
  },
  saldoValue : {
    fontSize: 32
  },
  saldoWrapper: {
    // backgroundColor:'purple',
    flexDirection: "column",
    paddingLeft: 45,
    margin: 15,
  },
  passagens: {
    fontSize: 18,
  },
  qtdPassagens: {
    fontSize: 26,
  },
  passagensWrapper: {
    padding: 10,
    margin: 15,
    flexDirection: "column",
    justifyContent: "space-between"
  },
});

export default Recarga;