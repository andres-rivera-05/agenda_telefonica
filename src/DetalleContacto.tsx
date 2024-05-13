// DetalleContacto.js

import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler'; 

const DetalleContacto = ({ route }) => {
  const { contacto, nombre } = route.params; // Extrae los datos del contacto de las props

  return (
    <View style={styles.container}>
      {/* Aquí puedes colocar el icono si es necesario */}
      <Text style={styles.contactName}>{nombre}</Text>
      <Text style={styles.contactName}>{contacto}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  contactName: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  contactNumber: {
    fontSize: 18,
  },
});

export default DetalleContacto;
