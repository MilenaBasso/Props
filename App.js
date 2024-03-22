import { TextInput, Text, View } from "react-native";
import TxtComponent from "./src/components/TxtComponent";
import { styles } from "./src/styles/StyleSheet";
import BtnComponent from "./src/components/BtnComponent";

export default function App() {
  return (
    <View style={styles.container}>
      <TxtComponent texto="Hiii"/>
      {/* 3 textos da home */}
      <TxtComponent>
        <Text style={styles.texts}>Hiii!! This is my page.</Text>
      </TxtComponent>
      <TxtComponent>
        <Text style={styles.texts}>
          We can be friends if u want to, My name is Boo
        </Text>
      </TxtComponent>
      <TxtComponent>
        <Text style={styles.texts}>How are u doing?.</Text>
      </TxtComponent>

      <TxtComponent>
        <TextInput placeholder="What's your Name?" style={styles.inputname} />
      </TxtComponent>

      {/* chamando a pg de botoes */}
      <TxtComponent>
        <BtnComponent />
      </TxtComponent>
    </View>
  );
}
