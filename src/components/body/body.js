import { View } from "react-native";
import Form from "./form";
import styles from "../../../style";

export default function Body(){
    return(
        <View style={styles.body}>
            <View style={styles.tables}>  
                <Form/>  
            </View>
        </View>
    )
}