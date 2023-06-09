import React, { useState } from 'react';
import { TextInput, View, Text, Image, Pressable } from 'react-native';
import { styles } from './styles';

export default function Input({ label, isPassword, placeholder, onChangeText, value }) {

  const [isPasswordVisible, setIsPassordVisible] = useState(false);

  const onEyePress = () => {
    setIsPassordVisible(!isPasswordVisible);
  };

  return (
    <View style={styles.container}>

      <Text style={styles.label}>{label}</Text>

      <View style={styles.inputContainer}>
        <TextInput style={styles.input}
          placeholder={placeholder}
          secureTextEntry={Boolean(isPassword && !isPasswordVisible)}
          onChangeText={onChangeText}
          value={value}
        />
        {isPassword ? <Pressable onPress={onEyePress}>
          <Image style={styles.eye} source={isPasswordVisible ? require('../../assets/eye_closed.png') : require('../../assets/eye.png')}/>
        </Pressable> : null}
      </View>

    </View>
  );
}