import React, { useState } from 'react';
import { Feather } from '@expo/vector-icons';
import { RectButton } from 'react-native-gesture-handler';

import {
  Text,
  View,
  Platform,
  ScrollView,
  KeyboardAvoidingView,
} from 'react-native';

import { theme } from '../../../global/styles/theme';
import { styles } from './styles';

import { CategorySelect } from '../../components/CategorySelect';
import { ModalView } from '../../components/ModalView';
import { SmallInput } from '../../components/SmallInput';
import { GuildIcon } from '../../components/GuildIcon';
import { TextArea } from '../../components/TextArea';
import { GuildProps } from '../../components/Guild';
import { Header } from '../../components/Header';
import { Button } from '../../components/Button';
import { Guilds } from '../Guilds';
import Background from '../../components/Background';



export function AppointmentCreate(){
    const [category, setCategory] = useState('');


    return (
        <Background>
            <Header 
            title="Agendar Partida"
            />

            <Text style={[styles.label, {marginLeft: 24, marginTop: 36, marginBottom: 18} ]}>
                Categoria
            </Text>
            <CategorySelect 
            hasCheckBox
            setCategory={category}
            categorySelected={setCategory}
            />

            <View style={styles.form}>
                <RectButton>
                    <View style={styles.select}>
                        {
                            /*<View style={styles.image}/> */
                        <GuildIcon />
                        }
                        <View style={styles.selectBody}>
                            <Text style={styles.label}>
                                Selecione um Servidor
                            </Text>
                        </View>

                        <Feather 
                        name="chevron-right"
                        color={theme.colors.heading}
                        size={18}
                        />
                    </View>
                </RectButton>
                <SmallInput />
            </View>
        </Background>
    )
}
