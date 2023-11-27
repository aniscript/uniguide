import { View, Text, Image } from "react-native";

import styles from "./banner.style";
import { TouchableOpacity } from "react-native-gesture-handler";
import { images } from "../../../constants";

const Banner = () => {
  return (
    <View style={styles.bannerWrapper}>
      <View style={styles.bannerInnerWrapper}>
        <View style={styles.bannerContentWrapper}>
          <Text style={styles.bannerTitle}>Top University in the UK</Text>
          <Text style={styles.bannerDescription}>
            Explore top ranking university and find your destination.{" "}
          </Text>
          <TouchableOpacity style={styles.bannerButton}>
            <Text style={styles.bannerButtonText}>Explore</Text>
          </TouchableOpacity>
        </View>
        <Image
          source={images.banner}
          resizeMode="contain"
          style={styles.bannerImage}
        />
      </View>
    </View>
  );
};

export default Banner;
