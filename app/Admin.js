import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Button,
  Alert,
} from 'react-native';

import {
  Colors,
} from 'react-native/Libraries/NewAppScreen';

const Admin = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={styles.scrollView}>
          <View style={styles.body}>
            
            <View style={styles.sectionContainer}>
              <Text style={styles.sectionTitle}>Cadastros</Text>
            <View style={styles.sectionDescription}>
              <Button
                title="Setores"
                color="#ac33e1"
                onPress={() => Alert.alert('Button with adjusted color pressed')}
              />
            </View>
            <View style={styles.sectionDescription}>
              <Button
                title="Funcionarios"
                color="#22e1ac"
                onPress={() => Alert.alert('Button with adjusted color pressed')}
              />
            </View>
            </View>

            <View style={styles.sectionContainer}>
              <Text style={styles.sectionTitle}>Enviar Mensagem</Text>
              <View style={styles.sectionDescription}>
                <Button
                  title="Setor"
                  color="#ac33e1"
                  onPress={() => Alert.alert('Button with adjusted color pressed')}
                />
              </View>
              <View style={styles.sectionDescription}>
                <Button
                  title="Responsável"
                  color="#33ace1"
                  onPress={() => Alert.alert('Button with adjusted color pressed')}
                />
              </View>
              <View style={styles.sectionDescription}>
                <Button
                  title="Funcionarios"
                  color="#22e1ac"
                  onPress={() => Alert.alert('Button with adjusted color pressed')}
                />
              </View>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});

export default Admin;
