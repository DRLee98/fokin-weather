import React from 'react';
import PropTypes from 'prop-types';
import {View, Text, StyleSheet, StatusBar} from 'react-native';
import { LinearGradient } from "expo-linear-gradient";
import {MaterialCommunityIcons} from '@expo/vector-icons';

const weatherOptions = {
    Thunderstorm:{
        iconName: "weather-lightning",
        gradient: ["#0f0c29", "#302b63"],
        title: "",
        subtitle: ""
    },
    Drizzle:{
        iconName: "weather-hail",
        gradient: ["#2193b0", "#6dd5ed"],
        title: "",
        subtitle: ""
    },
    Rain:{
        iconName: "weather-rainy",
        gradient: ["#373B44", "#4286f4"],
        title: "",
        subtitle: ""
    },
    Snow:{
        iconName: "weather-snowy",
        gradient: ["#2c3e50", "#bdc3c7"],
        title: "",
        subtitle: ""
    },
    Atmosphere:{
        iconName: "weather-hail",
        gradient: [],
        title: "",
        subtitle: ""
    },
    Clear:{
        iconName: "weather-sunny",
        gradient: ["#2BC0E4", "#EAECC6"],
        title: "",
        subtitle: ""
    },
    Clouds:{
        iconName: "weather-cloudy",
        gradient: ["#2c3e50", "#bdc3c7"],
        title: "",
        subtitle: ""
    }
}

export default function Weather({temp, condition}){
    return(
        <LinearGradient style={styles.container} colors={weatherOptions[condition].gradient}>
            <StatusBar barStyle="light-content" />
            <View style={styles.halfcontainer}>
                <MaterialCommunityIcons size={96} name={weatherOptions[condition].iconName} color="white" />
                <Text style={styles.temp}>{temp}℃</Text>
            </View>
            <View style={styles.halfcontainer}>
                <Text style={styles.title}>{weatherOptions[condition].title}</Text>
                <Text style={styles.subtitle}>{weatherOptions[condition].subtitle}</Text>
            </View>
        </LinearGradient>
    );
}

Weather.PropTypes = {
    temp: PropTypes.number.isRequired,
    condition: PropTypes.oneOf([
        "Thunderstorm",
        "Drizzle",
        "Rain",
        "Snow",
        "Atmosphere",
        "Clear",
        "Clouds"
    ]).isRequired
};

const styles = StyleSheet.create({
    container :{
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    temp :{
        fontSize: 42,
        color: "white"
    },
    halfcontainer :{
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    title :{
        color: "white",
        fontSize: 44,
        fontWeight: "300",
        marginBottom: 10
    },
    subtitle :{
        fontWeight: "600",
        color: "white",
        fontSize: 24
    },
    textContainer :{
        paddingHorizontal: 20,
        alignItems: "center"
    }
});