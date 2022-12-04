import { FlatList } from 'react-native'
import React from 'react'
import ProductItem from '../components/ProductItem';
import { BREADS } from '../data/bread';

const ProductCategoryScreen = ({navigation, route}) => {

  const products = BREADS.filter((bread=>bread.category === route.params.categoryID));

  const handleSelectedCategory = (item) => {
    navigation.navigate("Details",{
      productID: item.id,
      name: item.name
    });
  }
  const renderProductItem = ({item}) => {
    return <ProductItem item={item} onSelected={handleSelectedCategory}/>
  }
  return (
    <FlatList
    data={products}
    keyExtractor={(item)=>item.id}
    renderItem={renderProductItem}
    />
  )
}

export default ProductCategoryScreen;