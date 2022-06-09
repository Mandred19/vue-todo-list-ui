import { themeVariables } from '@/theme';

interface CardStyles {
  headerStyle: string;
  headerExtraStyle: string;
  contentStyle: string;
  footerStyle: string;
}

const cardStyles: CardStyles = {
  headerStyle: `padding: ${themeVariables.spacing * 2}px;`,
  headerExtraStyle: `padding: ${themeVariables.spacing * 2}px;`,
  contentStyle: `padding: ${themeVariables.spacing * 2}px;`,
  footerStyle: `padding: ${themeVariables.spacing * 2}px;`,
};

export default cardStyles;
