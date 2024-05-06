import { ProgressBarAndroidComponent, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import React from 'react'
import supabase from '../lib/supabase-client';
import { useState, createContext, useEffect} from 'react';

const Reg = () => {
    const [email,setEmail] = useState("email")
    const [password,setPassword] = useState("password")
  return (
    <View style={styles.container}>
    <Text style={styles.cim}>Regisztráció ehhez a fasza apphoz</Text>
    <Text style={styles.regtext}>Név</Text>
    <TextInput style={styles.textInput} placeholder='pl: Kis Béla'></TextInput>
    <Text style={styles.regtext}>Email</Text>
    <TextInput style={styles.textInput} placeholder='pl: rajmund@szep.com' onChangeText={(value)=> setEmail(value)}></TextInput>
    <Text style={styles.regtext}> Jelszó</Text>
    <TextInput style={styles.textInput} placeholder='pl: fülike2' onChangeText={(value)=> setEmail(value)}></TextInput>
    <TouchableOpacity style={styles.button} onPress={()=>register(email, password)}>
      <Text>Regisztráció</Text>
    </TouchableOpacity>
  </View>
  )
}
async function register(name,user,pw){ //regisztráció
    try {
      let {error} = await supabase.auth.signUp({
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

export default Reg

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
        marginBottom: 10,
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