import { DefaultTheme } from 'styled-components'

const color = {
  yellow100: '#FFDC5F',
  yellow200: '#F3A203',
  orange: '#FF9900',
  skyblue: '#EEF2FD',
  white: '#fff',
  gray100: '#F5F5F5',
  gray200: '#EEEEEE',
  gray300: '#DDDDDD',
  gray400: '#CCCCCC',
  gray500: '#AAAAAA',
  gray600: '#888888',
  gray700: '#555555',
  black: '#3B3B3B'
}

const fontSize = {
  xs: '1.8rem',
  sm: '2.0rem',
  base: '2.2rem',
  md: '2.4rem',
  lg: '3.0rem'
}

export const theme: DefaultTheme = {
  color,
  fontSize
}

export type ColorTypes = typeof color
export type FontSizeTypes = typeof fontSize
