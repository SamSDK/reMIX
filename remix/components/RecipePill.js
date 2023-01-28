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

function RecipePill({ image, title, organizer, date, onPress }) {
  return (
    <TouchableOpacity style={[styles.eventBanner]} onPress={onPress}>
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
        <Text numberOfLines={1} style={{ fontSize: 16, color: '#969696' }}>
          By{' '}
          {organizer.length < 22
            ? `${organizer}`
            : `${organizer.substring(0, 20)}...`}
        </Text>
        <View style={styles.date}>
          <Ionicons
            name='ios-calendar-outline'
            size={20}
            color={colors.primary}
          />
          <Text style={{ marginLeft: 10 }}>{date}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  eventBanner: {
    backgroundColor: colors.white,
    borderRadius: 16,
    alignItems: 'center',
    height: 100,
    flexDirection: 'row',
    marginBottom: 20,
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
  date: {
    flexDirection: 'row',
    marginTop: 8,
  },
});

export default RecipePill;