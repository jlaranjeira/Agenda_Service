import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Welcome from '../pages/Welcome';
import SignIn from '../pages/Signin';
import Home from '../pages/Home';
import Visualizar from '../pages/Visualizar';

const Stack = createNativeStackNavigator();

export default function Routes(){
    return(
        <Stack.Navigator>
            <Stack.Screen 
                name="Welcome"
                component={Welcome}
                options={{ headerShown: false }}
            />

            <Stack.Screen 
                name="SignIn"
                component={SignIn}
                options={{ headerShown: false }}
            />

            <Stack.Screen 
                name="Home"
                component={Home}
                options={{ headerShown: false }}
            />

            <Stack.Screen 
                name="Visualizar"
                component={Visualizar}
                options={{ headerShown: false }}
            />

           
            </Stack.Navigator>
    )
}