import React from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import {Header, ListReport} from '../../components';
import {colors} from '../../utils';

const HistoryReport = ({navigation}) => {
  return (
    <View style={styles.page}>
      <Header title="History Report" onPress={() => navigation.goBack()} />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.content}>
          <ListReport />
          <ListReport />
          <ListReport />
          <ListReport />
          <ListReport />
          <ListReport />
          <ListReport />
          <ListReport />
          <ListReport />
          <ListReport />
          <ListReport />
          <ListReport />
          <ListReport />
          <ListReport />
          <ListReport />
          <ListReport />
          <ListReport />
          <ListReport />
          <ListReport />
        </View>
      </ScrollView>
    </View>
  );
};

export default HistoryReport;

const styles = StyleSheet.create({
  page: {backgroundColor: colors.secondary, flex: 1},
  content: {
    backgroundColor: colors.white,
    flex: 1,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
});
