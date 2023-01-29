import React from 'react';
import { StyleSheet, Text, View, FlatList, TouchableOpacity } from 'react-native';
import AppButton from '../components/AppButton';
import Screen from '../components/Screen';
import { useNavigation } from '@react-navigation/native';
import colors from '../config/colors';
import RecipePill from '../components/RecipePill';
import { SearchBar } from 'react-native-elements';
import axios from 'axios';

export default function Home() {
  const navigation = useNavigation();
  const [searchQuery, setSearchQuery] = React.useState('');
  const [data, setData] = React.useState([]);

  function shuffle(array) {
    return array.sort(() => Math.random() - 0.5);
  }

  const getData = async () => {
    axios.get(`http://10.217.15.13:3008/api/getAll`).then(doc => {
      setData(shuffle(doc.data).splice(0, 15));
    }).catch(e => {
      console.log(e);
    });
  };

  React.useEffect(() => {
    getData();
  }, []);

  const onChangeSearch = query => setSearchQuery(query);

  return <Screen>
    <SearchBar
      placeholder="Type Here..."
      lightTheme
      onChangeText={onChangeSearch}
      value={searchQuery}
    />
    <View style={{
      flex: 1,
      alignItems: "center",
    }}>
      <View style={{backgroundColor: "white", width: "100%", paddingVertical: 10, alignItems: "center", justifyContent: "center"}}>
        <TouchableOpacity style={{
            width: "90%",
            padding: 20,
            margin: 10,
            borderRadius: 10,
            alignItems: "center",
            backgroundColor: colors.primary,
          }}>
          <Text style={{color: colors.white, fontSize: 18}}>Filters (0 applied)</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{
            width: "90%",
            padding: 20,
            margin: 10,
            borderRadius: 10,
            alignItems: "center",
            backgroundColor: colors.primary
          }}>
          <Text style={{fontWeight: "bold", color: colors.white, fontSize: 18}}>Make your own recipe +</Text>
        </TouchableOpacity>
      </View>
      <View style={{padding: 20, paddingTop: 20, width: "100%"}}>
        <Text style={{fontWeight: "bold", fontSize: 24, alignSelf: "flex-start", color: colors.darkerGrey}}>Browse Recipes</Text>
        <FlatList
          data={data}
          contentContainerStyle={{paddingBottom: 200}}
          renderItem={({item}) => <RecipePill tags={item.tags} title={item.name}/>}
          keyExtractor={item => item._id}
        />
      </View>
    </View>
  </Screen>;
}

const styles = StyleSheet.create({
  container: {},
});
