import { StyleSheet, Button, Text, View } from 'react-native'
import React from 'react'
import Colors from '../Colors';

const ProductCategoryScreen = (props) => {
  const {navigation} = props;
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Pantalla de categoría de productos</Text>
      <Button title="Go to Details" onPress={()=>navigation.navigate("Details")}/>
    </View>
  )
}

export default ProductCategoryScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.White,
    alignItems: "center",
    justifyContent: "center"
  },
  title: {
    fontFamily: "Raleway-Regular",
  }
})