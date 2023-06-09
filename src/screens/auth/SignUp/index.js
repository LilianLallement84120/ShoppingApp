import React, { useEffect, useState } from 'react';
import { Text, ScrollView, View, SafeAreaView } from 'react-native';
import Input from '../../../components/Input';
import { styles } from './styles';
import Button from '../../../components/Button';
import Checkbox from '../../../components/Checkbox';

export default function SignUp() {

  const [isChecked, setIsChecked] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        return await fetch('https://dummyjson.com/auth/login', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({

            username: 'kminchelle',
            password: '0lelplR',
            // expiresInMins: 60, // optional
          })
        })
          .then(res => res.json())
          .then(console.log);

      } catch (error) {
        console.log('error', error);
      }

    };
    const res = fetchData();
    console.log('res', res);
  });

  return (
    <ScrollView>
      <View style={styles.container}>
        <Input label='Name' placeholder='John Does'/>
        <Input label='Email' placeholder='test@test.fr'/>
        <Input label='Password' placeholder='******' isPassword/>
        <View style={{ flexDirection: 'row', marginTop: 8 }}>
          <Checkbox setChecked={setIsChecked} checked={isChecked}/>
          <Text style={styles.agreeText}>I agree with
            <Text style={styles.agreeTextBold}> Terms </Text>
           &
            <Text style={styles.agreeTextBold}> Privacy</Text>
          </Text>
        </View>
        <Button style={{ marginTop: 16 }} title={'Sign Up'}/>
      </View>
    </ScrollView>
  );
}
