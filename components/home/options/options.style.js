import { Dimensions, StyleSheet } from "react-native";

import { COLORS, FONT, SIZES } from "../../../constants";

const cardWidth = (Dimensions.get("window").width - SIZES.medium * 3) / 2;

const styles = StyleSheet.create({
  container: {
    marginTop: SIZES.small,
    width: "100%",
  },
  optionsCard: (i) => ({
    marginTop: SIZES.small,
    marginRight: i % 2 !== 0 ? SIZES.medium : 0,
    width: cardWidth,
    height: 80,
    backgroundColor: COLORS.white,
    borderRadius: SIZES.small,
    shadowOpacity: 0.1,
    justifyContent: "center",
    elevation: 1,
    marginBottom: SIZES.small,
  }),
  optionsCardWrapper: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    padding: SIZES.xSmall,
  },
  optionsCardTitle: {
    flex: 2,
    fontWeight: "bold",
    color: COLORS.secondary,
  },
  optionsIcon: {
    flex: 1,
    width: 30,
    height: 30,
    marginRight: SIZES.xSmall,
  },
});

export default styles;
