import React, { useState } from 'react';
import {View, Text, Platform, MaskedViewComponent, TouchableHighlight} from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';

export const DateInput = () => {
  const [date, setDate] = useState(new Date());

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setDate(currentDate);
  };



  const [day, month, year] = [date.getDate(), date.getMonth(), date.getFullYear()];

  return (
    <View>
        <DateTimePicker
          testID="dateTimePicker"
          value={date}
          mode={'date'}
          minimumDate={new Date()}
          display="default"
          onChange={onChange}
          style={{width: 125}}
        />
    </View>
  );
};
