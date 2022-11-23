import {NavigationContainer} from "@react-navigation/native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import ProductCategoryScreen from "../screens/ProductCategoryScreen";
import ProductDetailScreen from "../screens/ProductDetailScreen";
import CategoriesScreen from "../screens/CategoriesScreen";

const Stack = createNativeStackNavigator()

export default ShopNavigator = ()=>{
    return(
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Categories" component={CategoriesScreen}/>
                <Stack.Screen name="Product" component={ProductCategoryScreen}/>
                <Stack.Screen name="Details" component={ProductDetailScreen}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}