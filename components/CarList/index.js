import { View, FlatList, Dimensions } from "react-native";
import React from "react";
import CarItem from "../CarItem";

import cars from "./cars";
import styles from "./styles";

export default function CarList(props) {
  return (
    <View style={styles.container}>
      <FlatList 
        data={cars}
        renderItem={({ item }) => <CarItem car={item} />}
        showsVerticalScrollIndicator={false}
        snapToAlignment={'start'}
        decelerationRate={"fast"}
        snapToInterval={Dimensions.get('window').height}
       />

    </View>
  );
}
