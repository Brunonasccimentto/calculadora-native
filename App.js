import { View } from 'react-native';
import Title from './src/components/header/title';
import Body from './src/components/body/body';
import { StatusBar } from 'react-native';
import styles from './style';

export default function App() {

  return (
    <View  style={styles.container}>
      <StatusBar backgroundColor="#ad7c00" barStyle="light-content"/>
      <View style={styles.header}>
        <Title/>
      </View>
      <View style={styles.body}>
        <Body/>
      </View>
    </View>
  );
}
