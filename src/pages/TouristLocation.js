import { View } from "react-native";
import { styles } from "../styles/StyleSheet";
import Name from "../components/NameComponent";
import Imagem from "../components/ImgComponent";
import Description from "../components/DescriptionComponent";

export default function TLComponent() {
  return (
    <View styles={styles.container}>
      <Name name={styles.name} nome="Civita di Bagnoregi" />
      <Imagem />
      <Description
        description={styles.description}
        descrição="A Civita di Bagnoregio é uma aldeia rústica na província de Viterbo, um vilarejo que fica em uma colina de tufo constantemente ameaçada por deslizamentos de terra e despovoamento. É considerada uma das mais belas aldeias da Itália e é chamada de ‘cidade que morre’, por causa do seu destino lento condenado à erosão."
      />
    </View>
  );
}
