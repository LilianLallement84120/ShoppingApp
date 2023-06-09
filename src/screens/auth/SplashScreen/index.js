import React from 'react';
import { ScrollView, View, Text, Image, Pressable } from 'react-native';
import Button from '../../../components/Button';
import { styles } from './styles';

export default function SplashScreen({ navigation }) {

  const onSignIn = () => {
    navigation.navigate('SignIn');
  };

  const onSignUp = () => {
    navigation.navigate('SignUp');
  };

  return (
    <ScrollView>
      <View style={styles.container}>
        <Image resizeMethod='scale' style={styles.image} source={require('../../../assets/splashImage.png')}/>

        <View style={styles.titleContainer}>
          <Text style={styles.title}>You'll find</Text>
          <Text style={[styles.title, styles.innerTitle]}>All you need</Text>
          <Text style={styles.title}>Here</Text>
        </View>

        <View style={styles.buttonContainer}>
          <Button title='Sign Up' onPress={onSignUp}/>
        </View>

        <Pressable onPress={onSignIn} hitSlop={10}>
          <Text style={styles.signIn}>Sign In</Text>
        </Pressable>

      </View>

    </ScrollView>
  );
}
