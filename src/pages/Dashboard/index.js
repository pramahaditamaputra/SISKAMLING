import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {
  ILCreateReport,
  ILHistoryReport,
  ILMap,
  ILLogout,
  ILPulse,
} from '../../assets';
import {CardMenu, Gap} from '../../components';
import {colors, fonts} from '../../utils';

const Dashboard = ({navigation}) => {
  const [countSOS, setCountSOS] = useState(0);
  const handlerSOS = () => {
    if (countSOS !== 2) {
      setCountSOS(countSOS + 1);
    } else {
      setCountSOS(0);
      navigation.navigate('Maps');
    }
  };
  return (
    <View style={styles.page}>
      <View style={styles.content}>
        <Text style={styles.pageTitle}>Dashboard</Text>
        <Gap height={50} />
        <View style={styles.cardWrapper}>
          <CardMenu
            title="Create Report"
            image={ILCreateReport}
            onPress={() => navigation.navigate('CreateReport')}
          />
          <Gap width={10} />
          <CardMenu
            title="History Report"
            image={ILHistoryReport}
            onPress={() => navigation.navigate('HistoryReport')}
          />
          <Gap height={160} />
          <CardMenu
            title="TKP"
            image={ILMap}
            onPress={() => navigation.navigate('Maps')}
          />
          <Gap width={10} />
          <CardMenu
            title="Sign Out"
            image={ILLogout}
            onPress={() => navigation.replace('Login')}
          />
        </View>
        <Gap height={50} />
        <CardMenu title="SOS Tap 3x" image={ILPulse} onPress={handlerSOS} />
      </View>
    </View>
  );
};

export default Dashboard;

const styles = StyleSheet.create({
  page: {flex: 1, backgroundColor: colors.secondary},
  content: {
    flex: 1,
    backgroundColor: colors.white,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    paddingHorizontal: 20,
    paddingVertical: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cardWrapper: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  pageTitle: {
    fontSize: 25,
    fontFamily: fonts.primary[600],
    color: colors.text.primary,
  },
});
