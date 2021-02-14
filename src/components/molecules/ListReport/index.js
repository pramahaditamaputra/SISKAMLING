import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {colors} from '../../../utils';
import {fonts} from '../../../utils/fonts/index';

const ListReport = () => {
  return (
    <View style={styles.container}>
      {/* <Image source={DummyDoctor2} style={styles.avatar} /> */}
      <View style={styles.wrapperChat}>
        <Text style={styles.name}>Status : Kriminal</Text>
        <Text style={styles.desc}>Time : 16.00 </Text>
        <Text style={styles.desc}>Address : JL. Gracia 7 Blok F1 No 6 </Text>
      </View>
    </View>
  );
};

export default ListReport;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
    alignItems: 'center',
  },
  avatar: {width: 46, height: 46, borderRadius: 46 / 2, marginRight: 12},
  name: {
    fontSize: 16,
    fontFamily: fonts.primary[400],
    color: colors.text.primary,
  },
  desc: {
    fontSize: 12,
    fontFamily: fonts.primary[300],
    color: colors.text.secondary,
  },
});
