import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const App = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        Hamza
      </Text>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ff0000",
    justifyContent: 'center',
    alignItems: "center"
  },
  text: {
    color: 'white',
    fontSize: 50,
  }
})
export default App;