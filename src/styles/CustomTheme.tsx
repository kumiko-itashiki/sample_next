// TRYT全域で使用する定数などを管理しています
import { createTheme } from '@mui/material/styles';

/**
 * 不透明度0.8の定数
 * TODO: 後にCustomTheme内に移行する
 */
export const OPACITY_EIGHT = 0.8;

/**
 * MUIのstyles拡張モジュール
 * declare{}内にMUIの型拡張内容を記述
 */
declare module '@mui/material/styles' {
  /**
   * Paletteの拡張型
   */
  interface Palette {
    gradation: Gradation;
    accent: PaletteOptions['primary'];
    alert: PaletteOptions['primary'];
    black: CustomPaletteOptions;
    gray: SimplePaletteColorOptions;
    beige: PaletteOptions['primary'];
    blue: PaletteOptions['primary'];
    white: CustomPaletteOptions;
    shadow: PaletteOptions['primary'];
  }

  /**
   * Gradationの拡張型
   */
  interface Gradation {
    primary: string;
    secondary: string;
    tertiary: string;
  }

  /**
   * CustomPaletteOptionsの拡張型
   */
  interface CustomPaletteOptions {
    main: string;
  }

  interface CustomPaletteOptionsColumn {
    900?: string;
    500?: string;
    400?: string;
    300?: string;
    100?: string;
    50?: string;
    0?: string;
  }

  /**
   * PaletteOptionsの拡張型
   * MUIのcreateThemeでpalette:{}直下の項目を新たに追加できる
   */
  interface PaletteOptions {
    gradation: Gradation;
    accent: PaletteOptions['primary'];
    alert: PaletteOptions['primary'];
    black: CustomPaletteOptions;
    gray: SimplePaletteColorOptions;
    beige: PaletteOptions['primary'];
    blue: PaletteOptions['primary'];
    white: CustomPaletteOptions;
    shadow: PaletteOptions['primary'];
    Cprimary: CustomPaletteOptionsColumn;
    Cgray: CustomPaletteOptionsColumn;
    Cbeige: CustomPaletteOptionsColumn;
    Cwhite: CustomPaletteOptionsColumn;
  }

  /**
   * SimplePaletteColorOptionsの拡張型
   * MUIのcreateThemeでpalette:{}直下の更に一階層下の項目を新たに追加できる
   */
  interface SimplePaletteColorOptions {
    primary?: string;
    secondary?: string;
    tertiary?: string;
    sub?: string;
    light?: string;
    pale?: string;
    palest?: string;
    start?: string;
    end?: string;
  }

  /**
   * BreakpointOverridesの拡張型
   * MUIのcreateThemeでbreakpoints:{}直下の項目を新たに追加できる
   */
  interface BreakpointOverrides {
    sm: true;
    md: true;
    lg: true;
    xl: false;
  }
  /**
   * TypographyVariantsの拡張型
   */
  interface TypographyVariants {
    resB1: React.CSSProperties;
    resB2: React.CSSProperties;
    resB3: React.CSSProperties;
    resN1: React.CSSProperties;
    resN2: React.CSSProperties;
    resN3: React.CSSProperties;
    sinB1: React.CSSProperties;
    sinB2: React.CSSProperties;
    sinB3: React.CSSProperties;
    sinB4: React.CSSProperties;
    sinB5: React.CSSProperties;
    sinB6: React.CSSProperties;
    sinN1: React.CSSProperties;
    sinN2: React.CSSProperties;
    sinN3: React.CSSProperties;
    sinN4: React.CSSProperties;
    sinN5: React.CSSProperties;
    sinN6: React.CSSProperties;
    pNoto: React.CSSProperties;
    //column用
    Ch1?: React.CSSProperties;
    Ch2?: React.CSSProperties;
    Ch3?: React.CSSProperties;
    Ch4?: React.CSSProperties;
    CresB1?: React.CSSProperties;
    CresB2?: React.CSSProperties;
    CresB3?: React.CSSProperties;
    CresB4?: React.CSSProperties;
    CresM1?: React.CSSProperties;
    CresM2?: React.CSSProperties;
    CresM3?: React.CSSProperties;
    CresN1?: React.CSSProperties;
    CresN2?: React.CSSProperties;
    CresN3?: React.CSSProperties;
    CsinB1?: React.CSSProperties;
    CsinB2?: React.CSSProperties;
    CsinB3?: React.CSSProperties;
    CsinB4?: React.CSSProperties;
    CsinM1?: React.CSSProperties;
    CsinM2?: React.CSSProperties;
    CsinM3?: React.CSSProperties;
    CsinM4?: React.CSSProperties;
    CsinN1?: React.CSSProperties;
    CsinN2?: React.CSSProperties;
    CsinN3?: React.CSSProperties;
    CsinN4?: React.CSSProperties;
  }

