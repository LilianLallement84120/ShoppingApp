import React, { useEffect, useContext } from 'react';
import { Text, View } from 'react-native';
import { styles } from './styles';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack'; // Importer createStackNavigator
import Header from '../../../components/Header';
import Settings from '../Settings';
import ListItem from '../../../components/ListItem';
import Button from '../../../components/Button';

const Profile = () => {
    const num = 10;
    const navigation = useNavigation();

    const onLogout = () => {
        console.log('log out clicked');
    };

    const onSettingsPress = () => {
        navigation.navigate('Settings');
    };

    const onMyListingsPress = () => {
        navigation.navigate('MyListing');
    };

    const onNewListingPress = () => {
        navigation.navigate('CreateNewListing');
    };

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <Header title='Profile' showLogout onLogout={onLogout} />
            <View style={styles.container}>
                <View style={styles.content}>
                    <Text style={styles.name}>test</Text>
                    <Text style={styles.email}>test@gmail.com</Text>

                    <ListItem onPress={onMyListingsPress} title='My Listings' subtitle={`You have ${num} listings`} />
                    <ListItem onPress={onSettingsPress} title='Settings' subtitle='Account, FAQ, Contact' />
                </View>

                <Button onPress={onNewListingPress} style={{ flex: 0 }} title='Add New Listing' />
            </View>
        </SafeAreaView>
    );
};

// Créer un navigateur pour gérer la navigation vers l'écran "Settings"


export default Profile;