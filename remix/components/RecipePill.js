/* eslint-disable react/prop-types */
import React from 'react';
import {
  Text,
  TouchableOpacity,
  StyleSheet,
  Platform,
  Image,
  View,
} from 'react-native';
import colors from '../config/colors';
import { Ionicons } from '@expo/vector-icons';

function RecipePill({ image, title, recipe, date, onPress }) {
  return (
    <TouchableOpacity style={[styles.recipe]} onPress={onPress}>
      <Image
        source={image}
        style={{
          left: 0,
          width: 120,
          height: 100,
          borderBottomLeftRadius: 16,
          borderTopLeftRadius: 16,
          marginRight: 16,
        }}
      />
      <View>
        <Text numberOfLines={1} style={styles.text}>
          {title.length < 18 ? `${title}` : `${title.substring(0, 16)}...`}
        </Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  recipe: {
    backgroundColor: colors.white,
    borderRadius: 16,
    alignItems: 'center',
    height: 100,
    flexDirection: 'row',
    marginBottom: 20,
    width: "90%",
    left: "2.5%",
    shadowOffset: { height: 1, width: 1 }, // IOS
    shadowOpacity: 0.2, // IOS
    shadowRadius: 3, //IOS
    elevation: 2, // Android
  },
  text: {
    color: '#100101',
    fontSize: 18,
    fontWeight: 'bold',
    fontFamily: Platform.OS === 'ios' ? 'Helvetica Neue' : 'sans-serif',
    marginTop: '2%',
  },
});

export default RecipePill;
