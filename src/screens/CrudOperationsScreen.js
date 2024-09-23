import React, { useState, useEffect } from 'react';
import { View, Text, Button, TextInput, FlatList } from 'react-native';
import { getItems, createItem, updateItem, deleteItem } from '../services/api';
import HelloComponent from '../components/HelloComponent';

const ItemsComponent = () => {
  const [items, setItems] = useState([]);
  const [newItemName, setNewItemName] = useState('');
  const [updateItemName, setUpdateItemName] = useState('');

  useEffect(() => {
    fetchItems();
  }, []);

  const fetchItems = async () => {
    try {
      const fetchedItems = await getItems();
      setItems(fetchedItems);
    } catch (error) {
      console.error('Error fetching items:', error);
    }
  };

  const handleCreateItem = async () => {
    try {
      await createItem({ name: newItemName });
      setNewItemName('');
      fetchItems();
    } catch (error) {
      console.error('Error creating item:', error);
    }
  };

  const handleUpdateItem = async (id) => {
    try {
      await updateItem(id, { name: updateItemName });
      setUpdateItemName('');
      fetchItems();
    } catch (error) {
      console.error('Error updating item:', error);
    }
  };

  const handleDeleteItem = async (id) => {
    try {
      await deleteItem(id);
      fetchItems();
    } catch (error) {
      console.error('Error deleting item:', error);
    }
  };

  return (
    <View>
      <TextInput
        style={{ color: 'red' }}
        value={newItemName}
        onChangeText={setNewItemName}
        placeholder="New item name"
      />
      <Button title="Create Item" onPress={handleCreateItem} />
      <FlatList
        data={items}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View>
            <Text style={{ color: 'red' }}>{item.name}</Text>
            <TextInput
              style={{ color: 'blue' }}
              value={updateItemName}
              onChangeText={setUpdateItemName}
              placeholder="Update item name"
            />
            <Button title="Update" onPress={() => handleUpdateItem(item.id)} />
            <Button title="Delete" onPress={() => handleDeleteItem(item.id)} />
          </View>
        )}
      />
      <HelloComponent />
    </View>
  );
};

export default ItemsComponent;