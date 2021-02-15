import React, {useState} from 'react';
import {Image, StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import {IconAddPhoto, IconRemovePhoto, ILNullPhoto} from '../../../assets';
import {colors, fonts} from '../../../utils';

const InputPhoto = ({hasPhoto, setHasPhoto, onPress, currentPhoto}) => {
  return (
    <View style={styles.profile}>
      <Text style={styles.label}>Photo</Text>
      <TouchableOpacity style={styles.avatarWrapper} onPress={onPress}>
        <Image style={styles.avatar} source={currentPhoto} />
        {!hasPhoto && <IconAddPhoto style={styles.addPhoto} />}
        {hasPhoto && <IconRemovePhoto style={styles.addPhoto} />}
      </TouchableOpacity>
    </View>
  );
};

export default InputPhoto;

const styles = StyleSheet.create({
  profile: {
    flex: 1,
    width: '34%',
    height: '34%',
  },
  content: {
    paddingHorizontal: 40,
    paddingBottom: 40,
    flex: 1,
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 100 / 2,
  },
  avatarWrapper: {
    width: 110,
    height: 110,
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: 110 / 2,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
  },
  addPhoto: {position: 'absolute', bottom: 0, right: 0},
  label: {
    fontSize: 16,
    fontFamily: fonts.primary[400],
    color: colors.text.secondary,
    marginBottom: 6,
  },
});
