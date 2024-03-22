import { Text } from "react-native";

export default function Name({ local, adress }) {
  return <Text style={adress}>{local}</Text>;
}

// <View styles={styles.container}>
// <Text styles={styles.adress}>La Civita di Bagnoregio é uma vila periférica da comuna italiana de Bagnoregio, na província de Viterbo, no centro da Itália.</Text>
// </View>