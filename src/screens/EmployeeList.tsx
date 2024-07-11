import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, TouchableOpacity, TextInput, StyleSheet } from 'react-native';
import axios from 'axios';
import { Employee } from '../../types';

const EmployeeList = ({ navigation }: any) => {
  const [employees, setEmployees] = useState<Employee[]>([]);
  const [search, setSearch] = useState<string>('');

  useEffect(() => {
    fetchEmployees();
  }, []);

  const fetchEmployees = async () => {
    try {
      const response = await axios.get('https://dummy.restapiexample.com/api/v1/employees');
      setEmployees(response.data.data);
    } catch (error) {
      console.error(error);
    }
  };

  const filterEmployees = () => {
    return employees.filter(employee => 
      employee.employee_name.toLowerCase().includes(search.toLowerCase())
    );
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Search"
        value={search}
        onChangeText={setSearch}
      />
      <FlatList
        data={filterEmployees()}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => navigation.navigate('EmployeeDetails', { employee: item })}>
            <Text style={styles.itemText}>{item.employee_name}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 16,
    paddingHorizontal: 8,
  },
  itemText: {
    padding: 16,
    borderBottomColor: 'gray',
    borderBottomWidth: 1,
  },
});

export default EmployeeList;
