import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, ImageBackground } from "react-native";
import CarItem from './components/carItem'

export default function App() {
  return (
    <View style={styles.container}>
      
      <CarItem 
        name={"Model S"}
        tagline={"Starting at $69,420"}
        image={require('./assets/images/ModelS.jpeg')}
      />

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },


});
