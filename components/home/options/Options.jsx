import { View, Text, FlatList, Image, TouchableOpacity } from "react-native";

import styles from "./options.style";
import { COLORS, icons, images, SIZES } from "../../../constants";

const options = [
  "Explore Universities",
  "Explore Course",
  "Get Consultation",
  "Sample Documents",
];

const Options = () => {
  return (
    <View style={styles.container}>
      <FlatList
        data={options}
        renderItem={({ item }, i) => (
          <TouchableOpacity style={styles.optionsCard(i)}>
            <View style={styles.optionsCardWrapper}>
              <Image
                source={icons.search}
                resizeMode="contain"
                style={styles.optionsIcon}
              />
              <Text style={styles.optionsCardTitle}>{item}</Text>
            </View>
          </TouchableOpacity>
        )}
        keyExtractor={(item) => item}
        numColumns={2}
        contentContainerStyle={{ columnGap: 20 }}
        horizontal={false}
      />
    </View>
  );
};
export default Options;
