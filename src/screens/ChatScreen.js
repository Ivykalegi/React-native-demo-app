import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, View ,Text} from 'react-native';
import MyButton from '../components/MyButton';

export default function ChatsScreen() {
  
  return (
    <View style={styles.container}>
      <MyButton details= "Cool shinny button"></MyButton>
      <Button title= "Messages" color="red" >

      </Button>
      <Text>Chats screen page</Text>
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