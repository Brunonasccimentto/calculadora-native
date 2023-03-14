import { View, StyleSheet} from "react-native";
import Form from "./form";

export default function Body(){
    return(
        <View style={styles.body}>
            <View style={styles.tables}>  
                <Form name={"calculadora win/win"}/>
                <Form name={"calculadora lose/zero"}/>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    body: {
      display: "flex",
      color: "#333"
    },

    tables: {
        display:"flex",
        justifyContent: "space-evenly",
        height: "96%",
    }
  });