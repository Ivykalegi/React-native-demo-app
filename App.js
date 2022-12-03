import HomeScreen from './src/screens/HomeScreen';
import AboutUsScreen from './src/screens/AboutUsScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


const Tab = createBottomTabNavigator();

export default function App() {
  
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen></Tab.Screen>
          name="Home"
          component={HomeScreen}
          options={{ title: 'Welcome' }}
        />
        <Tab.Screen name="AboutUs" component={AboutUsScreen} />
      </Tab.Navigator>
      
    </NavigationContainer>
     
  );
}