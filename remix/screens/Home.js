import React, {useState} from 'react';
import { StyleSheet, Text, View, FlatList, TouchableOpacity } from 'react-native';
import AppButton from '../components/AppButton';
import Screen from '../components/Screen';
import { useNavigation } from '@react-navigation/native';
import colors from '../config/colors';
import RecipePill from '../components/RecipePill';
import { SearchBar, Overlay } from 'react-native-elements';
import Tags from '../components/Tags';


export default function Home() {
  
    const [visible, setVisible] = useState(false);
  
    const toggleOverlay = () => {
      setVisible(!visible);
    }

    const navigation = useNavigation();
    const [searchQuery, setSearchQuery] = React.useState('');

  const onChangeSearch = query => setSearchQuery(query);

  const data = [
    {
      title: "Green smoothie"
    },
    {
      title: "Red smoothie"
    },
    {
      title: "Blue smoothie"
    },
    {
      title: "Purple smoothie"
    },
    {
      title: "Pink smoothie"
    }
  ]

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
       <AppButton style={styles.btn} title='Make your own recipe'/>
      </View>
      <View style={{padding: 20, paddingTop: 20, width: "100%"}}>
        <Text style={{fontWeight: "bold", fontSize: 28, alignSelf: "flex-start", color: colors.darkerGrey}}>Browse Recipes</Text>
        <FlatList
          data={data}
          renderItem={({item}) => <RecipePill title={item.title} />}
          keyExtractor={item => item.id}
        />
        <Overlay overlayStyle={styles.modal} isVisible={visible} onBackdropPress={toggleOverlay}>
        <Text style={{fontSize: 48, left: 20, top: 10 }}>Filters</Text>
        <Text style={{fontSize: 28, left: 20, top: 10 }}>Ingredients</Text>
        <View style={{paddingHorizontal: 20,top: 20,flex: 1, flexDirection: 'row', flexWrap: 'wrap'}}>
        <Tags name="hey"/>
        <Tags name="hey"/>
        <Tags name="hey"/>
        <Tags name="hey"/>
        <Tags name="hey"/>
        <Tags name="hey"/>
        <Tags name="hey"/>
        </View>
        <Text style={{fontSize: 28, left: 20, top: 10 }}>Tags</Text>
        <View style={{paddingHorizontal: 20,top: 20,flex: 1, flexDirection: 'row', flexWrap: 'wrap'}}>
        <Tags name="hey"/>
        <Tags name="hey"/>
        <Tags name="hey"/>
        <Tags name="hey"/>
        <Tags name="hey"/>
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
   height: "60%",
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
