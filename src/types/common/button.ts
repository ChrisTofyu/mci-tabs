import React from 'react';

export type ButtonMouseEventType = React.MouseEvent<
  HTMLButtonElement,
  MouseEvent
>;

export type ButtonEventCallback = (event: ButtonMouseEventType) => void;
