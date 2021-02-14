import React, {useState} from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import {Button, Gap, Header, Input, InputPhoto} from '../../components';
import {colors, fonts} from '../../utils';
import {Picker} from '@react-native-picker/picker';
// import {launchCamera, launchImageLibrary} from 'react-native-image-picker';

const CreateReport = ({navigation}) => {
  const [event, setEvent] = useState('');
  const [eventsCollection] = useState(['Perampokan', 'Bencana', 'Pembunuhan']);
  const [hasPhoto, setHasPhoto] = useState(false);

  const uploadPhotoHandler = (type) => {
    // launchImageLibrary({mediaType: type, quality: 1}, (response) => {
    //   console.log(response);
    // });
  };

  return (
    <View style={styles.page}>
      <Header title="Create Report" onPress={() => navigation.goBack()} />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.content}>
          <Input label="Full Name" />
          <Gap height={24} />
          <Text style={styles.label}>Event</Text>
          <View style={styles.pickerWrapper}>
            <Picker
              selectedValue={event}
              onValueChange={(itemValue, itemIndex) => setEvent(itemValue)}>
              {eventsCollection.map((eventCollection, index) => (
                <Picker.Item
                  key={index}
                  label={eventCollection}
                  value={eventCollection}
                />
              ))}
            </Picker>
          </View>
          <Gap height={24} />
          <Input label="Address" />
          <Gap height={24} />
          <Input label="Description" />
          <Gap height={24} />
          <InputPhoto
            hasPhoto={hasPhoto}
            setHasPhoto={setHasPhoto}
            // onPress={}
          />
          <Gap height={40} />
          <Button title="Submit" onPress={() => navigation.goBack()} disable />
        </View>
      </ScrollView>
    </View>
  );
};

export default CreateReport;

const styles = StyleSheet.create({
  page: {flex: 1, backgroundColor: colors.white},
  content: {padding: 40, paddingTop: 0},
  label: {
    fontSize: 16,
    fontFamily: fonts.primary[400],
    color: colors.text.secondary,
    marginBottom: 6,
  },
  pickerWrapper: {
    borderRadius: 10,
    borderWidth: 1,
    borderColor: colors.border,
    overflow: 'hidden',
  },
});
