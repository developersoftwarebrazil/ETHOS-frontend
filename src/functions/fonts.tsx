import {Chathura} from 'next/font/google';
import {Open_Sans} from 'next/font/google';
import {Roboto} from 'next/font/google';

export const chathura = Chathura({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-chathura-logo',
});
export const openSans = Open_Sans({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-open-sans',
});
export const roboto = Roboto({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-roboto',
});