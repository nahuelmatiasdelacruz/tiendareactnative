import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Colors from "../Colors.js";

const CategoriesScreen = (props) => {
  const {navigation} = props;
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Pantalla de categorías</Text>
      <Button title="Ver productos" onPress={()=>navigation.navigate("Product")}/>
    </View>
  )
}

export default CategoriesScreen
console.log(Colors);
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.White,
    alignItems: "center",
    justifyContent: "center"
  },
  title: {
    fontFamily: "Raleway-Regular"
  }
})