import { GlobalThemeOverrides } from 'naive-ui';

const themeOverrides: GlobalThemeOverrides = {
  common: {},
};

interface ThemeVariables {
  spacing: number,
}

export const themeVariables: ThemeVariables = {
  spacing: 8,
};

export default themeOverrides;
