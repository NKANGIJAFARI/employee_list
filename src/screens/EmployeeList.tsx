import React, { useState, useEffect, useCallback } from 'react';
import {
  View,

  FlatList,
  StyleSheet,
  Alert,

} from 'react-native';
import axios from 'axios';
import { Employee } from '../../types';
import EmployeeCard from '../components/EmployeeList/EmployeeCard';
import FloatingButton from '../components/EmployeeList/FloatingButton';
import SearchInput from '../components/EmployeeList/SearchInput';
import EmployeeModal from '../components/EmployeeList/EmployeeModal';
import { ActivityIndicator } from 'react-native-paper';


const EmployeeList = () => {
  const [employees, setEmployees] = useState<Employee[]>([]);
  const [search, setSearch] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(true);

  const [modalVisible, setModalVisible] = useState(false);
  const [isEditMode, setIsEditMode] = useState(false);
  const [selectedEmployee, setSelectedEmployee] = useState<Employee | null>(null);

  const fetchData = useCallback(async () => {
    try {
      const response = await axios.get('https://dummy.restapiexample.com/api/v1/employees');
      setEmployees(response.data.data);
      setLoading(false);
    } catch (error) {
      console.error(error);
      setLoading(false);
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

  const handleFloatingButtonPress = () => {
    setIsEditMode(false);
    setSelectedEmployee(null);
    setModalVisible(true);
  };

  const handleEditEmployee = (employee: Employee) => {
    setIsEditMode(true);
    setSelectedEmployee(employee);
    setModalVisible(true);
  };

  const handleCloseModal = () => {
    setModalVisible(false);
    setSelectedEmployee(null);
  };

  const handleDeleteEmployee = async (id: string) => {
    try {
      const response = await axios.delete(`https://dummy.restapiexample.com/api/v1/delete/${id}`);
      if (response.status === 200) {
        Alert.alert('Employee deleted successfully');
        setEmployees((prevEmployees) => prevEmployees.filter(employee => employee.id !== id));
      }
    } catch (error) {
      console.error(error);
      Alert.alert('Error deleting employee');
    }
  };

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size={"large"} />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <SearchInput value={search} onChangeText={setSearch} placeholder='Search...' />
      <FlatList
        data={filterEmployees()}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <EmployeeCard
            item={item}
            onDelete={handleDeleteEmployee}
            onEdit={handleEditEmployee}
          />
        )}
      />
      <FloatingButton onPress={handleFloatingButtonPress} />
      <EmployeeModal
        visible={modalVisible}
        onClose={handleCloseModal}
        isEditMode={isEditMode}
        employee={selectedEmployee}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default EmployeeList;
