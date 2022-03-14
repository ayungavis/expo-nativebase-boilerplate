/* eslint-disable @typescript-eslint/no-namespace */
/**
 * Learn more about using TypeScript with React Navigation:
 * https://reactnavigation.org/docs/typescript/
 */

import { NativeStackScreenProps } from '@react-navigation/native-stack';

declare global {
  namespace ReactNavigation {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    type RootParamList = RootStackParamList;
  }
}

export type RootStackParamList = {
  Root: undefined;
  Modal: undefined;
  NotFound: undefined;
};

export type RootStackScreenProps<Screen extends keyof RootStackParamList> =
  NativeStackScreenProps<RootStackParamList, Screen>;
