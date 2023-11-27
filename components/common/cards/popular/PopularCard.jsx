import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";

import styles from "./popularcard.style";
import { checkImageURL } from "../../../../utils";
import { images } from "../../../../constants";

const PopularCard = ({ item, handleCardPress }) => {
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => handleCardPress(item)}
    >
      <TouchableOpacity style={styles.logoContainer}>
        <Image
          source={images.university}
          resizeMode="cover"
          style={styles.logoImage}
        />
      </TouchableOpacity>

      <View style={styles.infoContainer}>
        <Text style={styles.universityName} numberOfLines={1}>
          {item.name}
        </Text>
        <Text style={styles.location} numberOfLines={1}>
          {item.countryCode}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default PopularCard;
