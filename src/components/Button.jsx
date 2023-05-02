import React from 'react';
import { Text, StyleSheet, Pressable } from "react-native";
import { Entypo, Feather, MaterialCommunityIcons } from '@expo/vector-icons';

export default function Button(props) {
  let text = {
    color: '#FFFFFF',
    fontSize: 19,
    fontWeight: 700,
    lineHeight: 23,
  }
  const title = props.title;
  if (title == 'AC') {
    text = {
      color: '#3DC3AC',
      fontSize: 19,
      fontWeight: 700,
      lineHeight: 23,
    };
  }
  const [isHovered, setHovered] = React.useState(false);
  const button = {
    width: 68.5,
    height: 68.5,
    borderRadius: 15,
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 4,
  };
  return (
    <Pressable style={[button, { backgroundColor: isHovered ? '#4F5359' : '#272C32' }]} onPressIn={() => setHovered(true)} onPressOut={() => setHovered(false)} onHoverIn={() => setHovered(true)} onHoverOut={() => setHovered(false)}>
      <Text style={text}>{title}</Text>
    </Pressable>
  );
}

export function ReturnButton() {
  const [isHovered, setHovered] = React.useState(false);
  const button = {
    width: 68.5,
    height: 68.5,
    borderRadius: 15,
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 4,
  };
  return (
    <Pressable style={[button, { backgroundColor: isHovered ? '#4F5359' : '#272C32' }]} onPressIn={() => setHovered(true)} onPressOut={() => setHovered(false)} onHoverIn={() => setHovered(true)} onHoverOut={() => setHovered(false)}>
      <Entypo name="ccw" size={24} color="#FFFFFF" />
    </Pressable>
  )
}
export function DivideButton() {
  const [isHovered, setHovered] = React.useState(false);
  const button = {
    width: 68.5,
    height: 68.5,
    borderRadius: 15,
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 4,
  };
  return (
    <Pressable style={[button, { backgroundColor: isHovered ? '#4F5359' : '#272C32' }]} onPressIn={() => setHovered(true)} onPressOut={() => setHovered(false)} onHoverIn={() => setHovered(true)} onHoverOut={() => setHovered(false)}>
      <Feather name="divide" size={24} color="#974A52" />
    </Pressable>
  )
}
export function PercentButton() {
  const [isHovered, setHovered] = React.useState(false);
  const button = {
    width: 68.5,
    height: 68.5,
    borderRadius: 15,
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 4,
  };
  return (
    <Pressable style={[button, { backgroundColor: isHovered ? '#4F5359' : '#272C32' }]} onPressIn={() => setHovered(true)} onPressOut={() => setHovered(false)} onHoverIn={() => setHovered(true)} onHoverOut={() => setHovered(false)}>
      <Feather name="percent" size={24} color="#3DC3AC" />
    </Pressable>
  )
}
export function PlusButton() {
  const [isHovered, setHovered] = React.useState(false);
  const button = {
    width: 68.5,
    height: 68.5,
    borderRadius: 15,
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 4,
  };
  return (
    <Pressable style={[button, { backgroundColor: isHovered ? '#4F5359' : '#272C32' }]} onPressIn={() => setHovered(true)} onPressOut={() => setHovered(false)} onHoverIn={() => setHovered(true)} onHoverOut={() => setHovered(false)}>
      <MaterialCommunityIcons name="plus" size={24} color="#974A52" />
    </Pressable>
  )
}

export function MinusButton() {
  const [isHovered, setHovered] = React.useState(false);
  const button = {
    width: 68.5,
    height: 68.5,
    borderRadius: 15,
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 4,
  };
  return (
    <Pressable style={[button, { backgroundColor: isHovered ? '#4F5359' : '#272C32' }]} onPressIn={() => setHovered(true)} onPressOut={() => setHovered(false)} onHoverIn={() => setHovered(true)} onHoverOut={() => setHovered(false)}>
      <MaterialCommunityIcons name="minus" size={24} color="#974A52" />
    </Pressable>
  )
}

export function EqualButton() {
  const [isHovered, setHovered] = React.useState(false);
  const button = {
    width: 68.5,
    height: 68.5,
    borderRadius: 15,
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 4,
  };
  return (
    <Pressable style={[button, { backgroundColor: isHovered ? '#4F5359' : '#272C32' }]} onPressIn={() => setHovered(true)} onPressOut={() => setHovered(false)} onHoverIn={() => setHovered(true)} onHoverOut={() => setHovered(false)}>
      <MaterialCommunityIcons name="equal" size={24} color="#974A52" />
    </Pressable>
  )
}
export function MultiButton() {
  const [isHovered, setHovered] = React.useState(false);
  const button = {
    width: 68.5,
    height: 68.5,
    borderRadius: 15,
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 4,
  };
  return (
    <Pressable style={[button, { backgroundColor: isHovered ? '#4F5359' : '#272C32' }]} onPressIn={() => setHovered(true)} onPressOut={() => setHovered(false)} onHoverIn={() => setHovered(true)} onHoverOut={() => setHovered(false)}>
      <Feather name="x" size={24} color="#974A52" />
    </Pressable>
  )
}
export function PlusMinusButton() {
  const [isHovered, setHovered] = React.useState(false);
  const button = {
    width: 68.5,
    height: 68.5,
    borderRadius: 15,
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 4,
  };
  return (
    <Pressable style={[button, { backgroundColor: isHovered ? '#4F5359' : '#272C32' }]} onPressIn={() => setHovered(true)} onPressOut={() => setHovered(false)} onHoverIn={() => setHovered(true)} onHoverOut={() => setHovered(false)}>
      <MaterialCommunityIcons name="plus-minus-variant" size={24} color="#3DC3AC" />
    </Pressable>
  )
}
