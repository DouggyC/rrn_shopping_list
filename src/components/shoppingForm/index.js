import React, {useState} from 'react';
//
import {useDispatch} from 'react-redux';
import {useNavigation} from '@react-navigation/native';
import {addShopping} from '../../actions/shopping';
//
import 'react-native-get-random-values';
import {v4 as uuidv4} from 'uuid';
//
import {View, Text, StyleSheet} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler'

import {Input} from 'react-native-elements';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faPlus} from '@fortawesome/free-solid-svg-icons';

export const ShoppingList = () => {
  const [txt, setText] = useState('');
  const dispatch = useDispatch();
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Text>Shopping List</Text>
      <Input
        placeholder="Name"
        value={txt}
        onChangeText={(txt) => setText(txt)}
      />

      <TouchableOpacity
        onPress={() => {
          dispatch(addShopping({key: uuidv4(), name: txt})), setText('');
        }}>
        <FontAwesomeIcon icon={faPlus} />
      </TouchableOpacity>

      <TouchableOpacity
        style={{marginBottom: 16}}
        onPress={() => navigation.navigate('Shopping List')}>
        <Text style={{fontSize: 22}}>Go to Shopping List</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 16,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 64,
    marginBottom: 48,
  },
  // shoppingInput: {
  //   fontSize: 32,
  //   marginBottom: 32,
  //   borderWidth: 1,
  //   padding: 8,
  //   width: '80%',
  //   borderRadius: 10,
  // },
});

export default ShoppingList;
