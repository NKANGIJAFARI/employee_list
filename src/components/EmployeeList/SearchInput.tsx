import React from 'react';
import { StyleSheet, View, TextInput, TextInputProps } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

interface SearchInputProps extends TextInputProps {
  value: string;
  onChangeText: (text: string) => void;
  placeholder?: string;
}

const SearchInput: React.FC<SearchInputProps> = ({ value, onChangeText, placeholder, ...props }) => {
  return (
    <View style={styles.searchSection}>
      <Icon name="search" size={30} color='#6200ea'/>
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        value={value}
        onChangeText={onChangeText}
        underlineColorAndroid="transparent"
        {...props}
      />
    </View>
  );
};

const styles = StyleSheet.create({
    searchSection: {
      flexDirection: 'row',
      alignItems: 'center',
      backgroundColor: '#f0f0f0',
      borderRadius: 15,
      padding: 10,
      marginBottom: 16,
      borderColor: 'gray',
      borderWidth: 1,
    },

    input: {
      flex: 1,
      paddingVertical: 5,
      paddingHorizontal: 10,
      fontSize: 16,
      color: '#000',
      backgroundColor: '#f0f0f0',
      borderRadius: 25,
    }})

export default SearchInput;
