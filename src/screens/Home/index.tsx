import React, { useState } from 'react';
import { View, FlatList } from 'react-native';
import { styles } from './styles';
import Profile from '../../components/Profile';

export default function Home() {
    return (
        <View style={styles.header}>
            <Profile />
        </View>
    )
}
