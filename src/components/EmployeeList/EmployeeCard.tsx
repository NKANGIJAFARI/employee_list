import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View, Alert } from 'react-native';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { Employee, RootStackParamList } from '../../../types';

interface Props {
  item: Employee;
  onDelete: (id: string) => void;
  onEdit: (employee: Employee) => void;
}

const EmployeeCard: React.FC<Props> = ({ item, onDelete, onEdit }) => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  const confirmDeleteEmployee = () => {
    Alert.alert(
      'Delete Employee',
      'Are you sure you want to delete this employee?',
      [
        { text: 'Cancel', style: 'cancel' },
        { text: 'Delete', style: 'destructive', onPress: () => onDelete(item.id) },
      ]
    );
  };

  return (
    <TouchableOpacity
      style={styles.employeeCard}
      onPress={() => navigation.navigate('EmployeeDetails', { employee: item })}
    >
      <View style={styles.textContainer}>
        <Text style={styles.itemText}>{item.employee_name}</Text>
        <Text style={styles.itemText}>Age: {item.employee_age}</Text>
        <Text style={styles.itemText}>Salary: {item.employee_salary}</Text>
      </View>
      <TouchableOpacity style={styles.editIconContainer} onPress={() => onEdit(item)}>
        <Icon name="edit" size={24} color="blue" />
      </TouchableOpacity>
      <TouchableOpacity style={styles.deleteIconContainer} onPress={confirmDeleteEmployee}>
        <Icon name="delete" size={24} color="red" />
      </TouchableOpacity>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  employeeCard: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 5,
    elevation: 3,
    marginBottom: 20,
    overflow: 'hidden',
    alignItems: 'center',
  },
  textContainer: {
    flex: 1,
    padding: 15,
  },
  itemText: {
    borderBottomColor: 'gray',
    borderBottomWidth: 1,
    paddingVertical: 4,
  },
  editIconContainer: {
    padding: 15,
  },
  deleteIconContainer: {
    padding: 15,
  },
});

export default EmployeeCard;
