import type { Preview } from "@storybook/react";
import { withThemeByDataAttribute } from "@storybook/addon-themes";

import "../src/index.css";

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export const decorators = [
  withThemeByDataAttribute({
    themes: {
      // nameOfTheme: 'dataAttributeForTheme',
      light: "",
      dark: "dark",
    },
    defaultTheme: "light",
    /* Important: please remember! */
    // go to D:\Backup\Documents\Programming\development\vocabulary_reviewer\node_modules\@storybook\addon-themes\dist\index.d.ts and add the dataAttribute as optional
    dataAttribute: "data-theme",
  }),
];

export default preview;
