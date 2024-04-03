import React, { useState } from 'react';
import { View, Switch, StyleSheet } from 'react-native';

const RTLToggle = ({ onChange }) => {
  const [isRTL, setIsRTL] = useState(false);

  const toggleRTL = () => {
    const newValue = !isRTL;
    setIsRTL(newValue);
    if (onChange) {
      onChange(newValue);
    }
  };

  return (
    <View style={styles.container}>
      <Switch
        value={isRTL}
        onValueChange={toggleRTL}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
});

export default RTLToggle;