  /**
   * TypographyVariantsOptionsの拡張型
   */
  interface TypographyVariantsOptions {
    resB1?: React.CSSProperties;
    resB2?: React.CSSProperties;
    resB3?: React.CSSProperties;
    resN1?: React.CSSProperties;
    resN2?: React.CSSProperties;
    resN3?: React.CSSProperties;
    sinB1?: React.CSSProperties;
    sinB2?: React.CSSProperties;
    sinB3?: React.CSSProperties;
    sinB4?: React.CSSProperties;
    sinB5?: React.CSSProperties;
    sinB6?: React.CSSProperties;
    sinN1?: React.CSSProperties;
    sinN2?: React.CSSProperties;
    sinN3?: React.CSSProperties;
    sinN4?: React.CSSProperties;
    sinN5?: React.CSSProperties;
    sinN6?: React.CSSProperties;
    pNoto?: React.CSSProperties;
    //column用
    Ch1?: React.CSSProperties;
    Ch2?: React.CSSProperties;
    Ch3?: React.CSSProperties;
    Ch4?: React.CSSProperties;
    CresB1?: React.CSSProperties;
    CresB2?: React.CSSProperties;
    CresB3?: React.CSSProperties;
    CresB4?: React.CSSProperties;
    CresM1?: React.CSSProperties;
    CresM2?: React.CSSProperties;
    CresM3?: React.CSSProperties;
    CresN1?: React.CSSProperties;
    CresN2?: React.CSSProperties;
    CresN3?: React.CSSProperties;
    CsinB1?: React.CSSProperties;
    CsinB2?: React.CSSProperties;
    CsinB3?: React.CSSProperties;
    CsinB4?: React.CSSProperties;
    CsinM1?: React.CSSProperties;
    CsinM2?: React.CSSProperties;
    CsinM3?: React.CSSProperties;
    CsinM4?: React.CSSProperties;
    CsinN1?: React.CSSProperties;
    CsinN2?: React.CSSProperties;
    CsinN3?: React.CSSProperties;
    CsinN4?: React.CSSProperties;
  }
}

/**
 * MUIのTypography拡張モジュール
 */
declare module '@mui/material/Typography' {
  /**
   * TypographyPropsVariantOverridesの拡張型
   */
  interface TypographyPropsVariantOverrides {
    resB1: true;
    resB2: true;
    resB3: true;
    resN1: true;
    resN2: true;
    resN3: true;
    sinB1: true;
    sinB2: true;
    sinB3: true;
    sinB4: true;
    sinB5: true;
    sinB6: true;
    sinN1: true;
    sinN2: true;
    sinN3: true;
    sinN4: true;
    sinN5: true;
    sinN6: true;
    pNoto: true;
    //column用
    Ch1: true;
    Ch2: true;
    Ch3: true;
    Ch4: true;
    CresB1: true;
    CresB2: true;
    CresB3: true;
    CresB4: true;
    CresM1: true;
    CresM2: true;
    CresM3: true;
    CresN1: true;
    CresN2: true;
    CresN3: true;
    CsinB1: true;
    CsinB2: true;
    CsinB3: true;
    CsinB4: true;
    CsinM1: true;
    CsinM2: true;
    CsinM3: true;
    CsinM4: true;
    CsinN1: true;
    CsinN2: true;
    CsinN3: true;
    CsinN4: true;
  }
}

