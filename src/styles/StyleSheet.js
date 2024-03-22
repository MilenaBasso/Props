import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },

  name: {
    fontSize: 30,
  },

  adress: {
    fontSize: 25,
    color: "#add8e6",
  },

  description: {
    fontSize: 20,
    color: "#a9a9a9",
  },

  imgmain: {
    width: 1000,
    height: 1000,
    resizeMode: "cover",
    alignContent: "center",
    justifyContent: "center",
  },

  imgsmall: {
    width: 400,
    height: 400,
  },
});
