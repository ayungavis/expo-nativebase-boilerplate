import { StyleSheet, Text, View } from "react-native";
import { RootStackScreenProps } from "../types/navigation.types";

const RootScreen = ({}: RootStackScreenProps<"Root">): JSX.Element => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Root screen</Text>
      <View style={styles.separator} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
});

export default RootScreen;
