import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import React from 'react'
import supabase from '../lib/supabase-client';
import { useState, createContext, useEffect} from 'react';


const Signin = ({ navigation }) => {
    const [email,setEmail] = useState("email")
    const [password,setPassword] = useState("password")
  return (
    <View style={styles.container}>
    <Text style={styles.cim}>Jelentkezz be geci gyorsan!</Text>
    <Text style={styles.regtext}>Email</Text>
    <TextInput style={styles.textInput} placeholder={"pl: rajmund@szep.com"} onChangeText={(value)=> setEmail(value)}></TextInput>
    <Text style={styles.regtext}> Jelszó</Text>
    <TextInput style={styles.textInput} placeholder={"pl: fülike2"} onChangeText={(value)=> setPassword(value)}></TextInput>
    <TouchableOpacity style={styles.button} onPress={()=>signIn(email, password)}>
      <Text>Belépés</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.button} onPress={()=> navigation.navigate("Regisztráció")}>
        <Text>Nincs fiókod? Halj meg</Text>
    </TouchableOpacity>
  </View>
  )
}

async function signIn(user,pw){ //belépés
    try {
        let {error} = await supabase.auth.signInWithPassword({
            email: user,
            password: pw
          })
        if (error) {
            throw new error
        }
    } catch (error) {
        alert(error.message)
    }
  }

export default Signin

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
    
})