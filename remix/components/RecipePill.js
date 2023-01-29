/* eslint-disable react/prop-types */
import React from 'react';
import {
  Text,
  TouchableOpacity,
  StyleSheet,
  Platform,
  Image,
  View,
  ScrollView
} from 'react-native';
import colors from '../config/colors';
import { Ionicons } from '@expo/vector-icons';

function RecipePill({ image, tags, title, onPress }) {
  return (
    <TouchableOpacity style={[styles.recipe]} onPress={onPress}>
      <Image
        source={{uri: "https://cdn.iconscout.com/icon/free/png-256/smoothie-3754965-3142640.png"}}
        style={{
          left: 0,
          width: 50,
          height: 50,
          borderBottomLeftRadius: 16,
          borderTopLeftRadius: 16,
          marginRight: 16,
          marginLeft: 16
        }}
      />
      <View style={{width: "100%"}}>
        <Text style={styles.text}>
          {title}
        </Text>
        <View horizontal={true} style={{flexDirection: "row"}}>
          {tags.map(item => {
            return (
              <Text style={{height: 30, justifyContent: "center", alignItems: "center", paddingVertical: 4, paddingHorizontal: 8, borderWidth: 1, borderRadius: 5, borderColor: colors.darkGrey, marginHorizontal: 3, marginVertical: 5}}>{item}</Text>
            )
          })}
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  recipe: {
    backgroundColor: colors.white,
    borderRadius: 16,
    borderColor: colors.primary,
    borderWidth: 2,
    alignItems: 'center',
    height: 100,
    flexDirection: 'row',
    marginTop: 20,
    width: "100%"
  },
  text: {
    color: '#100101',
    fontWeight: 'bold',
    fontFamily: Platform.OS === 'ios' ? 'Helvetica Neue' : 'sans-serif',
    marginTop: '2%'
  },
});

export default RecipePill;
