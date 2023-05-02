import React from 'react';
import {Text, StyleSheet, View} from "react-native";
import { Entypo, Feather, MaterialCommunityIcons } from '@expo/vector-icons';

export default function Output(){
    const outText = {
        color: '#FDFEFE',
        fontWeight: 700,
        fontSize: 56,
    }
    let num = 12936;
    return (
        <View>
            <Text style={outText}>{num}</Text>
        </View>
    );
}

export function InputNumbers (){
    const inpText = {
        color: '#D2D5D8',
        fontWeight: 700,
        fontSize: 28,
        textAlign: 'right',
    }
    return (
        <View style={[{flexDirection: 'row', justifyContent: 'flex-end', alignItems: 'center'}]}>
            <Text style={inpText}>308</Text>
            <Feather name="x" size={28} color="#974A52" />
            <Text style={inpText}>42</Text>
        </View>
    );
}
