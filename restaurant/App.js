import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { TableView,Section,Cell } from "react-native-tableview-simple";
import Restarant from "./components/Restarant";
import Menu from "./components/Menu";
export default function App() {
 const Stack=createStackNavigator()
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="menu">
        <Stack.Screen name="restarant" component={Restarant}/>
        <Stack.Screen name="menu" component={Menu}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

