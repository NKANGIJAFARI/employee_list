import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { Employee } from '../../types';

const EmployeeDetails = ({ route }: any) => {
  const { employee }: { employee: Employee } = route.params;

  return (
    <View style={styles.container}>
      <Image
        source={{ uri: employee.profile_image || 'https://via.placeholder.com/150' }}
        style={styles.image}
      />
      <Text style={styles.text}>Name: {employee.employee_name}</Text>
      <Text style={styles.text}>Salary: {employee.employee_salary}</Text>
      <Text style={styles.text}>Age: {employee.employee_age}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  image: {
    width: 150,
    height: 150,
    borderRadius: 75,
    marginBottom: 16,
  },
  text: {
    fontSize: 18,
    marginVertical: 4,
  },
});

export default EmployeeDetails;
