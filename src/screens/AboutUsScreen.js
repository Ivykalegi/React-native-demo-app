import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, View, Text} from 'react-native';
import MyButton from '../components/MyButton';

export default function AboutUsScreen({navigation}) {
  
  return (
    <View style={styles.container}>
      <MyButton details= "Cool shinny button"></MyButton>
      <Button title= "About US" color="red" >

      </Button>
      <Text> About Us page</Text>
      <Button
      title="Go to Home screen"
      onPress={() =>
        navigation.navigate('Home')
      }
    />
      <StatusBar style="auto" />
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#eff1f3',
    alignItems: 'center',
    justifyContent: 'center',
  },
});