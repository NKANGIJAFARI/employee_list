import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, TouchableOpacity, Alert, View, ActivityIndicator } from 'react-native';
import axios from 'axios';
import InputWithIcon from './InputWithIcon';
import { Employee } from '../../../types';

interface EmployeeCreationFormProps {
  onClose: () => void;
  employee?: Employee | null;
}

const EmployeeCreationForm: React.FC<EmployeeCreationFormProps> = ({ onClose, employee }) => {
  const [name, setName] = useState(employee ? employee.employee_name : '');
  const [salary, setSalary] = useState(employee ? employee.employee_salary.toString() : '');
  const [age, setAge] = useState(employee ? employee.employee_age.toString() : '');
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    if (employee) {
      setName(employee.employee_name);
      setSalary(employee.employee_salary.toString());
      setAge(employee.employee_age.toString());
    }
  }, [employee]);

  const handleSaveEmployee = async () => {
    if (name === '' || salary === '' || age === '') {
      Alert.alert('Please fill in all fields');
      return;
    }

    try {
      setLoading(true);
      if (employee) {
        const response = await axios.put(`https://dummy.restapiexample.com/api/v1/update/${employee.id}`, {
          name,
          salary,
          age,
        });
        if (response.status === 200) {
          Alert.alert('Employee updated successfully');
          onClose();
        }
      } else {
        const response = await axios.post('https://dummy.restapiexample.com/api/v1/create', {
          name,
          salary,
          age,
        });
        if (response.status === 200) {
          Alert.alert('Employee created successfully');
          setName('');
          setSalary('');
          setAge('');
          onClose();
        }
      }
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.error(error);
      Alert.alert('Error saving employee');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{employee ? 'Edit Employee' : 'Create Employee'}</Text>
      <InputWithIcon
        icon="person"
        placeholder="Name"
        value={name}
        onChangeText={setName}
      />
      <InputWithIcon
        icon="attach-money"
        placeholder="Salary"
        value={salary}
        onChangeText={(text) => setSalary(text.replace(/[^0-9]/g, ''))}
        keyboardType="numeric"
      />
      <InputWithIcon
        icon="calendar-today"
        placeholder="Age"
        value={age}
        onChangeText={(text) => setAge(text.replace(/[^0-9]/g, ''))}
        keyboardType="numeric"
      />
      <TouchableOpacity style={styles.button} onPress={handleSaveEmployee}>
        {loading && <ActivityIndicator size="small" style={{ marginRight: 10 }} />}
        <Text style={styles.buttonText}>{loading ? (employee ? 'Updating Employee...' : 'Creating Employee...') : (employee ? 'Update Employee' : 'Create Employee')}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: '#fff',
    width: '100%',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 16,
  },
  button: {
    backgroundColor: '#6200ea',
    borderRadius: 10,
    padding: 10,
    alignItems: 'center',
    width: "90%",
    flexDirection: "row",
    justifyContent: "center",
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
});

export default EmployeeCreationForm;
