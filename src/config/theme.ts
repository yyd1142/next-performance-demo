import { createTheme, ThemeOptions } from '@mui/material';

export const themeConfig: ThemeOptions  = {
    palette: {
      primary: {
        main: '#006271',
        contrastText: '#fff',
      },
      secondary: {
        main: '#19857b',
      },
    },
    typography: {
      htmlFontSize: 100,
      fontFamily: 'Inter UI',
      h4: {
        marginBlockStart: 0,
        marginBlockEnd: 0,
      },
      button: {
        textTransform: 'none',
      },
    },
    components: {
      MuiFormControl: {
        styleOverrides: {
          root: {
            marginBottom: '1rem',
          },
        },
      },
      MuiFormLabel: {
        styleOverrides: {
          root: {},
        },
      },
      MuiFormHelperText: {
        styleOverrides: {
          root: {
            marginTop: '0.3125rem',
            marginLeft: 0,
            marginRight: 0,
            fontSize: '0.875rem',
          },
        },
      },
      MuiSelect: {
        styleOverrides: {
          outlined: {
            textAlign: 'left',
          },
        },
      },
      MuiButton: {
        styleOverrides: {
          root: {
            boxShadow: 'none',
            '&:hover': {
              boxShadow: 'none',
            },
          },
          containedPrimary: {
            '&:hover': {
              backgroundColor: '#006f80',
            },
          },
        },
      },
      MuiCheckbox: {
        styleOverrides: {
          root: {
            '&:hover': {
              backgroundColor: 'transparent',
            },
          },
        },
      },
      MuiRadio: {
        styleOverrides: {
          root: {
            '&:hover': {
              backgroundColor: 'transparent',
            },
          },
        },
      },
      MuiPaper: {
        styleOverrides: {
          root: {
            boxShadow: '0.02rem 0.02rem 0.06rem 0 rgba(53, 94, 149, 0.13)',
          },
        },
      },
    },
  };
  
  export const theme = createTheme(themeConfig);