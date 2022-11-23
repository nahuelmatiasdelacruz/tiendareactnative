import { StyleSheet, Text, View } from 'react-native';
import ShopNavigation from './src/navigation/ShopNavigation';
import { useFonts } from 'expo-font';

export default function App() {
  const [fontsLoaded] = useFonts({
    "Raleway-Regular": require("./src/assets/fonts/Raleway-Regular.ttf")
  });
  if(!fontsLoaded){
    return null;
  }
  return <ShopNavigation/>
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
