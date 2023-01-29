import React, {useState} from 'react';
import { StyleSheet, Text, View, FlatList, TouchableOpacity } from 'react-native';
import AppButton from '../components/AppButton';
import Screen from '../components/Screen';
import { useNavigation } from '@react-navigation/native';
import colors from '../config/colors';
import RecipePill from '../components/RecipePill';
import { SearchBar, Overlay } from 'react-native-elements';
import axios from 'axios';import Tags from '../components/Tags';

export default function Home() {
  
    const [visible, setVisible] = useState(false);
  
    const toggleOverlay = () => {
      setVisible(!visible);
    }

    const navigation = useNavigation();
    const [searchQuery, setSearchQuery] = React.useState('');
  const [data, setData] = React.useState([]);

  function shuffle(array) {
    return array.sort(() => Math.random() - 0.5);
  }

  const getData = async () => {
    axios.get(`http://10.217.15.13:3008/api/getAll`).then(doc => {
      setData(shuffle(doc.data).splice(0, 15));
      console.log(data);
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
        <AppButton onPress={toggleOverlay} style={styles.btn} title="Filter"/>
        <AppButton style={styles.btn} title='Make your own recipe +'/>
      </View>
      <View style={{padding: 20, paddingTop: 20, width: "100%"}}>
        <Text style={{fontWeight: "bold", fontSize: 24, alignSelf: "flex-start", color: colors.darkerGrey}}>Browse Recipes</Text>
        <FlatList
          data={data}
          contentContainerStyle={{paddingBottom: 200}}
          renderItem={({item}) => <RecipePill info={item.info} tags={item.tags} title={item.name}/>}
          keyExtractor={item => item._id}
        />
        <Overlay overlayStyle={styles.modal} isVisible={visible} onBackdropPress={toggleOverlay}>
          <Text style={{fontSize: 36, left: 20, top: 25 }}>Filters</Text>
          <Text style={{fontSize: 22, left: 20, top: 35 }}>Ingredients</Text>
          <View style={{paddingHorizontal: 15, paddingTop: 10, top: 45,flex: 1, flexDirection: 'row', flexWrap: 'wrap'}}>
            <Tags name="spinach"/>
            <Tags name="almond milk"/>
            <Tags name="frozen bananas"/>
            <Tags name="frozen strawberries"/>
            <Tags name="protein powder"/>
            <Tags name="peanut butter"/>
            <Tags name="frozen blueberries"/>
          </View>
          <Text style={{fontSize: 22, left: 20, top: 95 }}>Tags</Text>
            <View style={{paddingHorizontal: 15, paddingTop: 10, top: 95,flex: 1, flexDirection: 'row', flexWrap: 'wrap'}}>
              <Tags name="healthy"/>
              <Tags name="green"/>
              <Tags name="berries"/>
              <Tags name="nut"/>
              <Tags name="protein"/>
              <Tags name="fuit"/>
            </View>
          <AppButton style={{width: "90%", height: 70}} title="Apply"/>
      </Overlay>
      </View>
    </View>
  </Screen>;
}

const styles = StyleSheet.create({
  modal: {
   width: '90%',
   height: '75%',
   borderRadius: 48,
  },
  btn: {
    width: "90%",
    padding: 20,
    margin: 20,
    borderRadius: 10,
    alignItems: "center",
    backgroundColor: colors.primary
  },
});
