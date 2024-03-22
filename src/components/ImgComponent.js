import { Image, View } from "react-native";
import { styles } from "../styles/StyleSheet";

export default function Imagem() {
  //imagem principal da ilha
  const mainimagem = {
    uri: "https://cidadaniatuttoaposto.com.br/wp-content/uploads/2023/08/20210324162643-civita-bagnoregio-shutterstock-1477356281.jpg",
  };

  return (
    <View>
      <Image source={mainimagem} style={styles.imgmain} />
    </View>
  );
}
