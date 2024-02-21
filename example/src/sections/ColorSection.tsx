import React from 'react';
import {
  Color,
  ForEach,
  HStack,
  List,
  Spacer,
  Text,
} from 'swiftui-react-native';
import { toWords } from '../utils';

export const ColorSection = () => {
  return (
    <List style={{ flex: 1 }}>
      {ForEach(
        [
          'systemBlue',
          'systemGreen',
          'systemIndigo',
          'systemOrange',
          'systemPink',
          'systemPurple',
          'systemRed',
          'systemTeal',
          'systemYellow',
        ],
        (color, i) => (
          <HStack key={i} spacing={10}>
            <Color
              color={color}
              border={{ width: 1, color: 'systemGray4' }}
              frame={{ width: 25, height: 25 }}
              clipShape={{
                cornerRadius: 5,
                shape: 'roundedRectangle',
              }}
            />
            <Text>{toWords(color)}</Text>
            <Spacer />
          </HStack>
        )
      )}
    </List>
  );
};
