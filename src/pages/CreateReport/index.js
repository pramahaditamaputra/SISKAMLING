import React, {useState} from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import {
  Button,
  Gap,
  Header,
  Input,
  InputPhoto,
  Loading,
} from '../../components';
import {colors, fonts, useForm} from '../../utils';
import {Picker} from '@react-native-picker/picker';
import {Fire} from '../../config';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import {showMessage, hideMessage} from 'react-native-flash-message';
import {v4 as uuidv4} from 'uuid';
import {ILNullPhoto} from '../../assets';

const CreateReport = ({navigation}) => {
  const [eventsCollection] = useState([
    '- Select Event -',
    'Perampokan',
    'Bencana',
    'Pembunuhan',
  ]);
  const [hasPhoto, setHasPhoto] = useState(false);
  const [loading, setLoading] = useState(false);
  const [photo, setPhoto] = useState('');
  const [uriPhoto, setUriPhoto] = useState(ILNullPhoto);

  const [form, setForm] = useForm({
    fullname: '',
    event: '',
    address: '',
    description: '',
  });

  const optionsImage = {
    mediaType: 'photo',
    includeBase64: true,
    quality: 0.5,
    maxWidth: 200,
    maxHeight: 200,
  };

  const onUploadPhotoHandler = () => {
    launchCamera(optionsImage, (response) => {
      if (response.didCancel) {
        showMessage({
          message: 'cancel',
          type: 'danger',
        });
      } else {
        console.log(response);
        setHasPhoto(true);
        setPhoto(`data:${response.type};base64, ${response.base64}`);
        setUriPhoto({uri: response.uri});
      }
    });
  };

  const onSubmitHandler = () => {
    setLoading(true);
    let data = {
      fullname: form.fullname,
      event: form.event,
      address: form.address,
      description: form.description,
      photo: photo,
      uriPhoto: uriPhoto,
    };

    Fire.database()
      .ref(`reports/${uuidv4()}/`)
      .set(data, (error) => {
        if (error) {
          // The write failed...
          setLoading(false);
          showMessage({
            message: `Failed to create report!  `,
            description: `${error.message}`,
            type: 'danger',
          });
        } else {
          setLoading(false);
          // Data saved successfully!
          showMessage({
            message: `Report Created Successfully!  `,
            description: `View your report on history page`,
            type: 'success',
          });
          navigation.navigate('HistoryReport');
        }
      });
  };

  return (
    <>
      <View style={styles.page}>
        <Header title="Create Report" onPress={() => navigation.goBack()} />
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.content}>
            <Input
              label="Full Name"
              value={form.fullname}
              onChangeText={(value) => setForm('fullname', value)}
            />
            <Gap height={24} />
            <Text style={styles.label}>Event</Text>
            <View style={styles.pickerWrapper}>
              <Picker
                selectedValue={form.event}
                onValueChange={(itemValue, itemIndex) =>
                  setForm('event', itemValue)
                }>
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
            <Input
              label="Address"
              value={form.email}
              onChangeText={(value) => setForm('address', value)}
            />
            <Gap height={24} />
            <Input
              label="Description"
              value={form.email}
              onChangeText={(value) => setForm('description', value)}
            />
            <Gap height={24} />
            <InputPhoto
              currentPhoto={uriPhoto}
              hasPhoto={hasPhoto}
              setHasPhoto={setHasPhoto}
              onPress={onUploadPhotoHandler}
            />
            <Gap height={40} />
            <Button title="Submit" onPress={onSubmitHandler} />
          </View>
        </ScrollView>
      </View>
      {loading && <Loading />}
    </>
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
