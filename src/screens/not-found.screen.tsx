import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { RootStackScreenProps } from "../types/navigation";

const NotFoundScreen = ({ navigation }: RootStackScreenProps<"NotFound">): JSX.Element => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Not found screen</Text>
      <View style={styles.separator} />
      <TouchableOpacity onPress={() => navigation.replace("Root")} style={styles.link}>
        <Text style={styles.linkText}>Go to home screen!</Text>
      </TouchableOpacity>
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
  link: {
    marginTop: 15,
    paddingVertical: 15,
  },
  linkText: {
    fontSize: 14,
    color: "#2e78b7",
  },
});

export default NotFoundScreen;
