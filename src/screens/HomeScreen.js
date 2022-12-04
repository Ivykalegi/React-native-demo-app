import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, View, Text } from 'react-native';
import MyButton from '../components/MyButton';
import { Avatar } from '@rneui/themed';


export default function HomeScreen({ navigation }) {
  
  
  return (
    <View style={styles.container}>
      <Avatar
        size={100}
        rounded
        source={{ uri: "https://randomuser.me/api/portraits/men/36.jpg" }}
      />

      <MyButton details= "button"></MyButton>
      <Button title= "learn more" color="red" >

      </Button>
      
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