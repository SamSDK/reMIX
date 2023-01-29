import React from 'react';
import { StyleSheet, Text, View, FlatList, TouchableOpacity } from 'react-native';
import AppButton from '../components/AppButton';
import Screen from '../components/Screen';
import { useNavigation } from '@react-navigation/native';
import colors from '../config/colors';
import RecipePill from '../components/RecipePill';
import { SearchBar } from 'react-native-elements';

export default function Home() {
  const navigation = useNavigation();

  return <Screen>
    <SearchBar
      placeholder="Type Here..."
      lightTheme
      // onChangeText={this.updateSearch}
      // value={search}
    />
    <View style={{
      flex: 1,
      alignItems: "center",
    }}>
      <TouchableOpacity style={{
          width: "90%",
          padding: 30,
          margin: 10,
          borderRadius: 10,
          backgroundColor: "white"
        }}>
        <Text style={{color: colors.darkGrey, fontSize: 18}}>Filters (0 applied)</Text>
      </TouchableOpacity>
      <TouchableOpacity style={{
          width: "90%",
          padding: 30,
          margin: 10,
          borderRadius: 10,
          borderWidth: 3,
          borderColor: colors.primary,
          alignItems: "center"
        }}>
        <Text style={{fontWeight: "bold", color: colors.primary, fontSize: 24}}>Make your own recipe</Text>
      </TouchableOpacity>
      <View style={{padding: 20, paddingTop: 5, width: "100%"}}>
        <Text style={{fontWeight: "bold", fontSize: 28, alignSelf: "flex-start"}}>Browse Recipes</Text>
        <FlatList
          // data={DATA}
          // renderItem={({item}) => <Item title={item.title} />}
          // keyExtractor={item => item.id}
        />
      </View>
    </View>
  </Screen>;
}

const styles = StyleSheet.create({
  container: {},
});
