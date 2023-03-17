import { useState } from "react";
import { View, Text, TextInput, Button, StyleSheet } from "react-native";

export default function Form({name}){


    const styles = StyleSheet.create({
   
        profit:{
            color: newColor,
            fontWeight: "bold"
        },
        betRow:{
            display: "flex",
            flexDirection: "row",
            flexWrap: "wrap",
            justifyContent: "space-around",
            alignItems: "center",
        },
        input:{
            borderWidth: 2,
            borderColor: "#444",
            width: "30%",
            borderRadius: 10,
            backgroundColor: "#f1f1f1",
            height: "100%",
            paddingLeft: 4,
            fontSize: 12
        },
        result:{
            width: "15%",
            justifyContent: "center"
        },
        calcBox:{
            backgroundColor: "#f1f1f1",
        }
      });

    const [value, setValue] = useState()
    const [odd, setOdd] = useState()
    const [odd2, setOdd2] = useState()
    const [result, setResult] = useState()
    const [bet, setBet] = useState()
    const [profit, setProfit] = useState()
    const [probability1, setProbability1] = useState()
    const [newColor, setNewcolor] = useState()
    const [probability2, setProbability2] = useState()
    const [newBetResult, setNewBetResult] = useState()
    const [profitZero, setProfitZero] = useState()

   function calculate(){

            let probability1 = ((1 / odd) * 100).toFixed(2) + "%"
            let probability2 =  ((1 / odd2) * 100).toFixed(2) + "%"
        
        if(name === "calculadora win/win"){
            let result = (value * odd).toFixed(2)
            let bet = (result / odd2).toFixed(2)
            let newBetResult = (bet * odd2).toFixed(2)
            let profit = (parseFloat(result) - (parseFloat(value) + parseFloat(bet))).toFixed(2)
            probability1 = ((1 / odd) * 100).toFixed(2) + "%"
            probability2 =  ((1 / odd2) * 100).toFixed(2) + "%"
            
            return(
                setBet(bet),
                setResult(result),
                setProfit(profit),
                setProbability1("Probabilidade" + " " + probability1),
                setProbability2("Probabilidade" + " " + probability2),
                setNewBetResult(newBetResult)
            )             
        } else if(name ==="calculadora lose/zero") {
            let result = (value * odd).toFixed(2)
            let bet = parseFloat(value / (odd2 - 1)).toFixed(2)
            let newBetResult = (bet * odd2).toFixed(2)
            let profit = (parseFloat(result) - (parseFloat(value) + parseFloat(bet))).toFixed(2)
            let profitZero = (parseFloat(newBetResult) - (parseFloat(value) + parseFloat(bet))).toFixed(2)
            probability1 = ((1 / odd) * 100).toFixed(2) + "%"
            probability2 =  ((1 / odd2) * 100).toFixed(2) + "%"

            return(
                setBet(bet),
                setResult(result),
                setNewBetResult(newBetResult),
                setProfit(profit),
                setProfitZero(profitZero),
                setProbability1("Probabilidade" + " " + probability1),
                setProbability2("Probabilidade" + " " + probability2)
            )
        }              
    }

        let color;
        if(parseFloat(profit) < 0){
            color = "red"
        } else {
            color = "green"
        }

    return(
        <View>
            <View style={styles.calcBox}>
                <Text style={[{fontSize: 14}, {backgroundColor: "#444"},{color: "#f1f1f1"}, {padding: 5}]}> {name} </Text>
                <View style={[{padding: 8}, {flexDirection: "row"}]}>
                    <Text > aposta 1 </Text>
                    <Text style={{marginLeft: 20}}> {probability1} </Text>
                </View>
            
                <View style={styles.betRow}>
                    <TextInput id="t1" placeholder="  valor" keyboardType="numeric" style={styles.input} onChangeText={setValue}/>
                    <TextInput id="t2" placeholder="  odd" keyboardType="numeric" style={styles.input} onChangeText={setOdd}/>
                    <Text>=</Text>
                    <Text id="t3" style={styles.result}> {result} </Text>
                </View>
                
                <View style={[{padding: 8}, {flexDirection: "row"}]}>
                    <Text > aposta 2 </Text>
                    <Text style={{marginLeft: 20}}> {probability2} </Text>
                </View>
                <View style={styles.betRow}>
                    <Text style={[styles.input, {paddingTop: 5}]}> {bet} </Text>
                    <TextInput id="t4" placeholder="  odd" keyboardType="numeric" style={styles.input} onChangeText={setOdd2}/>
                    <Text>=</Text>
                    <Text id="t3" style={styles.result}> {newBetResult} </Text>
                </View>
                

                {name == "calculadora win/win"? 
                <View >
                    <Text style={{padding: 8}}> Lucro: <Text style={[styles.profit, {color: color}]}> {profit} </Text> </Text>
                    
                </View>
                : 
                <View style={[{display: "flex"}, {flexDirection: "row"}, {justifyContent: "space-around"}, {padding: 8} ]}>
                    <Text> Lucro 1: <Text style={[styles.profit, {color: color}]}> {profit} </Text> </Text>
                    
                    <Text> Lucro 2: <Text style={[styles.profit]}> {profitZero} </Text> </Text>
                    
                </View>
                }
                <Button color={"#ffb90c"} title="calcular" onPress={calculate}/>
            </View>
        </View>
    )
}



