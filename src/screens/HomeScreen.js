import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, View, Text } from 'react-native';
import MyButton from '../components/MyButton';

export default function HomeScreen({ navigation }) {
  
  
  return (
    <View style={styles.container}>
      <MyButton details= "Cool shinny button"></MyButton>
      <Button title= "learn more" color="red" >

      </Button>
      <Text> HomeScreen page</Text>
      <Button
      title="Go to About us"
      onPress={() =>
        navigation.navigate('AboutUs')
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