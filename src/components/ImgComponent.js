import { Image, View } from "react-native-elements";
import { styles } from "../styles/StyleSheet";

export default function Imagem() {
  //imagem principal da ilha
  const mainimagem = {
    uri: "https://cidadaniatuttoaposto.com.br/wp-content/uploads/2023/08/20210324162643-civita-bagnoregio-shutterstock-1477356281.jpg",
  };
  //imagem menor de dentro da cidade
  const insideimagem = {
    uri: "https://media.cnn.com/api/v1/images/stellar/prod/191216171921-02-civita-bagnoregio-italy-copy.jpg?q=w_2409,h_1355,x_0,y_0,c_fill/h_618",
  };

  return (
    <View styles={sty}>
      <Image source={mainimagem} />
      <Image source={insideimagem} />
    </View>
  );
}

// style={styles.imagepage}
