import React, { useState, useEffect, useContext } from 'react';
import { Alert, ScrollView, View } from 'react-native';
import Input from '../../../components/Input';
import Button from '../../../components/Button';
import { styles } from './styles';
import { UserContext } from '../../../../App';

function SignIn() {

  const { user, setUser } = useContext(UserContext);

  const [values, setValues] = useState({});

  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const onSubmit = async () => {

    if (values.username && values.password) {
      await fetch('https://dummyjson.com/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({

          username: values.username, // 'kminchelle',
          password: values.password, // '0lelplR',
          // expiresInMins: 60, // optional
        })
      })
        .then(res => res.json())
        .then((v) => {
          if (v.token) {
            setUser(v);
          } else {
            Alert.alert(v.message);
          }
        })
        .catch(e => console.error('e : ', e));
    } else {
      Alert.alert('Veuillez remplir les champs');
    }

    console.log('values : ', values);
  };

  const onChangePassword = (v) => {
    setPassword(v);
  };

  const onChange = (key, value) => {
    setValues(v => ({ ...v, [key]: value }));
  };

  return (
    <ScrollView>
      <View style={styles.container}>
        <Input value={values.username} label='Username' placeholder='John Doe' onChangeText={v => onChange('username', v)}/>
        <Input value={values.password} label='Password' placeholder='******' isPassword onChangeText={v => onChange('password', v)}/>
        <Button style={{ marginTop: 8 }} title={'Sign In'} onPress={onSubmit}/>
      </View>
    </ScrollView>
  );
}

export default React.memo(SignIn);
