import * as React from "react";
import { View, SafeAreaView, Image, Text, FlatList } from "react-native";
import { Feather, MaterialCommunityIcons } from "react-native-vector-icons";
import color from "../../assets/colors/colors";
import styles from "./styles";
import categoriesData from "../../assets/data/categoriesData";
import popularData from "../../assets/data/popularData";
import * as Font from "expo-font";
import colors from "../../assets/colors/colors";

Feather.loadFont();

let customFont = {
  "Montserrat-Bold": require("../../assets/fonts/Montserrat-Bold.ttf"),
  "Montserrat-Medium": require("../../assets/fonts/Montserrat-Medium.ttf"),
  "Montserrat-Regular": require("../../assets/fonts/Montserrat-Regular.ttf"),
};

export default function Home() {
  const _loadFontsAsync = async () => {
    await Font.loadAsync(customFont);
  };

  React.useEffect(() => {
    _loadFontsAsync();
  }, []);

  const renderCategoryItem = ({ item }) => {
    return (
      <View
        style={[
          styles.categoryItemWrapper,
          {
            backgroundColor: item.selected ? color.primary : colors.white,
            marginLeft: item.id == 1 ? 20 : 0,
          },
        ]}
      >
        <Image source={item.image} style={styles.categoryItemImage} />
        <Text style={styles.categoryItemTitle}>{item.title}</Text>
        <View
          style={[
            styles.categorySelectWrapper,
            {
              backgroundColor: item.selected ? colors.white : colors.secondary,
            },
          ]}
        >
          <Feather
            name="chevron-right"
            size={8}
            style={styles.categorySelectIcon}
            color={item.selected ? colors.black : colors.white}
          />
        </View>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <SafeAreaView>
        <View style={styles.headerWrapper}>
          <Image
            source={require("../../assets/images/profile.png")}
            style={styles.profileImage}
          />
          <Feather name="menu" size={24} color={color.textDark} />
        </View>
      </SafeAreaView>

      <View style={styles.titlesWrapper}>
        <Text style={styles.titlesSubtitle}>Food</Text>
        <Text style={styles.titlesTitle}>Delivery</Text>
      </View>

      <View style={styles.searchWrapper}>
        <Feather name="search" size={16} color={color.textDark} />
        <View style={styles.search}>
          <Text style={styles.searchText}>Search</Text>
        </View>
      </View>

      <View style={styles.categoriesWrapper}>
        <Text style={styles.categoriesTitle}>Categories</Text>
        <View style={styles.categoriesListWrapper}>
          <FlatList
            data={categoriesData}
            renderItem={renderCategoryItem}
            keyExtractor={(item) => item.id}
            horizontal={true}
          />
        </View>
      </View>

      <View style={styles.popularWrapper}>
        <Text style={styles.popularTitle}>Popular</Text>
        {popularData.map((item) => (
          <View style={[styles.popularCardWrapper,
          {
            marginTop: item.id == 1 ? 10 : 20,
          }]}>
            <View>
              <View>
                <View style={styles.popularTopWrapper}>
                  <MaterialCommunityIcons
                    name="crown"
                    size={12}
                    color={colors.primary}
                  />
                  <Text style={styles.popularTopText}>top of the week</Text>
                </View>
                <View styles={styles.popularTitlesWrapper}>
                  <Text styles={styles.popularTitlesTiles}>{item.title}</Text>
                  <Text styles={styles.popularTitlesWeight}>Weight {item.weight}</Text>
                </View>
              </View>
            </View>
          </View>
        ))}
      </View>
    </View>
  );
}