/**
 * MUIのカスタムテーマを作成
 */
export const CustomTheme = createTheme({
  palette: {
    primary: {
      main: '#3cB37a',
      sub: '#8dd9b4',
      light: '#d0efe0',
      pale: '#eaf8f1',
      palest: '#f5faf8',
      dark: '#006428',
    },
    gradation: {
      primary: 'linear-gradient(123deg, #8bc34a, #3cb37a)',
      secondary: 'linear-gradient(123deg, #ff8200, #f95b45)',
      tertiary: 'linear-gradient(123deg, #ff9c52, #ffb950)',
    },
    accent: {
      main: '#ffb128',
    },
    alert: {
      main: '#f95b45',
      light: '#feded9',
    },
    black: {
      main: '#212121',
    },
    gray: {
      main: '#616161',
      sub: '#90a4ae',
      light: '#eceff1',
    },
    beige: {
      main: '#f5f3ef',
      sub: '#a1887f',
    },
    blue: {
      main: '#448aff',
      sub: '#324148',
    },
    white: {
      main: '#ffffff',
    },
    shadow: {
      main: 'rgba(144,164,174, 0.2)',
      sub: 'rgba(0,206,102, 0.3)',
      light: 'rgba(0,0,0, 0.16)',
    },
    //column用
    Cprimary: {
      400: '#5ac5a5',
      100: '#e2f5f0',
      50: '#f9fcfb',
    },
    Cgray: {
      900: '#393f3b',
      500: '#939493',
      400: '#bec1bf',
      300: '#dcdcdc',
      100: '#f0f3f2',
      50: '#f8f8f8',
    },
    Cbeige: {
      50: '#f1eee6',
    },
    Cwhite: {
      0: '#ffffff',
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 376,
      md: 768,
      lg: 1040,
    },
  },
  typography: {
    fontFamily: ['Roboto', 'HiraginoSans-W3', 'sans-serif'].join(','),
  },
  components: {
    MuiTextField: {
      styleOverrides: {
        root: {
          input: {
            fontFamily: "'Roboto','HiraginoSans-W3'",
            fontSize: '14px',
          },
        },
      },
    },
    MuiTypography: {
      defaultProps: {
        variantMapping: {
          Ch1: 'h1',
          Ch2: 'h2',
          Ch3: 'h3',
          Ch4: 'h4',
          CresB1: 'p',
          CresB2: 'p',
          CresB3: 'p',
          CresB4: 'p',
          CresM1: 'p',
          CresM2: 'p',
          CresM3: 'p',
          CresN1: 'p',
          CresN2: 'p',
          CresN3: 'p',
          CsinB1: 'p',
          CsinB2: 'p',
          CsinB3: 'p',
          CsinB4: 'p',
          CsinM1: 'p',
          CsinM2: 'p',
          CsinM3: 'p',
          CsinM4: 'p',
          CsinN1: 'p',
          CsinN2: 'p',
          CsinN3: 'p',
          CsinN4: 'p',
        },
      },
    },
  },
  spacing: [4, 8, 12, 16, 24, 32, 40, 56],
});

