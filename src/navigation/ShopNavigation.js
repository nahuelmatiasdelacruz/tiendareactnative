import {createNativeStackNavigator} from "@react-navigation/native-stack";
import ProductCategoryScreen from "../screens/ProductCategoryScreen";
import ProductDetailScreen from "../screens/ProductDetailScreen";
import CategoriesScreen from "../screens/CategoriesScreen";
import {COLORS} from "../constants/Colors";

const Stack = createNativeStackNavigator()

export default ShopNavigation = ()=>{
    return(
        <Stack.Navigator initialRouteName="Categories" screenOptions={{
            headerStyle: {backgroundColor: COLORS.primary},
            headerTintColor: COLORS.secondary,
            headerTitleStyle: {
                fontWeight: "bold"
            }
        }}>
            <Stack.Screen name="Categories" component={CategoriesScreen} options={{title: "Mi panadería"}}/>
            <Stack.Screen name="Product" component={ProductCategoryScreen} options={({route})=>({title: route.params.name})}/>
            <Stack.Screen name="Details" component={ProductDetailScreen} options={({route})=>({title: route.params.name})} />
        </Stack.Navigator>
    )
}