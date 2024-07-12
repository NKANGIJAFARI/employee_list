import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { Employee, RootStackParamList } from '../../../types';

interface Props {
  item: Employee;
}

const EmployeeCard: React.FC<Props> = ({ item }) => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

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
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  employeeCard: {
    backgroundColor: '#fff',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 5,
    elevation: 3,
    marginBottom: 20,
    overflow: 'hidden',
  },
  textContainer: {
    padding: 15,
  },
  itemText: {
    borderBottomColor: 'gray',
    borderBottomWidth: 1,
  },
});

export default EmployeeCard;
