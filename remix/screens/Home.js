import React, {useState} from 'react';
import { StyleSheet, Text, View, FlatList, TouchableOpacity, ImageBackground } from 'react-native';
import AppButton from '../components/AppButton';
import Screen from '../components/Screen';
import { useNavigation } from '@react-navigation/native';
import colors from '../config/colors';
import RecipePill from '../components/RecipePill';
import { SearchBar, Overlay } from 'react-native-elements';
import axios from 'axios';import Tags from '../components/Tags';
// import BlurView from 'expo-blur';

export default function Home() {
  const navigate = useNavigation().navigate;

  const handleClick = item => {
    navigate('Smoothie', {
      item
    });
  };

  const [visible, setVisible] = useState(false);

  const toggleOverlay = () => {
    setVisible(!visible);
  }

  const navigation = useNavigation();
  const [searchQuery, setSearchQuery] = React.useState('');
  const [data, setData] = React.useState([]);
  const [filteredData, setFilteredData] = React.useState([]);
  const [selectedIngredientFilters, setSelectedIngredientFilters] = React.useState([]);
  const [selectedTagFilters, setSelectedTagFilters] = React.useState([]);

  function shuffle(array) {
    return array.sort(() => Math.random() - 0.5);
  }

  const getData = async () => {
    axios.get(`http://10.217.15.13:3008/api/getAll`).then(doc => {
      const set = shuffle(doc.data);
      setData(set);
      setFilteredData(set);
    }).catch(e => {
      console.log(e);
    });
  };

  React.useEffect(() => {
    getData();
  }, []);

  const onChangeSearch = query => {
    var dataCopy = data;
    setSearchQuery(query);
  }

  return <Screen>
    <SearchBar
      style={{borderRadius: 20, width: 2}}
      placeholder="Search Smoothies"
      // lightTheme
      onChangeText={onChangeSearch}
      value={searchQuery}
    />
    <View style={{
      flex: 1,
      alignItems: "center",
    }}>
      <View style={{backgroundColor: "white", width: "100%", paddingVertical: 10, alignItems: "center", justifyContent: "center"}}>
        <AppButton onPress={toggleOverlay} style={styles.btn} title={`Filters (${selectedIngredientFilters.length + selectedTagFilters.length} applied)`}/>
        <AppButton style={styles.btn} title='Make your own recipe +'/>
      </View>
        {/* <ImageBackground resizeMode='' source={require("../assets/images/seamless.webp")}> */}
      <View style={{padding: 20, paddingTop: 20, width: "100%"}}>

        <Text style={{fontWeight: "bold", fontSize: 24, alignSelf: "flex-start", color: colors.darkerGrey, paddingBottom: 10}}>Browse Recipes</Text>
        <FlatList
          data={filteredData}
          contentContainerStyle={{paddingBottom: 200}}
          renderItem={({item}) => <RecipePill onPress={() => handleClick(item)} info={item.info} tags={item.tags} title={item.name}/>}
          keyExtractor={item => item._id}
        />
        <Overlay overlayStyle={styles.modal} isVisible={visible} onBackdropPress={toggleOverlay}>
          <Text style={{fontSize: 36, left: 20, top: 25 }}>Filters</Text>
          <Text style={{fontSize: 22, left: 20, top: 35 }}>Ingredients</Text>
          <View style={{paddingHorizontal: 15, paddingTop: 10, top: 45,flex: 1, flexDirection: 'row', flexWrap: 'wrap'}}>
            <Tags selected={selectedIngredientFilters.includes("Spinach") ? true : false} select={isSelected => !isSelected ? setSelectedIngredientFilters([...selectedIngredientFilters, "Spinach"]) : setSelectedIngredientFilters(selectedIngredientFilters.filter(e => e !== "Spinach"))} name="Spinach"/>
            <Tags selected={selectedIngredientFilters.includes("Kale") ? true : false} select={isSelected => !isSelected ? setSelectedIngredientFilters([...selectedIngredientFilters, "Kale"]) : setSelectedIngredientFilters(selectedIngredientFilters.filter(e => e !== "Kale"))} name="Kale"/>
            <Tags selected={selectedIngredientFilters.includes("Frozen Bananas") ? true : false} select={isSelected => !isSelected ? setSelectedIngredientFilters([...selectedIngredientFilters, "Frozen Bananas"]) : setSelectedIngredientFilters(selectedIngredientFilters.filter(e => e !== "Frozen Bananas"))} name="Frozen Bananas"/>
            <Tags selected={selectedIngredientFilters.includes("Frozen Strawberries") ? true : false} select={isSelected => !isSelected ? setSelectedIngredientFilters([...selectedIngredientFilters, "Frozen Strawberries"]) : setSelectedIngredientFilters(selectedIngredientFilters.filter(e => e !== "Frozen Strawberries"))} name="Frozen Strawberries"/>
            <Tags selected={selectedIngredientFilters.includes("Peanut Butter") ? true : false} select={isSelected => !isSelected ? setSelectedIngredientFilters([...selectedIngredientFilters, "Peanut Butter"]) : setSelectedIngredientFilters(selectedIngredientFilters.filter(e => e !== "Peanut Butter"))} name="Peanut Butter"/>
            <Tags selected={selectedIngredientFilters.includes("Forzen Blueberries") ? true : false} select={isSelected => !isSelected ? setSelectedIngredientFilters([...selectedIngredientFilters, "Frozen Blueberries"]) : setSelectedIngredientFilters(selectedIngredientFilters.filter(e => e !== "Frozen Blueberries"))}  name="Frozen Blueberries"/>
          </View>
          <Text style={{fontSize: 22, left: 20, top: 95 }}>Tags</Text>
            <View style={{paddingHorizontal: 15, paddingTop: 10, top: 95,flex: 1, flexDirection: 'row', flexWrap: 'wrap'}}>
              <Tags selected={selectedTagFilters.includes("healthy")} select={isSelected => !isSelected ? setSelectedTagFilters([...selectedTagFilters, "healthy"]) : setSelectedTagFilters(selectedTagFilters.filter(e => e !== "healthy"))} name="healthy"/>
              <Tags selected={selectedTagFilters.includes("green")} select={isSelected => !isSelected ? setSelectedTagFilters([...selectedTagFilters, "green"]) : setSelectedTagFilters(selectedTagFilters.filter(e => e !== "green"))} name="green"/>
              <Tags selected={selectedTagFilters.includes("berries")} select={isSelected => !isSelected ? setSelectedTagFilters([...selectedTagFilters, "berries"]) : setSelectedTagFilters(selectedTagFilters.filter(e => e !== "berries"))} name="berries"/>
              <Tags selected={selectedTagFilters.includes("nut")} select={isSelected => !isSelected ? setSelectedTagFilters([...selectedTagFilters, "nut"]) : setSelectedTagFilters(selectedTagFilters.filter(e => e !== "nut"))} name="nut"/>
              <Tags selected={selectedTagFilters.includes("protein")} select={isSelected => !isSelected ? setSelectedTagFilters([...selectedTagFilters, "protein"]) : setSelectedTagFilters(selectedTagFilters.filter(e => e !== "protein"))} name="protein"/>
              <Tags selected={selectedTagFilters.includes("fruit")} select={isSelected => !isSelected ? setSelectedTagFilters([...selectedTagFilters, "fruit"]) : setSelectedTagFilters(selectedTagFilters.filter(e => e !== "fruit"))} name="fuit"/>
            </View>
          <AppButton onPress={() => {
            setVisible(false);
            var dataCopy = data;
            
            for (let ing of selectedIngredientFilters) {
              dataCopy = dataCopy.filter(e => e.ingredients[0].includes(ing));
            }

            for (let tag of selectedTagFilters) {
              dataCopy = dataCopy.filter(e => e.tags.includes(tag));
            }

            setFilteredData(dataCopy);
          }} style={{width: "90%", height: 70}} title="Apply"/>
      </Overlay>
      </View>
{/* </ImageBackground> */}
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
