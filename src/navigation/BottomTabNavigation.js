import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import IonIcons from "@expo/vector-icons/Ionicons";
import CartNavigation from "./CartNavigation";
import ShopNavigation from "./ShopNavigation";

const BottomTabs = createBottomTabNavigator();

export default BottomTabNavigation = () =>{
    return(
        <NavigationContainer>
            <BottomTabs.Navigator screenOptions={{headerShown: false, tabBarShowLabel:false,tabBarStyle: styles.tabBar}}>
                <BottomTabs.Screen name="ShopTab" component={ShopNavigation} options={{tabBarIcon: ({focus})=>
                    <View style={styles.item}>
                        <IonIcons name="home" size={20} color="black"/>
                        <Text>Tienda</Text>
                    </View>
                }} />
                <BottomTabs.Screen name="CartTab" component={CartNavigation} options={{tabBarIcon: ({focus})=>
                    <View style={styles.item}>
                        <IonIcons name="cart" size={20} color="black"/>
                        <Text>Carrito</Text>
                    </View>
                }} />
            </BottomTabs.Navigator>
        </NavigationContainer>
    )
}

const styles = StyleSheet.create({
    tabBar: {
        shadowColor: "#7F5DF0",
        shadowOfset: {width: 0, height: 0},
        shadowOpacity: 0.5,
        shadowRadius: 0.5,
        elevation: 5,
        position: "absolute",
        bottom: 25,
        left: 20,
        right: 20,
        borderRadius: 25,
        height: 90
    },
    item: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    }
});