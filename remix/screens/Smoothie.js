import React, {useState} from 'react';
import { StyleSheet, Text, View, Image, FlatList, TouchableOpacity } from 'react-native';
import Screen from '../components/Screen';
import smoothieIcon from '../assets/images/blender/Banana.png';
import colors from '../config/colors';
import Tags from '../components/Tags';

export default function Smoothie({ route, navigation }) {
    const { item } = route.params;

    return <Screen style={{flex: 1, alignItems: "center", justifyContent: "center", backgroundColor: "white"}}>
        <View style={{flexDirection: "row", justifyContent: "center", alignItems: "center", padding: 30}}>
            <View style={{padding: 10, flex: 3}}>
                <Text style={{fontWeight: "bold", fontSize: 30}}>{item.name}</Text>
                <Text style={{fontSize: 13, marginTop: 20}}>{item.description}</Text>
            </View>
            <Image
                source={smoothieIcon}
                style={{
                    width: 150,
                    height: 150,
                    tintColor: item.info.color,
                    padding: 20,
                    flex: 1
                }}
            />
        </View>
        <View style={{width: "100%", justifyContent: "flex-start", paddingHorizontal: 40}}>
            <Text style={{fontWeight: "bold", fontSize: 22}}>Ingredients</Text>
            <View style={{flexDirection: "row", justifyContent: "space-between"}}>
                <View>
                    <Text style={{fontWeight: "bold", fontSize: 18, marginTop: 10, color: colors.lightGrey}}>Solid</Text>
                    {item.ingredients[0].map((item, index) => {
                        return <Text key={index}>{item}</Text>
                    })}
                </View>
                <View>
                    <Text style={{fontWeight: "bold", fontSize: 18, marginTop: 10, color: colors.lightGrey}}>Liquid</Text>
                    {item.ingredients[1].map((item, index) => {
                        return <Text key={index}>{item}</Text>
                    })}
                </View>
                <View>
                    <Text style={{fontWeight: "bold", fontSize: 18, marginTop: 10, color: colors.lightGrey}}>Add ons</Text>
                    {item.ingredients[2].map((item, index) => {
                        return <Text key={index}>{item}</Text>
                    })}
                </View>
            </View>
        </View>
        <View style={{width: "100%", justifyContent: "flex-start", paddingHorizontal: 40, marginTop: 40}}>
            <Text style={{fontWeight: "bold", fontSize: 22}}>Tags</Text>
            <View style={{flexDirection: "row", marginTop: 20}}>
                {item.tags.map((item, index) => {
                    return <Tags key={index} selected={false} select={() => {}} name={item}/>
                })}
            </View>
        </View>
    </Screen>;
}
