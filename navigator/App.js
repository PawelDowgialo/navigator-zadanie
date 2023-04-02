import React from 'react';
import { createDrawerNavigator } from "@react-navigation/drawer";
import Warszawa from './screens/Warszawa';
import Bydgoszcz from './screens/Bydgoszcz';
import Olsztyn from './screens/Olsztyn';
import Home from './screens/Home';
import { NavigationContainer } from "@react-navigation/native";

const Drawer = createDrawerNavigator()

export default function App(){
    return(
        <NavigationContainer>
          <Drawer.Navigator>
            <Drawer.Screen name="Strona główna" component={Home} options={{
              headerStyle: {
                fontSize: 30,
                backgroundColor: 'rgba(23, 54, 100, 0.7)',
                borderWidth: 0,
              },
              headerTintColor: '#fff',
              headerTitleStyle: {
                fontSize: 25,
                color: '#fff',
              }
            }}/>
            <Drawer.Screen name="Olsztyn" component={Olsztyn}/>
            <Drawer.Screen name="Warszawa" component={Warszawa}/>
            <Drawer.Screen name="Bydgoszcz" component={Bydgoszcz}/>
          </Drawer.Navigator>
        </NavigationContainer>
    )
}

