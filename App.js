import { StyleSheet, View } from 'react-native';
import Title from './src/components/header/title';
import Body from './src/components/body/body';
import { StatusBar } from 'react-native-web';

export default function App() {
  return (
    <View  style={styles.container}>
      <StatusBar backgroundColor={"#ffb90c"}/>
      <View style={styles.header}>
        <Title/>
      </View>
      <View style={styles.body}>
        <Body/>
      </View>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    
    display: "flex",
    flexDirection: "column",
    height: "100%",
    backgroundColor: "#f1f1f1"
  },
  header:{

  },
  body:{
    
  }
});
