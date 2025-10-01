import { Geist } from "next/font/google";
import { Geist_Mono } from "next/font/google";

const routes = {
  '/': true,
  '/about': true,
  '/work': true,
  '/blog': true,
  '/gallery': true,
};

const heading = Geist({
  variable: "--font-heading",
  subsets: ["latin"],
  display: "swap",
});

const body = Geist({
  variable: "--font-body",
  subsets: ["latin"],
  display: "swap",
});

const label = Geist({
  variable: "--font-label",
  subsets: ["latin"],
  display: "swap",
});

const code = Geist_Mono({
  variable: "--font-code",
  subsets: ["latin"],
  display: "swap",
});

const fonts = {
  heading: heading,
  body: body,
  label: label,
  code: code,
};

const globalStyle = {
  theme: 'dark',         // dark | light
  neutral: 'gray',         // sand | gray | slate
  brand: 'blue',         // blue | indigo | violet | magenta | pink | red | orange | yellow | moss | green | emerald | aqua | cyan
  accent: 'indigo',       // blue | indigo | violet | magenta | pink | red | orange | yellow | moss | green | emerald | aqua | cyan
  solid: 'contrast',     // color | contrast
  solidStyle: 'flat',         // flat | plastic
  border: 'playful',      // rounded | playful | conservative
  surface: 'translucent',  // filled | translucent
  transition: 'all',          // all | micro | macro
  scaling: '100',          // 90 | 95 | 100 | 105 | 110
}

const effects = {
  mask: {
    cursor: false,
    x: 50,
    y: 0,
    radius: 100
  },
  gradient: {
    display: true,
    x: 50,
    y: -25,
    width: 100,
    height: 100,
    tilt: 0,
    colorStart: 'accent-background-strong',
    colorEnd: 'static-transparent',
    opacity: 50
  },
  dots: {
    display: true,
    size: 2,
    color: 'brand-on-background-weak',
    opacity: 20
  },
  lines: {
    display: false,
    color: 'neutral-alpha-weak',
    opacity: 100
  },
  grid: {
    display: false,
    color: 'neutral-alpha-weak',
    opacity: 100,
    width: 'var(--static-space-32)',
    height: 'var(--static-space-32)'
  }
}
export { fonts };
