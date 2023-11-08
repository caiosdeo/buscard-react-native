import React from "react";
import { View, Text, SafeAreaView, StyleSheet } from "react-native";
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { persistor } from './src/redux/store.js';
import { store } from "./src/redux/store.js";
import { Routes } from "./src/routes/index.js";

const App = () => {
  return (
    <React.StrictMode>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <SafeAreaView style={styles.wrapper}>
            <Routes></Routes>
          </SafeAreaView>
        </PersistGate>
      </Provider>
    </React.StrictMode>
  )
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1
  },
});

export default App;