CustomTheme.typography.h1 = {
  fontSize: 24,
  fontFamily: "'Roboto','Noto Sans JP'",
  fontWeight: 'bold',
  lineHeight: '1.25',
  [CustomTheme.breakpoints.up('md')]: {
    fontSize: 32,
  },
};
CustomTheme.typography.h2 = {
  fontSize: 20,
  fontFamily: "'Roboto','Noto Sans JP'",
  fontWeight: 'bold',
  lineHeight: '1.25',
  [CustomTheme.breakpoints.up('md')]: {
    fontSize: 28,
  },
};
CustomTheme.typography.h3 = {
  fontSize: 16,
  fontFamily: "'Roboto','Noto Sans JP'",
  fontWeight: 'bold',
  lineHeight: '1.25',
  [CustomTheme.breakpoints.up('md')]: {
    fontSize: 20,
  },
};
CustomTheme.typography.h4 = {
  fontSize: 14,
  fontFamily: "'Roboto','Noto Sans JP'",
  fontWeight: 'bold',
  lineHeight: '1.25',
  [CustomTheme.breakpoints.up('md')]: {
    fontSize: 16,
  },
};

// res=responsive（PC、SP個別指定） sin=single（PC、SP共通指定）
CustomTheme.typography.resB1 = {
  fontSize: 16,
  fontFamily: "'Roboto','HiraginoSans-W6'",
  fontWeight: '500',
  lineHeight: '1.75',
  [CustomTheme.breakpoints.up('md')]: {
    fontSize: 20,
  },
};
CustomTheme.typography.resB2 = {
  fontSize: 14,
  fontFamily: "'Roboto','HiraginoSans-W6'",
  fontWeight: '500',
  lineHeight: '1.75',
  [CustomTheme.breakpoints.up('md')]: {
    fontSize: 18,
  },
};
CustomTheme.typography.resB3 = {
  fontSize: 12,
  fontFamily: "'Roboto','HiraginoSans-W6'",
  fontWeight: '500',
  lineHeight: '1.75',
  [CustomTheme.breakpoints.up('md')]: {
    fontSize: 16,
  },
};
CustomTheme.typography.resN1 = {
  fontSize: 16,
  fontFamily: "'Roboto','HiraginoSans-W3'",
  fontWeight: '400',
  lineHeight: '1.75',
  [CustomTheme.breakpoints.up('md')]: {
    fontSize: 20,
  },
};
CustomTheme.typography.resN2 = {
  fontSize: 14,
  fontFamily: "'Roboto','HiraginoSans-W3'",
  fontWeight: '400',
  lineHeight: '1.75',
  [CustomTheme.breakpoints.up('md')]: {
    fontSize: 18,
  },
};
CustomTheme.typography.resN3 = {
  fontSize: 12,
  fontFamily: "'Roboto','HiraginoSans-W3'",
  fontWeight: '400',
  lineHeight: '1.75',
  [CustomTheme.breakpoints.up('md')]: {
    fontSize: 16,
  },
};
CustomTheme.typography.sinB1 = {
  fontSize: 20,
  fontFamily: "'Roboto','HiraginoSans-W6'",
  fontWeight: '500',
  lineHeight: '1.75',
};
CustomTheme.typography.sinB2 = {
  fontSize: 18,
  fontFamily: "'Roboto','HiraginoSans-W6'",
  fontWeight: '500',
  lineHeight: '1.75',
};
CustomTheme.typography.sinB3 = {
  fontSize: 16,
  fontFamily: "'Roboto','HiraginoSans-W6'",
  fontWeight: '500',
  lineHeight: '1.75',
};
CustomTheme.typography.sinB4 = {
  fontSize: 14,
  fontFamily: "'Roboto','HiraginoSans-W6'",
  fontWeight: '500',
  lineHeight: '1.75',
};
CustomTheme.typography.sinB5 = {
  fontSize: 12,
  fontFamily: "'Roboto','HiraginoSans-W6'",
  fontWeight: '500',
  lineHeight: '1.75',
};
CustomTheme.typography.sinB6 = {
  fontSize: 10,
  fontFamily: "'Roboto','HiraginoSans-W6'",
  fontWeight: '500',
  lineHeight: '1.75',
};
CustomTheme.typography.sinN1 = {
  fontSize: 20,
  fontFamily: "'Roboto','HiraginoSans-W3'",
  fontWeight: '400',
  lineHeight: '1.75',
};
CustomTheme.typography.sinN2 = {
  fontSize: 18,
  fontFamily: "'Roboto','HiraginoSans-W3'",
  fontWeight: '400',
  lineHeight: '1.75',
};
CustomTheme.typography.sinN3 = {
  fontSize: 16,
  fontFamily: "'Roboto','HiraginoSans-W3'",
  fontWeight: '400',
  lineHeight: '1.75',
};
CustomTheme.typography.sinN4 = {
  fontSize: 14,
  fontFamily: "'Roboto','HiraginoSans-W3'",
  fontWeight: '400',
  lineHeight: '1.75',
};
CustomTheme.typography.sinN5 = {
  fontSize: 12,
  fontFamily: "'Roboto','HiraginoSans-W3'",
  fontWeight: '400',
  lineHeight: '1.75',
};
CustomTheme.typography.sinN6 = {
  fontSize: 10,
  fontFamily: "'Roboto','HiraginoSans-W3'",
  fontWeight: '400',
  lineHeight: '1.75',
};
CustomTheme.typography.pNoto = {
  fontSize: 16,
  fontFamily: "'Roboto','Noto Sans JP'",
  fontWeight: 'bold',
  lineHeight: '1.25',
};

