import { View, Image} from "react-native";
import logo from "../images/logo.png"
import styles from "../../../style";


export default function Title(){
    return(
        <View style={styles.header}>
            <Image source={logo} style={styles.logo}></Image>
        </View>
    )
}