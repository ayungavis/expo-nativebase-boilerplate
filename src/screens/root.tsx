import React from 'react';
import { Container, Heading, Text } from 'native-base';

function RootScreen(): JSX.Element {
  return (
    <Container flex={1} alignItems="center" justifyContent="center" mx="auto">
      <Heading>Root screen</Heading>
      <Text mt="3" fontWeight="medium" textAlign="center">
        Edit `src/screens/root.screen.tsx` and save to reload.
      </Text>
    </Container>
  );
}

export default RootScreen;
