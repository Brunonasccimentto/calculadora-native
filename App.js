import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Title from './src/components/header/title';
import Body from './src/components/body/body';
import { Colors } from 'react-native/Libraries/NewAppScreen';

export default function App() {
  return (
    <View  style={styles.container}>
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
