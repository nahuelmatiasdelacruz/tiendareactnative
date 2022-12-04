import { StyleSheet, FlatList } from 'react-native'
import React from 'react'
import Colors from "../Colors.js";
import { CATEGORIES } from '../data/categories.js';
import GridItem from '../components/GridItem.js';

const CategoriesScreen = (props) => {
  const {navigation} = props;
  const handleSelectedCategory = (item) => {
    navigation.navigate("Product",{
      categoryID: item.id,
      name: item.title
    });
  }
  const renderGridItem = ({item}) => {
    return <GridItem item={item} onSelected={handleSelectedCategory}/>
  }
  return (
    <FlatList
    data={CATEGORIES}
    keyExtractor={(item)=>item.id}
    renderItem={renderGridItem}
    numColumns={2}
    />
  )
}

export default CategoriesScreen
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