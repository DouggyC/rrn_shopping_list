import React from 'react';

import {deleteShopping} from '../../actions/shopping';
import {useDispatch, useSelector} from 'react-redux';

import {FlatList, StyleSheet} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler'
import {ListItem} from 'react-native-elements';

import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faMinus} from '@fortawesome/free-solid-svg-icons';

const ShoppingForm = () => {
  const dispatch = useDispatch();
  const shoppingList = useSelector(
    (state) => state.shoppingListReducer.shoppingList,
  );
  console.log(shoppingList);
  return (
    <FlatList
      style={styles.listContainer}
      data={shoppingList}
      keyExtractor={(item) => item.key}
      renderItem={(data) => (
        <ListItem>
          <ListItem.Title>{data.item.name}</ListItem.Title>
          <TouchableOpacity
            onPress={() => dispatch(deleteShopping(data.item.key))}>
            <FontAwesomeIcon icon={faMinus} />
          </TouchableOpacity>
        </ListItem>
      )}
    />
  );
};

const styles = StyleSheet.create({
  listContainer: {
    backgroundColor: '#dce2ff',
    padding: 16,
  },
  listText: {
    fontSize: 30,
  },
});

export default ShoppingForm;
