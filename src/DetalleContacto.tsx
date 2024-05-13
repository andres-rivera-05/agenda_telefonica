import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const DetalleContacto = ({ route }) => {
  const { contacto, nombre } = route.params; 

  return (
    <View style={styles.container}>
      <Image
      style={{width: 100, height: 100, marginBottom: 10}}
        source={{
          uri: "https://cdn.icon-icons.com/icons2/1042/PNG/512/Contact_Icon_icon-icons.com_76434.png",
        }}
      ></Image>
      <Text style={styles.contactName}>Nombre: {nombre}</Text>
      <Text style={styles.contactName}>Contacto: {contacto}</Text>
      <Image
        style={{ width: 220, height: 100, resizeMode: 'contain', marginTop: 30}}
        source={{
          uri: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/CEUTEC_HONDURAS.png/1024px-CEUTEC_HONDURAS.png",
        }}
      ></Image>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  contactName: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 15,
    borderRadius: 10,
  },
  contactNumber: {
    fontSize: 18,
  },
});

export default DetalleContacto;
