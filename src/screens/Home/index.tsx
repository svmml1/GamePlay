import React, { useState } from 'react';
import { View, FlatList } from 'react-native';
import { styles } from './styles';
import {Profile} from '../../components/Profile';
import { ButtonAdd } from '../../components/ButtonAdd';

export function Home() {
    return (
        <View>
        <View style={styles.header}>
            <Profile />
            <ButtonAdd />
        </View>
        </View>
    )
}
