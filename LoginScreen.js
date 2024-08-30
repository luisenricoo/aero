import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Pressable, Alert, SafeAreaView, Image } from 'react-native';
import { SQLiteProvider, useSQLiteContext } from 'expo-sqlite';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { widthPercentageToDP, heightPercentageToDP } from 'react-native-responsive-screen';
import { useState } from 'react';

const LoginScreen = ({navigation}) => {

    const db = useSQLiteContext();
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');
    //function to handle login logic
    const handleLogin = async() => {
        if(userName.length === 0 || password.length === 0) {
            Alert.alert('Attention','Please enter both username and password');
            return;
        }
        try {
            const user = await db.getFirstAsync('SELECT * FROM users WHERE username = ?', [userName]);
            if (!user) {
                Alert.alert('Error', 'Username does not exist !');
                return;
            }
            const validUser = await db.getFirstAsync('SELECT * FROM users WHERE username = ? AND password = ?', [userName, password]);
            if(validUser) {
                Alert.alert('Success', 'Login successful');
                navigation.navigate('Home', {user:userName});
                setUserName('');
                setPassword('');
            } else {
                Alert.alert('Error', 'Incorrect password');
            }
        } catch (error) {
            console.log('Error during login : ', error);
        }
    }
    return (
        <SafeAreaView style={styles.container}>
          <SafeAreaView style = {styles.headerStyle}>
                <Image source={require('../assets/aero.png')} style = {styles.aeroLogo}/>
            </SafeAreaView>
            
            <Text style={styles.title}>Aerocare</Text>
            <TextInput 
                style={styles.input}
                placeholder='Username'
                value={userName}
                onChangeText={setUserName}
            />
            <TextInput 
                style={styles.input}
                placeholder='Password'
                secureTextEntry
                value={password}
                onChangeText={setPassword}
            />
            <Pressable style={styles.button} onPress={handleLogin}>
                <Text style={styles.buttonText} >Login</Text>
            </Pressable>
            <Pressable style={styles.link} onPress={() => navigation.navigate('Register')}>
                <Text style={styles.linkText}>Don't have an account? Register</Text>
            </Pressable>
        </SafeAreaView>
    )
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'white',
      alignItems: 'center',
      justifyContent: 'center',
    },
    title: {
      alignContent: "stretch",
      height: heightPercentageToDP('20%'),
      fontSize: 35,
      fontWeight: 'bold',
      marginBottom: 30,
      bottom: 100
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
    },
    headerStyle:{
      backgroundColor: "white",
      height: heightPercentageToDP('10%'),
  },
  aeroLogo: {
      alignContent: "stretch",
      width: 250,
      height: 250,  
      marginTop: 50,
      top: 0,
      left: 0,
  },
  
  });

  export default LoginScreen;