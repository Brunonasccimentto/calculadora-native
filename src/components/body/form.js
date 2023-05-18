import { useEffect, useState } from "react";
import { View, Text, TextInput, Button, StyleSheet, Vibration } from "react-native";
import styles from "../../../style";
import BetList from "./list";

export default function Form() {

    const style = StyleSheet.create({

        profit: {
            
            fontWeight: "bold"
        }
    });

     function setColor(n){
        return parseFloat(n) < 0 ? setNewcolor("red") : setNewcolor("green")
     }
 

    let time = new Date()

    const [calcName, setCalcName] = useState("calculadora win/win");
    const [value, setValue] = useState("");
    const [odd, setOdd] = useState("");
    const [odd2, setOdd2] = useState("");
    const [result, setResult] = useState();
    const [bet, setBet] = useState();
    const [profit, setProfit] = useState();
    const [probability1, setProbability1] = useState();
    const [newColor, setNewcolor] = useState("none");
    const [probability2, setProbability2] = useState();
    const [newBetResult, setNewBetResult] = useState();
    const [profitZero, setProfitZero] = useState();
    const [emptyMsg, setEmptyMsg] = useState();
    const [betList, setBetList] = useState([])

    function calculate() {

        let formatValue = value.replace(",", ".")
        let formatOdd = odd.replace(",", ".")
        let formatOdd2 = odd2.replace(",", ".")

        let probability1 = ((1 / formatOdd) * 100).toFixed(2) + "%"
        let probability2 = ((1 / formatOdd2) * 100).toFixed(2) + "%"

        if (calcName === "calculadora win/win" && formatValue != "" && formatOdd != "" && formatOdd2 != "") {
            let result = (formatValue * formatOdd).toFixed(2)
            let bet = (result / formatOdd2).toFixed(2)
            let newBetResult = (bet * formatOdd2).toFixed(2)
            let profit = (parseFloat(result) - (parseFloat(formatValue) + parseFloat(bet))).toFixed(2)
            probability1 = ((1 / formatOdd) * 100).toFixed(2) + "%"
            probability2 = ((1 / formatOdd2) * 100).toFixed(2) + "%"
            setColor(profit)
            return (
                
                setBet(bet),
                setResult(result),
                setProfit(profit),
                setProbability1("Probabilidade" + " " + probability1),
                setProbability2("Probabilidade" + " " + probability2),
                setNewBetResult(newBetResult),
                setEmptyMsg(""),
                setBetList((arr)=> [...arr, {id: new Date().getTime(), betName: calcName, time: time.getHours() + ":" + time.getMinutes() + ":" + time.getSeconds(), profit: profit, value: value, odd: odd, odd2: odd2, bet: bet, result: result, newBetResult: newBetResult}])
            )
        } else if (calcName === "calculadora lose/zero" && formatValue != "" && formatOdd != "" && formatOdd2 != "") {
            let result = (formatValue * formatOdd).toFixed(2)
            let bet = parseFloat(formatValue / (formatOdd2 - 1)).toFixed(2)
            let newBetResult = (bet * formatOdd2).toFixed(2)
            let profit = (parseFloat(result) - (parseFloat(formatValue) + parseFloat(bet))).toFixed(2)
            let profitZero = (parseFloat(newBetResult) - (parseFloat(formatValue) + parseFloat(bet))).toFixed(2)
            probability1 = ((1 / formatOdd) * 100).toFixed(2) + "%"
            probability2 = ((1 / formatOdd2) * 100).toFixed(2) + "%"
            setColor(profit)

            return (
                setBet(bet),
                setResult(result),
                setNewBetResult(newBetResult),
                setProfit(profit),
                setProfitZero(profitZero),
                setProbability1("Probabilidade" + " " + probability1),
                setProbability2("Probabilidade" + " " + probability2),
                setEmptyMsg(""),
                setBetList((arr)=> [
                    ...arr, {id: new Date().getTime(), betName: calcName, time: time.getUTCHours() + ":" + time.getMinutes() + ":" + time.getSeconds(), profit: profit, value: value, odd: odd, odd2: odd2, bet: bet, result: result, newBetResult: newBetResult, profitZero: profitZero}])
            )
        } else {
            setEmptyMsg("*Preencha todos os campos");
            Vibration.vibrate()
        }
    }

    function changeCalc() {
        calcName === "calculadora win/win" ? setCalcName("calculadora lose/zero") : setCalcName("calculadora win/win");
        setBet("");
        setResult("");
        setProfit("");
        setProbability1("");
        setProbability2("");
        setNewBetResult("");
        setEmptyMsg("");
        setValue("");
        setOdd("");
        setOdd2("");
        setProfitZero("");
    }

    return (
        <View>
            <View style={styles.calcBox}>
                <View style={styles.title}>
                    <Text style={[{ color: "#ffb90c", fontSize: 15, fontWeight: "bold" }]}> {calcName} </Text>
                    <Text onPress={changeCalc} style={[{ color: "#ffb90c" }]}> trocar </Text>
                </View>

                <Text style={[{ color: "red" , fontSize: 12, fontWeight:"bold"}]}> {emptyMsg} </Text>
                <View style={[{ padding: 8 }, { flexDirection: "row" }]}>
                    <Text > aposta 1 </Text>
                    <Text style={{ marginLeft: 20 }}> {probability1} </Text>
                </View>

                <View style={styles.betRow}>
                    <TextInput id="t1" placeholder="  valor" value={value} keyboardType="numeric" style={styles.input} onChangeText={setValue} />
                    <TextInput id="t2" placeholder="  odd" value={odd} keyboardType="numeric" style={styles.input} onChangeText={setOdd} />
                    <Text>=</Text>
                    <Text id="t3" style={styles.result}> {result} </Text>
                </View>

                <View style={[{ padding: 8 }, { flexDirection: "row" }]}>
                    <Text > aposta 2 </Text>
                    <Text style={{ marginLeft: 20 }}> {probability2} </Text>
                </View>
                <View style={styles.betRow}>
                    <Text style={[styles.input, { paddingTop: 5 }]}> {bet} </Text>
                    <TextInput id="t4" placeholder="  odd" keyboardType="numeric" value={odd2} style={styles.input} onChangeText={setOdd2} />
                    <Text>=</Text>
                    <Text id="t3" style={styles.result}> {newBetResult} </Text>
                </View>

                {calcName == "calculadora win/win" ?
                    <View >
                        <Text style={{ padding: 8 }}> Lucro: <Text style={[{ color: newColor, fontWeight: "bold" }]}> {profit} </Text> </Text>

                    </View>
                    :
                    <View style={[{ display: "flex" }, { flexDirection: "row" }, { justifyContent: "space-around" }, { padding: 8 }]}>
                        <Text> Lucro 1: <Text style={[{ color: newColor, fontWeight: "bold"}]}> {profit} </Text> </Text>

                        <Text> Lucro 2: <Text style={[{fontWeight: "bold"}]}> {profitZero} </Text> </Text>

                    </View>
                }
                <Button color={"#ffb90c"} title="calcular" onPress={calculate} />
            </View>

            <View>
                <Text style={[{fontSize: 15, padding: 5, marginTop: 20, fontWeight: "bold", color:"#ffb90c", backgroundColor: "#444"}]}> Ultimas apostas</Text>
                <BetList betList={betList.reverse()} />
            </View>
            
        </View>
    )
}



