import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import SearchScreen from './src/screens/SearchScreen';
import ResultsShowScreen from './src/screens/ResultsShowScreen';
const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Search">
        <Stack.Screen
          name="Search"
          component={SearchScreen}
          options={{ title: 'BusinessSearch' }}
        />
        <Stack.Screen
          name="ResultsShow"
          component={ResultsShowScreen}
          options={{ title: 'Business Detail' }}
        />
      </Stack.Navigator>
      {/* <Stack.Navigator initialRouteName="Search">
        
      </Stack.Navigator> */}
    </NavigationContainer>
  );
};

export default App;
