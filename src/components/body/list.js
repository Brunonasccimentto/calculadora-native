import { FlatList, View, Text, Image } from "react-native";
import styles from "../../../style";
import icon from "../images/icon.png"

export default function BetList(props){

    return(
        <View>
             <FlatList style={styles.listContext}  data={props.betList} showsVerticalScrollIndicator={false} renderItem={({item})=>{
                return(
                    <View style={[styles.card, styles.shadowProp]}>
                        <View style={styles.listHeader}>
                            <Text style={[{color: "#ffb90c",fontWeight: "500", textShadowColor: "gray", textShadowOffset: {width: -1, height: 1}, textShadowRadius: 1}]}>{item.betName}</Text>
                            <Text>{item.time}</Text>
                        </View>
                        <View style={styles.calcBetList}>
                            <View style={styles.betListRow}>
                                <Text>{item.value}</Text>
                                <Text>X</Text>
                                <Text>{item.odd}</Text>
                                <Text> {item.result}</Text>
                            </View>
                            
                            <View style={styles.betListRow}>
                            <Text>{item.bet}</Text>
                            <Text>X</Text>
                            <Text>{item.odd2}</Text>
                            <Text>{item.newBetResult}</Text>
                            </View>

                           
                        </View>
                        {item.profitZero ? 
                            <View>
                            <Text style={[{fontWeight: "600"}]}> Lucro: {item.profit} </Text>
                            <Text style={[{fontWeight: "600"}]}> Lucro 2: {item.profitZero} </Text>
                            </View>
                            :
                            <View style={[{display: "flex", alignItems:"flex-end", marginTop: 8}]}>
                                <Text style={[{fontWeight: "600"}]}> Lucro: {item.profit} </Text>
                            </View>
                            
                        }
                        
                    </View>
                    
                )
            }} keyExtractor={(item)=>{item.id}}/>
        </View>
    )
}