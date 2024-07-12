import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Dimensions, Modal } from 'react-native';
import { Employee } from '../../../types';
import EmployeeCreationForm from './EmployeeCreationForm';

const { height } = Dimensions.get('window');

interface Props {
  visible: boolean;
  onClose: () => void;
  isEditMode: boolean;
  employee?: Employee | null;
}

const EmployeeModal: React.FC<Props> = ({ visible, onClose, isEditMode, employee }) => {
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={visible}
      onRequestClose={onClose}
    >
      <View style={styles.overlay}>
        <TouchableOpacity style={styles.transparentPart} onPress ={onClose}></TouchableOpacity>
        <View style={styles.modalView}>
          <EmployeeCreationForm
            onClose={onClose}
            employee={isEditMode ? employee : null}
          />
          <TouchableOpacity style={styles.closeButton} onPress={onClose}>
            <Text style={styles.closeButtonText}>Cancel</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  transparentPart: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: height / 2,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalView: {
    width: '100%',
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
    alignItems: 'center',
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

export default EmployeeModal;
