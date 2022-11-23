import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Colors from '../Colors'

const ProductDetailsScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Detalle de producto</Text>
    </View>
  )
}

export default ProductDetailsScreen

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