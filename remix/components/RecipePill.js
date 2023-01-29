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
    fontSize: 18,
    fontWeight: 'bold',
    fontFamily: Platform.OS === 'ios' ? 'Helvetica Neue' : 'sans-serif',
    marginTop: '2%',
  },
});

export default RecipePill;
