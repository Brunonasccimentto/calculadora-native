import { View, Text, Image, StyleSheet} from "react-native";
import logo from "../images/logo.png"


export default function Title(){
    return(
        <View style={styles.header}>
            <Image source={logo} style={styles.logo}></Image>
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        backgroundColor: "#ffb90c",
        paddingBottom: 6,
        paddingLeft: 10,
        zIndex: 10,
    },
    logo:{
        width: 130,
        height: 35,
        
    }
  });