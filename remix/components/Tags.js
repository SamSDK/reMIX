import React, {useState} from 'react';
import colors from '../config/colors';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';


function Tags(props) {
    const [isPressed, setIsPressed] = useState(props.selected);

    const handleSelect = () => {
      if (props.canSelect) {
        setIsPressed(!isPressed);
        if (isPressed) {
          props.select(true);
        } else {
          props.select(false);
        }
      }
    }

    return (
      <View>
        <TouchableOpacity
          style={[styles.tag, isPressed ? { backgroundColor: colors.primary } : {}]}
          onPress={handleSelect}
        >
          <Text style={[styles.name, isPressed ? { color: colors.white } : {}]}>{props.name}</Text>
        </TouchableOpacity>
      </View>
    );
  }
  

export default Tags;

const styles = StyleSheet.create({
  tag: {
    paddingVertical: 12,
    paddingHorizontal: 16,
    backgroundColor: colors.white,
    borderColor: colors.primary,
    borderWidth: 1,
    alignSelf: 'center',
    borderRadius: 24,
    marginHorizontal: 4,
    marginVertical: 4,
  },
  name: {
    color: colors.primary,
    fontSize: 16,
    fontWeight: 'bold',
  },
});