//ここからcolumn用
CustomTheme.typography.Ch1 = {
  fontSize: 20,
  fontFamily: "'Roboto','Noto Sans JP'",
  fontWeight: '700',
  lineHeight: '170%',
  [CustomTheme.breakpoints.up('md')]: {
    fontSize: 24,
  },
};
CustomTheme.typography.Ch2 = {
  fontSize: 18,
  fontFamily: "'Roboto','Noto Sans JP'",
  fontWeight: '700',
  lineHeight: '170%',
  [CustomTheme.breakpoints.up('md')]: {
    fontSize: 22,
  },
};
CustomTheme.typography.Ch3 = {
  fontSize: 16,
  fontFamily: "'Roboto','Noto Sans JP'",
  fontWeight: '700',
  lineHeight: '170%',
  [CustomTheme.breakpoints.up('md')]: {
    fontSize: 20,
  },
};
CustomTheme.typography.Ch4 = {
  fontSize: 14,
  fontFamily: "'Roboto','Noto Sans JP'",
  fontWeight: '700',
  lineHeight: '170%',
  [CustomTheme.breakpoints.up('md')]: {
    fontSize: 16,
  },
};
CustomTheme.typography.CresB1 = {
  fontSize: 14,
  fontFamily: "'Roboto','Noto Sans JP'",
  fontWeight: '700',
  lineHeight: '170%',
  [CustomTheme.breakpoints.up('md')]: {
    fontSize: 16,
  },
};
CustomTheme.typography.CresB2 = {
  fontSize: 12,
  fontFamily: "'Roboto','Noto Sans JP'",
  fontWeight: '700',
  lineHeight: '170%',
  [CustomTheme.breakpoints.up('md')]: {
    fontSize: 14,
  },
};
CustomTheme.typography.CresB3 = {
  fontSize: 11,
  fontFamily: "'Roboto','Noto Sans JP'",
  fontWeight: '700',
  lineHeight: '170%',
  [CustomTheme.breakpoints.up('md')]: {
    fontSize: 12,
  },
};
CustomTheme.typography.CresB4 = {
  fontSize: 12,
  fontFamily: "'Roboto','Noto Sans JP'",
  fontWeight: '700',
  lineHeight: '170%',
  [CustomTheme.breakpoints.up('md')]: {
    fontSize: 16,
  },
};
CustomTheme.typography.CresM1 = {
  fontSize: 14,
  fontFamily: "'Roboto','Noto Sans JP'",
  fontWeight: '500',
  lineHeight: '170%',
  [CustomTheme.breakpoints.up('md')]: {
    fontSize: 16,
  },
};
CustomTheme.typography.CresM2 = {
  fontSize: 12,
  fontFamily: "'Roboto','Noto Sans JP'",
  fontWeight: '500',
  lineHeight: '170%',
  [CustomTheme.breakpoints.up('md')]: {
    fontSize: 14,
  },
};
CustomTheme.typography.CresM3 = {
  fontSize: 11,
  fontFamily: "'Roboto','Noto Sans JP'",
  fontWeight: '500',
  lineHeight: '170%',
  [CustomTheme.breakpoints.up('md')]: {
    fontSize: 12,
  },
};
CustomTheme.typography.CresN1 = {
  fontSize: 14,
  fontFamily: "'Roboto','Noto Sans JP'",
  fontWeight: '400',
  lineHeight: '170%',
  [CustomTheme.breakpoints.up('md')]: {
    fontSize: 16,
  },
};
CustomTheme.typography.CresN2 = {
  fontSize: 12,
  fontFamily: "'Roboto','Noto Sans JP'",
  fontWeight: '400',
  lineHeight: '170%',
  [CustomTheme.breakpoints.up('md')]: {
    fontSize: 14,
  },
};
CustomTheme.typography.CresN3 = {
  fontSize: 11,
  fontFamily: "'Roboto','Noto Sans JP'",
  fontWeight: '400',
  lineHeight: '170%',
  [CustomTheme.breakpoints.up('md')]: {
    fontSize: 12,
  },
};
CustomTheme.typography.CsinB1 = {
  fontSize: 16,
  fontFamily: "'Roboto','Noto Sans JP'",
  fontWeight: '700',
  lineHeight: '170%',
};
CustomTheme.typography.CsinB2 = {
  fontSize: 14,
  fontFamily: "'Roboto','Noto Sans JP'",
  fontWeight: '700',
  lineHeight: '170%',
};
CustomTheme.typography.CsinB3 = {
  fontSize: 12,
  fontFamily: "'Roboto','Noto Sans JP'",
  fontWeight: '700',
  lineHeight: '170%',
};
CustomTheme.typography.CsinB4 = {
  fontSize: 11,
  fontFamily: "'Roboto','Noto Sans JP'",
  fontWeight: '700',
  lineHeight: '170%',
};
CustomTheme.typography.CsinM1 = {
  fontSize: 16,
  fontFamily: "'Roboto','Noto Sans JP'",
  fontWeight: '500',
  lineHeight: '170%',
};
CustomTheme.typography.CsinM2 = {
  fontSize: 14,
  fontFamily: "'Roboto','Noto Sans JP'",
  fontWeight: '500',
  lineHeight: '170%',
};
CustomTheme.typography.CsinM3 = {
  fontSize: 12,
  fontFamily: "'Roboto','Noto Sans JP'",
  fontWeight: '500',
  lineHeight: '170%',
};
CustomTheme.typography.CsinM4 = {
  fontSize: 11,
  fontFamily: "'Roboto','Noto Sans JP'",
  fontWeight: '500',
  lineHeight: '170%',
};
CustomTheme.typography.CsinN1 = {
  fontSize: 16,
  fontFamily: "'Roboto','Noto Sans JP'",
  fontWeight: '400',
  lineHeight: '170%',
};
CustomTheme.typography.CsinN2 = {
  fontSize: 14,
  fontFamily: "'Roboto','Noto Sans JP'",
  fontWeight: '400',
  lineHeight: '170%',
};
CustomTheme.typography.CsinN3 = {
  fontSize: 12,
  fontFamily: "'Roboto','Noto Sans JP'",
  fontWeight: '400',
  lineHeight: '170%',
};
CustomTheme.typography.CsinN4 = {
  fontSize: 11,
  fontFamily: "'Roboto','Noto Sans JP'",
  fontWeight: '400',
  lineHeight: '170%',
};
