import { StyleSheet } from "react-native";

const sizes = {
  containerWidth: 10,
  itemHeight: 15,
  itemFontSize: 10,
};

export const styles = StyleSheet.create({
  letterIndexContainer: {
      backgroundColor: 'white',
      borderRadius: 30,
      padding: 5,
      width: 'auto',
      height: 'auto',
      position: "absolute",
      top: '50%',
      right: 0,
  },
  letterIndexList: {
      alignItems: "center",
      justifyContent: "center",
      height: "100%",
  },
  letterIndexItem: {
      width: sizes.containerWidth,
      height: sizes.itemHeight,
      alignItems: "center",
      justifyContent: "center",
  },
  letterIndexLabel: {
      fontSize: sizes.itemFontSize,
      fontWeight: "bold",
      color: "grey",
  },
});





