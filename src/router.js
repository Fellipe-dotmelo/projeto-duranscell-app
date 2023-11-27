import  React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator} from '@react-navigation/stack';
import { Feather } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native';


import Home from './pages/Home';
import Detail from './pages/Detail';
import Page2 from './pages/Detail/Page2';
import Page3 from './pages/Detail/Page3';
import Page4 from './pages/Detail/Page4';
import Page5 from './pages/Detail/Page5';
import Page6 from './pages/Detail/Page6';

const Stack = createStackNavigator();

function Routes(){
    return(
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen
                name="Home"
                component={Home}
                options={{ headerShown: false }}
                />

                <Stack.Screen 
                name="Detail"
                component={Detail}
                options={{
                    headerRight: () => (
                      <TouchableOpacity style={{ marginRight: 15 }}>
                          <Feather
                          name="shopping-cart"
                          size={24}
                          color="black"
                          />
                      </TouchableOpacity>  

                
                    )
                }}
                />

                <Stack.Screen 
                name="Page2"
                component={Page2}
                options={{
                    headerRight: () => (
                      <TouchableOpacity style={{ marginRight: 15 }}>
                          <Feather
                          name="shopping-cart"
                          size={24}
                          color="black"
                          />
                      </TouchableOpacity>  

                
                    )
                }}
                />

                <Stack.Screen 
                name="Page3"
                component={Page3}
                options={{
                    headerRight: () => (
                      <TouchableOpacity style={{ marginRight: 15 }}>
                          <Feather
                          name="shopping-cart"
                          size={24}
                          color="black"
                          />
                      </TouchableOpacity>  

                
                    )
                }}
                />

                <Stack.Screen 
                name="Page4"
                component={Page4}
                options={{
                    headerRight: () => (
                      <TouchableOpacity style={{ marginRight: 15 }}>
                          <Feather
                          name="shopping-cart"
                          size={24}
                          color="black"
                          />
                      </TouchableOpacity>  

                
                    )
                }}
                />

                <Stack.Screen 
                name="Page5"
                component={Page5}
                options={{
                    headerRight: () => (
                      <TouchableOpacity style={{ marginRight: 15 }}>
                          <Feather
                          name="shopping-cart"
                          size={24}
                          color="black"
                          />
                      </TouchableOpacity>  

                
                    )
                }}
                />

                <Stack.Screen 
                name="Page6"
                component={Page6}
                options={{
                    headerRight: () => (
                      <TouchableOpacity style={{ marginRight: 15 }}>
                          <Feather
                          name="shopping-cart"
                          size={24}
                          color="black"
                          />
                      </TouchableOpacity>  

                
                    )
                }}
                />


              
            </Stack.Navigator>

            
        </NavigationContainer>
    )
}

export default Routes;