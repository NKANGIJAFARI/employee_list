import React from 'react';
import { StyleSheet, View, TextInput, TextInputProps } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

interface InputWithIconProps extends TextInputProps {
  icon: string;
}

const InputWithIcon: React.FC<InputWithIconProps> = ({ icon, ...props }) => {
  return (
    <View style={styles.inputContainer}>
      <Icon name={icon} size={20} color='gray' style={styles.icon} />
      <TextInput style={styles.input} {...props} placeholderTextColor='gray' />
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
    borderRadius: 10,
    paddingHorizontal: 10,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 16,
  },
  icon: {
    marginRight: 10,
  },
  input: {
    flex: 1,
    height: 40,
    fontSize: 16,
    color: '#000',
  },
});

export default InputWithIcon;
