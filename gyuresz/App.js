import { StatusBar } from 'expo-status-bar';
import { useState, createContext, useEffect} from 'react';
import { ProgressBarAndroidComponent, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import supabase from './lib/supabase-client';
import { NavigationContainer } from '@react-navigation/native';
import Reg from './components/reg';
import Signin from './components/signin';
import Prog from './components/prog';

const SessionContext = createContext(null)

export default function App() { //autentikáció
  const [text,setText] = useState("pécsa")

  const [session, setSession] = useState(null)

  useEffect(() => {
    const subscription = supabase.auth.onAuthStateChange(
      (event, session) => {
        if (event === 'SIGNED_OUT') {
          setSession(null)
        } else if (session) {
          setSession(session)
        }
      })
    return () => {
      subscription.unsubscribe
    }
  });


async function signOut(){ //kilépés
  let {error} = await supabase.signOut()
}

const Stack = createStackNavigator();

  return (
    <SessionContext.Provider value={session}>
      <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Bejelentkezés" component={Signin}/>
        <Stack.Screen name="Számológép" component={Prog}/>
        <Stack.Screen name="Regisztráció" component={Reg}/>
    </Stack.Navigator>
    </NavigationContainer>
    </SessionContext.Provider> //skibidi toilet
  );


}

const styles = StyleSheet.create({
  regtext:{
    color: 'black', 
    fontSize:20, 
    textAlign:'center',
    paddingBottom:10
  },

  cim: {
    fontSize:30, 
    paddingBottom:30, 
    fontWeight:'bold', 
    textAlign:'center'
  },


  container: {
    flex: 1,
    backgroundColor: '#12b0b0',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textInput: {
    height: 50,
    width: '100%',
    backgroundColor: 'white',
    textAlign: 'center',
  },
  button: {
    backgroundColor: '#f69133',
    width: '80%',
    flexDirection: 'row',
    justifyContent: 'center',
    margin: 16,
    padding: 16,
  }
});
