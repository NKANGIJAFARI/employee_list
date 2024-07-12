import React, { useState, useEffect, useCallback } from 'react';
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  TouchableOpacity,
  Modal,
  Dimensions,
} from 'react-native';
import axios from 'axios';
import { Employee } from '../../types';
import EmployeeCard from '../components/EmployeeList/EmployeeCard';
import FloatingButton from '../components/EmployeeList/Floatingutton';
import SearchInput from '../components/EmployeeList/SearchInput';
import EmployeeCreationForm from '../components/EmployeeList/EmployeeCreationForm';
import { ActivityIndicator } from 'react-native-paper';

const { height } = Dimensions.get('window');

const EmployeeList = () => {
  const [employees, setEmployees] = useState<Employee[]>([]);
  const [search, setSearch] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(true);

  const fetchData = useCallback(async () => {
   
    try {
      const response = await axios.get('https://dummy.restapiexample.com/api/v1/employees');
      setEmployees(response.data.data);
      console.log(response.data.data[0]);

      setLoading(false)
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

  // Handle the modal visibility to create new employees
  const [modalVisible, setModalVisible] = useState(false);

  const handleFloatingButtonPress = () => {
    setModalVisible(true);
  };

  const handleCloseModal = () => {
    setModalVisible(false);
  };

  if(loading){
    return <View>
      <ActivityIndicator size={"large"} />
    </View>
  }

  return (
    <View style={styles.container}>
      <SearchInput value={search} onChangeText={setSearch} placeholder='Search...' />

      <FlatList
        data={filterEmployees()}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <EmployeeCard item={item} />}
      />

      <FloatingButton onPress={handleFloatingButtonPress} />

      <Modal
        animationType='slide'
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.modalView}>
          <EmployeeCreationForm  onClose={handleCloseModal}/>
          <TouchableOpacity style={styles.closeButton} onPress={() => setModalVisible(false)}>
            <Text style={styles.closeButtonText}>Cancel</Text>
          </TouchableOpacity>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },

  modalContainer: {
    flex: 1,
    // justifyContent: 'flex-end',
  },
  modalView: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    // justifyContent: "center",
    // alignContent: "center",
    alignItems: 'center',
    height: height / 2,
    backgroundColor: 'white',
    padding: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },

  closeButton: {
    backgroundColor: 'red',
    borderRadius: 10,
    padding: 10,
    alignItems: 'center',
    marginTop: 20,
    width: '50%',
  },
  closeButtonText: {
    color: '#fff',
    fontSize: 16,
  },
});

export default EmployeeList;
