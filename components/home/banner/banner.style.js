import { StyleSheet } from "react-native";

import { COLORS, FONT, SIZES } from "../../../constants";

const styles = StyleSheet.create({
  container: {
    width: "100%",
  },
  bannerWrapper: {
    marginTop: SIZES.xLarge,
    backgroundColor: COLORS.gray3,
    padding: SIZES.small,
    borderRadius: SIZES.small,
  },
  bannerInnerWrapper: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  bannerContentWrapper: { flex: 2 },
  bannerTitle: {
    fontFamily: FONT.bold,
    fontWeight: "bold",
    color: COLORS.primary,
    marginBottom: SIZES.small,
  },
  bannerDescription: {
    fontFamily: FONT.regular,
    color: COLORS.gray,
  },
  bannerImage: {
    flex: 1,
    width: "100%",
    height: "100%",
  },
  bannerButton: {
    marginTop: SIZES.medium,

    height: 48,
    borderRadius: SIZES.small,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: COLORS.primary,
  },
  bannerButtonText: {
    fontWeight: "bold",
    color: COLORS.lightWhite,
  },
});

export default styles;
