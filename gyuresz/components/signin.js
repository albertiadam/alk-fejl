import { ImageBackground, StyleSheet, Text, TextInput, TouchableOpacity, View} from 'react-native';
import React from 'react'
import supabase from '../lib/supabase-client';
import { useState, createContext, useEffect} from 'react';

const Signin = ({ navigation }) => {
    const [email,setEmail] = useState("email")
    const [password,setPassword] = useState("password")
  return (
    
    <View style={styles.container}>
      <View style={styles.fentiCucc}>
        <ImageBackground style={styles.logo}
              source={require('../logo/bit.png')}
        />
      </View>
      <View style={styles.container_szovegek}>
      <Text style={styles.cim}>Bejelentkezés</Text>
      <Text style={styles.regtext}>Email</Text>
      <TextInput style={styles.textInput} placeholder={"pl: rajmund@szep.com"} onChangeText={(value)=> setEmail(value)}></TextInput>
      <Text style={styles.regtext}> Jelszó</Text>
      <TextInput style={styles.textInput} placeholder={"pl: fülike2"} onChangeText={(value)=> setPassword(value)}></TextInput>
      <TouchableOpacity style={styles.button_belep} onPress={()=>navigation.navigate("Számológép")}>
        <Text>Belépés</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button_nincsFiok} onPress={()=> navigation.navigate("Regisztráció")}>
          <Text>Nincs fiókod? Regisztrálj itt</Text>
      </TouchableOpacity>
      </View>
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
        fontSize:17, 
        textAlign:'center',
        paddingBottom:10,
        paddingTop: 20,
        
      },
      logo:{
        width:150,
        height:150
      },
      fentiCucc:{
        height:'30%',
        justifyContent: 'center',
        alignItems: 'center'
      },

      cim: {
        fontSize:30, 
        paddingBottom:30,
        paddingTop: 30, 
        fontWeight:'bold', 
        textAlign:'center',
        color: '#12b0b0'
      },
      container: {
        flex: 1,
        backgroundColor: '#12b0b0',
        alignItems: 'center',
        justifyContent: 'bottom'
        
      },
      textInput: {
        height: 40,
        width: '80%',
        backgroundColor: '#e7f7f7',
        textAlign: 'center',
        borderRadius: 10
        
      },
      button_belep: {
        backgroundColor: '#12b0b0',
        width: '80%',
        flexDirection: 'row',
        justifyContent: 'center',
        margin: 16,
        padding: 16,
        borderRadius: 30
      },
    button_nincsFiok:{
      backgroundColor: 'white',
      width: '55%',
      flexDirection: 'row',
      justifyContent: 'center',
      marginTop: 'auto',
      padding: 16,
      borderRadius: 20
      },
    container_szovegek:{
      height:'70%',
      width:'100%',
      margin:0,
      paddingTop:10,
      borderTopLeftRadius:70,
      flex: 1,
      backgroundColor: 'white',
      alignItems: 'center',
      justifyContent: 'top'
    }
})