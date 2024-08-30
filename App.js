import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Pressable, Alert } from 'react-native';
import { SQLiteProvider, useSQLiteContext } from 'expo-sqlite';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { useState } from 'react';
import LoginScreen from './screens/LoginScreen';
import RegisterScreen from './screens/RegisterScreen';
import HomeScreen from './screens/HomeScreen';
import WaterScreen from './screens/WaterScreen';
import NutrientScreen from './screens/NutrientScreen';
import HistoryScreen from './screens/HistoryScreen';


//initialize the database
const initializeDatabase = async(db) => {
    try {
        await db.execAsync(`
            PRAGMA journal_mode = WAL;
            CREATE TABLE IF NOT EXISTS users (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                username TEXT UNIQUE,
                password TEXT
            );
        `);
        console.log('Database initialized !');
    } catch (error) {
        console.log('Error while initializing the database : ', error);
    }
};

//create a stack navigator that manages the navigation between 3 screens
const Stack = createStackNavigator();

//We'll have 3 screens : Login, Register and Home

export default function App() {
  return (
    <SQLiteProvider databaseName='auth.db' onInit={initializeDatabase}>
        <NavigationContainer>
            <Stack.Navigator initialRouteName='Login'>
                <Stack.Screen name='Login' component={LoginScreen}/>
                <Stack.Screen name='Register' component={RegisterScreen}/>
                <Stack.Screen name='Home' component={HomeScreen}/>
                <Stack.Screen name='Water' component={WaterScreen}/>
                <Stack.Screen name='Nutrient' component={NutrientScreen}/>
                <Stack.Screen name='History' component={HistoryScreen}/>
            </Stack.Navigator>
        </NavigationContainer>
    </SQLiteProvider>
  );
}
const styles = StyleSheet.create({
  water: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 30,
  },
  nutrient: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 30,
  },
  input: {
    width: '80%',
    padding: 10,
    borderWidth: 1,
    borderColor: 'black',
    marginVertical: 5,
  },
  button: {
    backgroundColor: 'blue',
    padding: 10,
    marginVertical: 10,
    width: '80%',
    borderRadius: 5,
  },
  button1: {
    backgroundColor: 'white',
    padding: 10,
    marginVertical: 10,
    width: '50%',
    length: '80%',
    borderRadius: 8,
  },
  button2: {
    backgroundColor: 'white',
    padding: 10,
    marginVertical: 10,
    width: '50%',
    length: '80%',
    borderRadius: 8,
     position: 'absolute',
    top: 0,
    right: 0,
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
  buttonText: {
    color: 'white',
    textAlign: 'center',
    fontSize: 18,
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