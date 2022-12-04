import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, View ,Text} from 'react-native';
import MyButton from '../components/MyButton';

export default function ContactUsScreen() {
  
  return (
    <View style={styles.container}>
      <MyButton details= "button"></MyButton>
      <Button title= "Contacts" color="red" >

      </Button>
     
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