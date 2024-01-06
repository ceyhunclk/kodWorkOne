import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Jobs from "./pages/Jobs";
import DetailJob from "./pages/DetailJob";
import { createDrawerNavigator } from '@react-navigation/drawer';
import FavList from "./pages/FavList/FavList";
import SubList from "./pages/SubList";
const Router=()=>{
const Stack =createNativeStackNavigator();
const Drawer = createDrawerNavigator()

function Root() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Jobs" component={Jobs} options={{
        headerShown:false
      }}
      />
      <Stack.Screen name="DetailJob" component={DetailJob}
        options={{
          headerTitleStyle:{
            color:"#EF5350",
            fontSize:14
          }
        }}
      />
    </Stack.Navigator>
  );
}


  return(
    <NavigationContainer>

      <Drawer.Navigator>
        <Drawer.Screen name="Job List" component={Root} />
        <Drawer.Screen name="Fav List" component={FavList} />
        <Drawer.Screen name="Submit List" component={SubList} />
    </Drawer.Navigator>
    </NavigationContainer>

  )
}
export default Router;