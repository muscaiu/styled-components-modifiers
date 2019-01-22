
export default {
  primary: ({ theme }) => `
      background-color: ${theme.colors.primary};
    `,
  secondary: ({ theme }) => `
      background-color: ${theme.colors.secondary};
    `,
  disabled: () => `
      opacity: 50%;
      pointer-events: none;
    `,
};
