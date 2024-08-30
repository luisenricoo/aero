import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Pressable, Alert,Image } from 'react-native';
import { SQLiteProvider, useSQLiteContext } from 'expo-sqlite';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { useState } from 'react';
const HomeScreen = ({navigation, route}) => {

    //we'll extract the user parameter from route.params
    return (
        <View styles = {styles.container1} >
                <Pressable style={styles.button1} onPress={() => navigation.navigate('Water')}>
                <Image source={require('../assets/water.png')} style = {styles.waterLogo}/>
                <Text style={styles.water}>Water Management</Text>
            </Pressable>
            <Pressable style={styles.button2} onPress={() => navigation.navigate('History')}>
            <Image source={require('../assets/history.png')} style = {styles.historyLogo}/>
            <Text style={styles.history}>History</Text>
            </Pressable>
            <Pressable style={styles.button3} onPress={() => navigation.navigate('Login')}>
            <Image source={require('../assets/logout.png')} style = {styles.logLogo}/>
            <Text style={styles.logout}>Logout</Text>
            </Pressable>
            <Pressable style={styles.button4} onPress={() => navigation.navigate('Nutrient')}>
            <Image source={require('../assets/nut.png')} style = {styles.logLogo}/>
                <Text style={styles.nutrient} >Nutrient Management</Text>
                </Pressable>
                
        </View>
    )
}
const styles = StyleSheet.create({
    container1: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        marginTop: 10000,
    },
    waterLogo: {
    alignContent: "stretch",
    justifyContent: 'center',
      width: 70,
      height: 70,  
      marginTop: 10,
      top: 0,
      left: 2,
    },
    water: {
    textAlign: 'center',
      fontSize: 24,
      marginBottom: 10,
    },
    nutrient: {
        textAlign: 'center',
        fontSize: 24,
        marginBottom: 10,
    },
    history: {
        textAlign: 'center',
        fontSize: 24,
        marginBottom: 10,
    },
    nutLogo: {
        alignContent: "stretch",
        justifyContent: 'center',
          width: 70,
          height: 70,  
          marginTop: 10,
          top: 0,
          left: 0,
        },
    logLogo: {
        alignContent: "stretch",
        justifyContent: 'center',
          width: 70,
          height: 70,  
          marginTop: 10,
          top: 0,
          left: 0,
        },
        logLogo: {
        alignContent: "stretch",
        justifyContent: 'center',
          width: 70,
          height: 70,  
          marginTop: 10,
          top: 0,
          left: 0,
        },
        historyLogo: {
            alignContent: "stretch",
            justifyContent: 'center',
              width: 70,
              height: 70,  
              marginTop: 10,
              top: 0,
              left: 0,
            },
    button: {
      backgroundColor: 'blue',
      padding: 10,
      marginVertical: 10,
      width: '80%',
      borderRadius: 5,
    },
    button1: {
        alignItems: 'center',
        justifyContent: 'center',
        width: '45%',
        aspectRatio: 1,
        backgroundColor: '#6495ed',
        borderRadius: 10,
        marginVertical: 10,
        elevation: 5,
        left: 10,
        top: 150
    },
    button2: {
        alignItems: 'center',
        justifyContent: 'center',
        width: '45%',
        aspectRatio: 1,
        backgroundColor: '#6495ed',
        borderRadius: 10,
        marginVertical: 10,
        elevation: 5,
        left: 10,
        top: 155
    },
    button3: {
        alignItems: 'center',
        justifyContent: 'center',
        width: '45%',
        aspectRatio: 1,
        backgroundColor: '#6495ed',
        borderRadius: 10,
        marginVertical: 10,
        elevation: 5,
        left: 215,
        bottom: 50
      },
      button4: {
        alignItems: 'center',
        justifyContent: 'center',
        width: '45%',
        aspectRatio: 1,
        backgroundColor: '#6495ed',
        borderRadius: 10,
        marginVertical: 10,
        elevation: 5,
        left: 215,
        bottom: 465
      },
    login: {
      backgroundColor: 'blue',
      padding: 10,
      marginVertical: 10,
      width: '50%',
      length: '80%',
      borderRadius: 8,
      position: 'absolute',
      top: 730,
      left: 0,
    },
    logout: {
        textAlign: 'center',
        fontSize: 24,
        marginBottom: 25,
    },
    link : {
      marginTop: 10,
    },
    linkText: {
      color: 'blue',
    },
    userText: {
      fontSize: 18,
      marginBottom: 30,
    }
  });
  export default HomeScreen;