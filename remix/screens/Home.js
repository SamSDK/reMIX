import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import AppButton from '../components/AppButton';
import Screen from '../components/Screen';
import { useNavigation } from '@react-navigation/native';
import colors from '../config/colors';
import RecipePill from '../components/RecipePill';
import { SearchBar, Overlay } from 'react-native-elements';
import axios from 'axios';
import Tags from '../components/Tags';
// import BlurView from 'expo-blur';

export default function Home() {
  const [visible, setVisible] = useState(false);

  const toggleOverlay = () => {
    setVisible(!visible);
  };

  const navigation = useNavigation();
  const [searchQuery, setSearchQuery] = React.useState('');
  const [data, setData] = React.useState([]);

  function shuffle(array) {
    return array.sort(() => Math.random() - 0.5);
  }

  const getData = async () => {
    axios
      .get(`http://10.217.15.13:3008/api/getAll`)
      .then((doc) => {
        setData(shuffle(doc.data).splice(0, 15));
        console.log(data);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  React.useEffect(() => {
    getData();
  }, []);

  const onChangeSearch = (query) => setSearchQuery(query);

  return (
    <Screen>
      <SearchBar
        style={{ borderRadius: 20, width: 2 }}
        placeholder="Type Here..."
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
            title="Filter"
          />
          <AppButton style={styles.btn} title="Make your own recipe +" />
        </View>
        {/* <ImageBackground resizeMode='' source={require("../assets/images/seamless.webp")}> */}
        {/* <View style={{width: "50%",height: 60,borderBottomRightRadius: 20, position: 'absolute', left: 0, top: 180, backgroundColor: colors.white}}></View> */}
        <Text
          style={{
            fontWeight: 'bold',
            fontSize: 24,
            alignSelf: 'flex-start',
            color: colors.darkerGrey,
            paddingBottom: 20,
            backgroundColor: colors.white,
            width: '100%',
            paddingLeft: 20,
            borderBottomLeftRadius: 28,
            borderBottomRightRadius: 28,
          }}
        >
          Browse Smoothies
        </Text>
        <View
          style={{
            padding: 20,
            paddingTop: 0,
            width: '100%',
          }}
        >
          <FlatList
            data={data}
            contentContainerStyle={{ paddingBottom: 200 }}
            renderItem={({ item }) => (
              <RecipePill info={item.info} tags={item.tags} title={item.name} />
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
              <Tags name="spinach" />
              <Tags name="almond milk" />
              <Tags name="frozen bananas" />
              <Tags name="frozen strawberries" />
              <Tags name="protein powder" />
              <Tags name="peanut butter" />
              <Tags name="frozen blueberries" />
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
              <Tags name="healthy" />
              <Tags name="green" />
              <Tags name="berries" />
              <Tags name="nut" />
              <Tags name="protein" />
              <Tags name="fuit" />
            </View>
            <AppButton style={{ width: '90%', height: 70 }} title="Apply" />
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
    height: '75%',
    borderRadius: 48,
  },
  btn: {
    width: '90%',
    padding: 20,
    margin: 20,
    borderRadius: 10,
    alignItems: 'center',
    backgroundColor: colors.primary,
  },
});
