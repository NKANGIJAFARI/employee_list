import React from 'react';
import { StyleSheet, View, TouchableOpacity, Text } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const FloatingButton = () => {
  return (
      <TouchableOpacity style={styles.button}>
        <Icon name="add" size={35} color="#fff" />
      </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
 
  button: {
    position: 'absolute',
    bottom: 20,
    right: 20,
    backgroundColor: '#6200ea',
    borderRadius: 50,
    width: 60,
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 8,
  },
});

export default FloatingButton;
