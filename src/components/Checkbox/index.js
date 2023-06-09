import React, { useState } from 'react';
import { Pressable, View, Image } from 'react-native';
import { styles } from './styles';

export default function Checkbox({ checked, setChecked }) {

  return (
    <Pressable style={styles.container} onPress={() => setChecked(!checked)}>
      <View style={styles.checkbox}>
        {checked ? <View style={styles.innerCheckbox}>
          <Image style={styles.image} source={require('../../assets/check.png')}/>
        </View> : null}
      </View>
    </Pressable>
  );
}
