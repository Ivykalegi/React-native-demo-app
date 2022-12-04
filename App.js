import HomeScreen from './src/screens/HomeScreen';
import AboutUsScreen from './src/screens/AboutUsScreen';
import ChatScreen from './src/screens/ChatScreen';
import ContactUsScreen from './src/screens/ContactUsScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

export default function App() {
  
  return (
    <NavigationContainer>
      <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="AboutUs" component={AboutUsScreen} />
      <Tab.Screen name="Chats" component={ChatScreen} />
      <Tab.Screen name="Contact" component={ContactUsScreen} />

      </Tab.Navigator>
      
    </NavigationContainer>
     
  );
}

