import { View } from "react-native";
import { styles } from "./src/styles/StyleSheet";
import TLComponent from "./src/components/TouristLocationComponent";

export default function App() {
  return (
    <View style={styles.container}>
      <TLComponent />
    </View>
  );
}
