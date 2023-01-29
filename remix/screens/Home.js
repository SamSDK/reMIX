import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
  ImageBackground,
  Platform,
  Keyboard,
  TouchableWithoutFeedback
} from 'react-native';
import AppButton from '../components/AppButton';
import Screen from '../components/Screen';
import { useNavigation } from '@react-navigation/native';
import colors from '../config/colors';
import RecipePill from '../components/RecipePill';
import { SearchBar, Overlay } from 'react-native-elements';
import axios from 'axios';
import Tags from '../components/Tags';
import AppInput from '../components/AppInput';
// import BlurView from 'expo-blur';

export default function Home() {
  const navigate = useNavigation().navigate;

  const handleClick = (item) => {
    navigate('Smoothie', {
      item,
    });
  };

  const [visible, setVisible] = useState(false);

  const toggleOverlay = () => {
    setVisible(!visible);
  };

  const [visible2, setVisible2] = useState(false);

  const toggleOverlay2 = () => {
    setVisible2(!visible2);
  };

  const navigation = useNavigation();
  const [searchQuery, setSearchQuery] = React.useState('');
  const [data, setData] = React.useState([]);
  const [filteredData, setFilteredData] = React.useState([]);
  const [selectedIngredientFilters, setSelectedIngredientFilters] =
    React.useState([]);
  const [selectedTagFilters, setSelectedTagFilters] = React.useState([]);
  const [mixIngredients, setMixIngredients] = React.useState([]);
  const [mixIngredientVal, setMixIngredientVal] = React.useState("");
  const [mixTags, setMixTags] = React.useState([]);
  const [mixTagsVal, setMixTagsVal] = React.useState("");
  const [mixName, setMixName] = React.useState("");
  const [mixDescription, setMixDescription] = React.useState("");

  function shuffle(array) {
    return array.sort(() => Math.random() - 0.5);
  }

  const getData = async () => {
    axios
      .get(`http://10.217.15.13:3008/api/getAll`)
      .then((doc) => {
        const set = shuffle(doc.data);
        setData(set);
        setFilteredData(set);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  React.useEffect(() => {
    getData();
  }, []);

  const onChangeSearch = (query) => {
    var dataCopy = data;
    setSearchQuery(query);
  };

  return (
    <Screen>
      <SearchBar
        style={{ borderRadius: 20, width: 2 }}
        placeholder="Search Smoothies"
        // lightTheme
        onChangeText={onChangeSearch}
        value={searchQuery}
      />
      <View
        style={{
          flex: 1,
          alignItems: 'center',
        }}
      >
        <View
          style={{
            backgroundColor: 'white',
            width: '100%',
            paddingVertical: 10,
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <AppButton
            onPress={toggleOverlay}
            style={styles.btn}
            title={`Filters (${
              selectedIngredientFilters.length + selectedTagFilters.length
            } applied)`}
          />
          <AppButton
            onPress={toggleOverlay2}
            style={styles.btn}
            title="Make your own recipe +"
          />
        </View>
        {/* <ImageBackground resizeMode='' source={require("../assets/images/seamless.webp")}> */}
          <Text
            style={{
              fontWeight: 'bold',
              fontSize: 24,
              alignSelf: 'flex-start',
              color: colors.darkerGrey,
              paddingBottom: 10,
              backgroundColor: colors.white,
              width: "100%",
              paddingLeft: 20,
              borderBottomLeftRadius: 28,
              borderBottomRightRadius: 28,
              shadowColor: "grey", // IOS
              shadowOffset: { height: 2, width: 1 }, // IOS
              shadowOpacity: 0.1, // IOS
              shadowRadius: 2, //IOS
              elevation: 1, // Android
            }}
          >
            Browse Recipes
          </Text>
        <View style={{ padding: 20, paddingTop: 0, width: '100%' }}>
          <FlatList
            data={filteredData}
            contentContainerStyle={{ paddingBottom: 200 }}
            renderItem={({ item }) => (
              <RecipePill
                onPress={() => handleClick(item)}
                info={item.info}
                tags={item.tags}
                title={item.name}
              />
            )}
            keyExtractor={(item) => item._id}
          />
          <Overlay
            overlayStyle={styles.modal}
            isVisible={visible}
            onBackdropPress={toggleOverlay}
          >
            <Text style={{ fontSize: 36, left: 20, top: 25 }}>Filters</Text>
            <Text style={{ fontSize: 22, left: 20, top: 35 }}>Ingredients</Text>
            <View
              style={{
                paddingHorizontal: 15,
                paddingTop: 10,
                top: 45,
                flex: 1,
                flexDirection: 'row',
                flexWrap: 'wrap',
              }}
            >
              <Tags
                canSelect={true}
                selected={
                  selectedIngredientFilters.includes('Spinach') ? true : false
                }
                select={(isSelected) =>
                  !isSelected
                    ? setSelectedIngredientFilters([
                        ...selectedIngredientFilters,
                        'Spinach',
                      ])
                    : setSelectedIngredientFilters(
                        selectedIngredientFilters.filter((e) => e !== 'Spinach')
                      )
                }
                name="Spinach"
              />
              <Tags
                canSelect={true}
                selected={
                  selectedIngredientFilters.includes('Kale') ? true : false
                }
                select={(isSelected) =>
                  !isSelected
                    ? setSelectedIngredientFilters([
                        ...selectedIngredientFilters,
                        'Kale',
                      ])
                    : setSelectedIngredientFilters(
                        selectedIngredientFilters.filter((e) => e !== 'Kale')
                      )
                }
                name="Kale"
              />
              <Tags
                canSelect={true}
                selected={
                  selectedIngredientFilters.includes('Frozen Bananas')
                    ? true
                    : false
                }
                select={(isSelected) =>
                  !isSelected
                    ? setSelectedIngredientFilters([
                        ...selectedIngredientFilters,
                        'Frozen Bananas',
                      ])
                    : setSelectedIngredientFilters(
                        selectedIngredientFilters.filter(
                          (e) => e !== 'Frozen Bananas'
                        )
                      )
                }
                name="Frozen Bananas"
              />
              <Tags
                canSelect={true}
                selected={
                  selectedIngredientFilters.includes('Frozen Strawberries')
                    ? true
                    : false
                }
                select={(isSelected) =>
                  !isSelected
                    ? setSelectedIngredientFilters([
                        ...selectedIngredientFilters,
                        'Frozen Strawberries',
                      ])
                    : setSelectedIngredientFilters(
                        selectedIngredientFilters.filter(
                          (e) => e !== 'Frozen Strawberries'
                        )
                      )
                }
                name="Frozen Strawberries"
              />
              <Tags
                canSelect={true}
                selected={
                  selectedIngredientFilters.includes('Peanut Butter')
                    ? true
                    : false
                }
                select={(isSelected) =>
                  !isSelected
                    ? setSelectedIngredientFilters([
                        ...selectedIngredientFilters,
                        'Peanut Butter',
                      ])
                    : setSelectedIngredientFilters(
                        selectedIngredientFilters.filter(
                          (e) => e !== 'Peanut Butter'
                        )
                      )
                }
                name="Peanut Butter"
              />
              <Tags
                canSelect={true}
                selected={
                  selectedIngredientFilters.includes('Forzen Blueberries')
                    ? true
                    : false
                }
                select={(isSelected) =>
                  !isSelected
                    ? setSelectedIngredientFilters([
                        ...selectedIngredientFilters,
                        'Frozen Blueberries',
                      ])
                    : setSelectedIngredientFilters(
                        selectedIngredientFilters.filter(
                          (e) => e !== 'Frozen Blueberries'
                        )
                      )
                }
                name="Frozen Blueberries"
              />
            </View>
            <Text style={{ fontSize: 22, left: 20, top: 95 }}>Tags</Text>
            <View
              style={{
                paddingHorizontal: 15,
                paddingTop: 10,
                top: 95,
                flex: 1,
                flexDirection: 'row',
                flexWrap: 'wrap',
              }}
            >
              <Tags
                canSelect={true}
                selected={selectedTagFilters.includes('healthy')}
                select={(isSelected) =>
                  !isSelected
                    ? setSelectedTagFilters([...selectedTagFilters, 'healthy'])
                    : setSelectedTagFilters(
                        selectedTagFilters.filter((e) => e !== 'healthy')
                      )
                }
                name="healthy"
              />
              <Tags
                canSelect={true}
                selected={selectedTagFilters.includes('green')}
                select={(isSelected) =>
                  !isSelected
                    ? setSelectedTagFilters([...selectedTagFilters, 'green'])
                    : setSelectedTagFilters(
                        selectedTagFilters.filter((e) => e !== 'green')
                      )
                }
                name="green"
              />
              <Tags
                canSelect={true}
                selected={selectedTagFilters.includes('berries')}
                select={(isSelected) =>
                  !isSelected
                    ? setSelectedTagFilters([...selectedTagFilters, 'berries'])
                    : setSelectedTagFilters(
                        selectedTagFilters.filter((e) => e !== 'berries')
                      )
                }
                name="berries"
              />
              <Tags
                canSelect={true}
                selected={selectedTagFilters.includes('nut')}
                select={(isSelected) =>
                  !isSelected
                    ? setSelectedTagFilters([...selectedTagFilters, 'nut'])
                    : setSelectedTagFilters(
                        selectedTagFilters.filter((e) => e !== 'nut')
                      )
                }
                name="nut"
              />
              <Tags
                canSelect={true}
                selected={selectedTagFilters.includes('protein')}
                select={(isSelected) =>
                  !isSelected
                    ? setSelectedTagFilters([...selectedTagFilters, 'protein'])
                    : setSelectedTagFilters(
                        selectedTagFilters.filter((e) => e !== 'protein')
                      )
                }
                name="protein"
              />
              <Tags
                canSelect={true}
                selected={selectedTagFilters.includes('fruit')}
                select={(isSelected) =>
                  !isSelected
                    ? setSelectedTagFilters([...selectedTagFilters, 'fruit'])
                    : setSelectedTagFilters(
                        selectedTagFilters.filter((e) => e !== 'fruit')
                      )
                }
                name="fuit"
              />
            </View>
            <AppButton
              onPress={() => {
                setVisible(false);
                var dataCopy = data;

                for (let ing of selectedIngredientFilters) {
                  dataCopy = dataCopy.filter((e) =>
                    e.ingredients[0].includes(ing)
                  );
                }

                for (let tag of selectedTagFilters) {
                  dataCopy = dataCopy.filter((e) => e.tags.includes(tag));
                }

                setFilteredData(dataCopy);
              }}
              style={{ width: '90%', height: 60 }}
              title="Apply"
            />
          </Overlay>
          <Overlay
            overlayStyle={styles.modal}
            isVisible={visible2}
            onBackdropPress={toggleOverlay2}
          >
            <TouchableWithoutFeedback onPress={() => {
              Keyboard.dismiss()
            }}>
              <View>
                <Text style={{ fontSize: 28, left: 20, top: 25 }}>
                  Make your smoothie
                </Text>

                <Text style={{ left: 35, top: 60, fontWeight: "bold"}}>Ingredients</Text>
                <AppInput onSubmitEditing={() => {
                  var ingredientsList = mixIngredients;
                  ingredientsList.push(mixIngredientVal);
                  setMixIngredients(ingredientsList);
                  setMixIngredientVal("");
                }} style={{top: 60, left: 28}} value={mixIngredientVal} onChangeText={text => setMixIngredientVal(text)} placeholder='Add your ingredients'></AppInput>
                <View style={{flexDirection: "row", top: 50, flexWrap: "wrap", paddingVertical: 10, paddingHorizontal: 30}}>
                    {mixIngredients.map((item, index) => {
                        return <Tags key={index} selected={false} select={() => {}} name={item}/>
                    })}
                </View>

                <Text style={{ left: 35, top: 60, fontWeight: "bold"}}>Tags</Text>
                <AppInput onSubmitEditing={() => {
                  var tagsList = mixTags;
                  tagsList.push(mixTagsVal);
                  setMixTags(tagsList);
                  setMixTagsVal("");
                }} style={{top: 60, left: 28}} value={mixTagsVal} onChangeText={text => setMixTagsVal(text)} placeholder='Add tags'></AppInput>
                <View style={{flexDirection: "row", flexWrap: "wrap", top: 50, paddingVertical: 10, paddingHorizontal: 30}}>
                    {mixTags.map((item, index) => {
                        return <Tags key={index} selected={false} select={() => {}} name={item}/>
                    })}
                </View>

                <AppInput value={mixName} onChangeText={text => setMixName(text)} style={{top: 50, left: 28}} placeholder="Name your Mix"></AppInput>
                <AppInput value={mixDescription} onChangeText={text => setMixDescription(text)} style={{top: 50, left: 28, height: 70}} placeholder="Give it a description"></AppInput>

                <AppButton
                  onPress={() => {
                    setVisible2(false);
                  }}
                  style={{ width: '90%', height: 60, top: 40, marginBottom: 50 }}
                  title="Blend!"
                />
                </View>
              </TouchableWithoutFeedback>
            </Overlay>
        </View>
        {/* </ImageBackground> */}
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  modal: {
    width: '90%',
    minHeight: '75%',
    height: "auto",
    borderRadius: 45
    
  },
  btn: {
    width: '90%',
    padding: 20,
    margin: 20,
    borderRadius: 40,
    alignItems: 'center',
    backgroundColor: colors.primary,
  },
});
