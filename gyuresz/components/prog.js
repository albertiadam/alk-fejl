import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import React from 'react'
import supabase from '../lib/supabase-client';
import { useState, createContext, useEffect} from 'react';


const Prog = ({ navigation }) => {
    const [szam,setSzam] = useState("")
    const [muvelet,setMuvelet] = useState("")
  return (
    <View style={styles.container}>
        <Text style={styles.cim}>BIT Legjobb számológépe</Text>
        <View pointerEvents='none'>
          <TextInput style={styles.szamkiiras}>{szam}</TextInput>
        </View>
        <View style={styles.buttoncontainer}>
            <TouchableOpacity style={styles.button} onPress={()=> setSzam(szam+"7")}><Text style={styles.szamfelirat}>7</Text></TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={()=> setSzam(szam+"8")}><Text style={styles.szamfelirat}>8</Text></TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={()=> setSzam(szam+"9")}><Text style={styles.szamfelirat}>9</Text></TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={()=> setSzam(szam+"+")}><Text style={styles.szamfelirat1}>+</Text></TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={()=> setSzam(szam+"4")}><Text style={styles.szamfelirat}>4</Text></TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={()=> setSzam(szam+"5")}><Text style={styles.szamfelirat}>5</Text></TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={()=> setSzam(szam+"6")}><Text style={styles.szamfelirat}>6</Text></TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={()=> setSzam(szam+"-")}><Text style={styles.szamfelirat1}>-</Text></TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={()=> setSzam(szam+"1")}><Text style={styles.szamfelirat}>1</Text></TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={()=> setSzam(szam+"2")}><Text style={styles.szamfelirat}>2</Text></TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={()=> setSzam(szam+"3")}><Text style={styles.szamfelirat}>3</Text></TouchableOpacity> 
            <TouchableOpacity style={styles.button} onPress={()=> setSzam(szam+"*")}><Text style={styles.szamfelirat1}>*</Text></TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={()=> setSzam(Szamolas(szam))}><Text style={styles.szamfelirat1}>=</Text></TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={()=> setSzam(szam+"0")}><Text style={styles.szamfelirat}>0</Text></TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={()=> setSzam(szam+".")}><Text style={styles.szamfelirat1}>.</Text></TouchableOpacity> 
            <TouchableOpacity style={styles.button} onPress={()=> setSzam(szam+"/")}><Text style={styles.szamfelirat1}>/</Text></TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={()=> setSzam("")}><Text style={styles.szamfelirat1}>C</Text></TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={()=> setSzam(Torles(szam))}><Text style={styles.szamfelirat1}>&#x21d0;</Text></TouchableOpacity> 
            <TouchableOpacity style={styles.button} onPress={()=> setSzam(szam+"**")}><Text style={styles.szamfelirat1}>^</Text></TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={()=> setSzam(szam+"(")}><Text style={styles.szamfelirat1}>&#x28;</Text></TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={()=> setSzam(szam+")")}><Text style={styles.szamfelirat1}>&#x29;</Text></TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={()=> setSzam(Pluszegy(szam))}><Text style={styles.szamfelirat1}>ADHD</Text></TouchableOpacity>
        </View> 
    </View>
  )
}
function Pluszegy(parameter){
  if (parameter == "") {
    parameter = 0
    return String(parameter+Math.floor(Math.random() * 10))
  }
  else{
    parameter = parseInt(parameter)+Math.floor(Math.random() * 10)
    return String(parameter)
  }
}


function Torles(parameter){
    parameter  = String(parameter)
    if (parameter.length>0) {
        if (parameter.length>1) {
            parameter = parameter.slice(0,parameter.length-1)
            return parameter
        }
        else{
            parameter = ""
            return parameter
        }
    }
    else{
      return ""
    }
    
}
function Szamolas(parameter){
    try {
        parameter = eval(parameter)
        if (parameter == Number.POSITIVE_INFINITY || parameter == Number.NEGATIVE_INFINITY) {
            return "A végtelenbe és tovább"
        }
        if (isNaN(parameter)){
          return "Ez bizony egy NaN :)"
        }
        return parameter
    } catch (error) {
        alert("Ne már ne csináld ezt")
        alert(error.Message)
        return ""
    }
    
}

async function signOut(){ //kilépés
    let {error} = await supabase.signOut()
  }

export default Prog

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
        paddingTop:30, 
        fontWeight:'bold', 
        textAlign:'center',
        color: 'white'
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
        backgroundColor: '#e7f7f7',
        textAlign: 'center',
      },
      szamkiiras:{
        backgroundColor:'#41bfbf',
        width: 270,
        borderRadius:20,
        height:30,
        fontSize:20,
        textAlign: 'center',
        marginBottom:10
      },
      button: {
        backgroundColor: '#f69133',
        width: 60,
        height: 60,
        margin: 5,
        padding: 5,
        alignItems:'center',
        borderRadius:20,
        justifyContent:'center'
        
      },
      szamfelirat:{
        //fontWeight:'bold',
        color:'black'
      },
      szamfelirat1:{
      fontWeight:'bold',
      color:'white'
    },
    buttoncontainer: {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
        width: '90%'
      },
    kilepobutton: {
        backgroundColor: '#f69133',
        width: '80%',
        flexDirection: 'row',
        justifyContent: 'center',
        margin: 100,
        padding: 16,
        borderRadius:20
       
      }
    
})