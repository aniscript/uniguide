import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  FlatList,
} from "react-native";

import { useRouter } from "expo-router";

import styles from "./welcome.style";
import { icons, SIZES } from "../../../constants";

const levels = ["Undergraduate", "Postgraduate", "Doctorate"];

const Welcome = ({ searchTerm, setSearchTerm, handleClick }) => {
  const router = useRouter();
  const [activeLevel, setActiveLevel] = useState("Undergraduate");
  return (
    <View>
      <View style={styles.container}>
        <Text style={styles.userName}>Hello Anish</Text>
        <Text style={styles.welcomeMessage}>Find your perfect university.</Text>
      </View>
      <View style={styles.searchContainer}>
        <View style={styles.searchWrapper}>
          <TextInput
            style={styles.searchInput}
            value={searchTerm}
            onChangeText={(text) => setSearchTerm(text)}
            placeholder="Search university or courses."
          />
        </View>
        <TouchableOpacity style={styles.searchBtn} onPress={handleClick}>
          <Image
            source={icons.search}
            resizeMode="contain"
            style={styles.searchBtnImage}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.tabsContainer}>
        <FlatList
          data={levels}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={styles.tab(activeLevel, item)}
              onPress={() => {
                setActiveLevel(item);
                router.push(`/search/${item}`);
              }}
            >
              <Text style={styles.tabText(activeLevel, item)}>{item}</Text>
            </TouchableOpacity>
          )}
          keyExtractor={(item) => item}
          contentContainerStyle={{ columnGap: SIZES.small }}
          horizontal
        />
      </View>
    </View>
  );
};

export default Welcome;
