import { ProgressBarAndroidComponent, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import React from 'react'
import supabase from '../lib/supabase-client';
import { useState, createContext, useEffect} from 'react';

const Reg = () => {
    const [email,setEmail] = useState("email")
    const [password,setPassword] = useState("password")
  return (
    <View style={styles.container}>
      <View style={styles.fentiCucc}>
      <Text style={styles.cim}>Regisztráció</Text>
      </View>
      <View style={styles.container_szovegek}>
        <Text style={styles.regtext}>Név</Text>
        <TextInput style={styles.textInput} placeholder='pl: Kis Béla'></TextInput>
        <Text style={styles.regtext}>Email</Text>
        <TextInput style={styles.textInput} placeholder='pl: rajmund@szep.com' onChangeText={(value)=> setEmail(value)}></TextInput>
        <Text style={styles.regtext}> Jelszó</Text>
        <TextInput style={styles.textInput} placeholder='pl: fülike2' onChangeText={(value)=> setEmail(value)}></TextInput>
        <TouchableOpacity style={styles.button} onPress={()=>Asd()}>
          <Text>Regisztráció</Text>
        </TouchableOpacity>
      </View>
  </View>
  )
}
function Asd(){
  alert("Sikeresen elloptuk az adataidat")
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
        fontSize:17, 
        textAlign:'center',
        paddingBottom:10,
        paddingTop: 20,
      },
    
      cim: {
        fontSize:30, 
        paddingBottom:30, 
        paddingTop:30,
        fontWeight:'bold', 
        textAlign:'center',
        color: 'white'
      },
    
     
      fentiCucc:{
        height:'20%',
        justifyContent: 'center',
        alignItems: 'center'
      },

      container: {
        flex: 1,
        backgroundColor: '#12b0b0',
        alignItems: 'center',
        justifyContent: 'center',
        
      },
      textInput: {
        height: 40,
        width: '80%',
        backgroundColor: '#e7f7f7',
        textAlign: 'center',
        borderRadius: 10
      },
      button: {
        backgroundColor: '#12b0b0',
        width: '80%',
        flexDirection: 'row',
        justifyContent: 'center',
        marginBottom: 30,
        padding: 16,
        borderRadius: 30,
        marginTop: 'auto'
      },
      container_szovegek:{
        height:'80%',
        width:'100%',
        margin:0,
        paddingTop:50,
        borderTopLeftRadius:70,
        flex: 1,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'top'
      }
})