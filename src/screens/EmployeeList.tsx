import React, { useState, useEffect, useCallback } from 'react';
import { View, Text, FlatList,  TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import axios from 'axios';
import { Employee } from '../../types';
import EmployeeCard from '../components/EmployeeList/EmployeeCard';
import FloatingButton from '../components/EmployeeList/Floatingutton';

const EmployeeList = () => {
  const [employees, setEmployees] = useState<Employee[]>([]);
  const [search, setSearch] = useState<string>('');

  const fetchData = useCallback(async () => {
    try {
      const response = await axios.get('https://dummy.restapiexample.com/api/v1/employees');
      setEmployees(response.data.data);
      console.log(response.data.data[0]);
    } catch (error) {
      console.error(error);
    }
  }, []);

  useEffect(() => {
    if (employees.length === 0) {
      fetchData();
    }
  }, [employees, fetchData]);

  const filterEmployees = () => {
    return employees.filter((employee) =>
      employee.employee_name.toLowerCase().includes(search.toLowerCase())
    );
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder='Search for employee'
        value={search}
        onChangeText={setSearch}
      />
      <FlatList
        data={filterEmployees()}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <EmployeeCard item={item} />}
      />

  <FloatingButton />
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
});

export default EmployeeList;
