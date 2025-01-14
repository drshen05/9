import '../assets/scss/main.scss';
// import "./components/theme";
import { useTheme } from './components/theme';
import { useBurger } from './components/burger';
import {
  useInsightSlider,
  useTestimonialsSlider,
} from './components/home/slider';

useTheme();
useBurger();
useInsightSlider();
useTestimonialsSlider();
