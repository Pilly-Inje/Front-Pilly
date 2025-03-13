import React from 'react';
import {SafeAreaProvider, SafeAreaView} from 'react-native-safe-area-context';
import {Image, Text, View, StyleSheet, TouchableOpacity} from 'react-native';

function LoginScreen({navigation}: {navigation: any}) {
  return (
    <>
      <SafeAreaProvider>
        <SafeAreaView style={styles.container}>
          <View style={styles.imageBox}>
            <Image
              source={require('./assets/logo.png')}
              style={{width: 250, height: 250}}
            />
          </View>
          <View style={styles.title}>
            <Text style={styles.titleText}>PILLY</Text>
          </View>
          <View style={styles.loginBox}>
            <TouchableOpacity>
              <Image
                source={require('./assets/loginkakao.png')}
                style={{width: 220, height: 50}}
              />
            </TouchableOpacity>
            <Text style={styles.text}>3초 안에 쉽고 간편하게</Text>
          </View>
        </SafeAreaView>
      </SafeAreaProvider>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  imageBox: {
    flex: 5,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  title: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: '5%',
  },
  titleText: {
    fontSize: 60,
    fontWeight: 'bold',
    color: '#0169CD',
  },
  loginBox: {
    flex: 4,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  text: {
    fontSize: 12,
    marginTop: '2%',
    color: '#A3A3A3',
  },
});

export default LoginScreen;
