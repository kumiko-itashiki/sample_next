// 共通するスタイルを定義する
// TODO: 暫定的に介護ワーカーLPフォームの設定値を設定している
import { createTheme } from "@mui/material/styles";

/**
 * MUIのstyles拡張モジュール
 * declare{}内にMUIの型拡張内容を記述
 */
declare module "@mui/material/styles" {
  /**
   *  Paletteの拡張型
   */

  interface Palette {
    commonGray: CustomPaletteOptionsLp;
    commonWhite: CustomPaletteOptionsLp;
    commonBlue: CustomPaletteOptionsLp;
    commonGreen: CustomPaletteOptionsLp;
    commonOrange: CustomPaletteOptionsLp;
    commonRed: CustomPaletteOptionsLp;
    iryouBlue: CustomPaletteOptionsLp;
    iryouEmelard: CustomPaletteOptionsLp;
    iryouBeige: CustomPaletteOptionsLp;
    kaigoBrown: CustomPaletteOptionsLp;
    kaigoOrange: CustomPaletteOptionsLp;
    kaigoBlue: CustomPaletteOptionsLp;
    kaigoShadow: CustomPaletteOptionsLp;
    gradation?: GradationPaletteColorOptions;
  }

  /**
   * PaletteOptionsの拡張型
   * MUIのcreateThemeでpalette:{}直下の項目を新たに追加できる
   */
  interface PaletteOptions {
    commonGray: CustomPaletteOptionsLp;
    commonWhite: CustomPaletteOptionsLp;
    commonBlue: CustomPaletteOptionsLp;
    commonGreen: CustomPaletteOptionsLp;
    commonOrange: CustomPaletteOptionsLp;
    commonRed: CustomPaletteOptionsLp;
    iryouBlue: CustomPaletteOptionsLp;
    iryouEmelard: CustomPaletteOptionsLp;
    iryouBeige: CustomPaletteOptionsLp;
    kaigoBrown: CustomPaletteOptionsLp;
    kaigoOrange: CustomPaletteOptionsLp;
    kaigoBlue: CustomPaletteOptionsLp;
    kaigoShadow: CustomPaletteOptionsLp;
    gradation?: GradationPaletteColorOptions;
  }

  //ベタ塗りのパレット選択肢
  interface CustomPaletteOptionsLp {
    100?: string;
    90?: string;
    80?: string;
    70?: string;
    60?: string;
    50?: string;
    40?: string;
    30?: string;
    20?: string;
    10?: string;
    0?: string;
  }

  //グラデーションのパレット選択肢
  interface GradationPaletteColorOptions {
    trytGreen?: string;
  }

  // TODO: 以下はGSサイトの設定値を参考として記載
  // TODO: 適宜変更すること
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

  // TODO: 以下はGSサイトの設定値を参考として記載
  // TODO: 適宜変更すること
  /**
   * TypographyVariantsの拡張型
   */
  interface TypographyVariants {
    W6h16: React.CSSProperties;
    W6p18: React.CSSProperties;
    W6p16: React.CSSProperties;
    W6p14: React.CSSProperties;
    W6p12: React.CSSProperties;
    W6p10: React.CSSProperties;
    W3p14: React.CSSProperties;
    W3p12: React.CSSProperties;
    W3p10: React.CSSProperties;
    sinN4: React.CSSProperties;
    sinN5: React.CSSProperties;
    sinN6: React.CSSProperties;
    pNoto: React.CSSProperties;
  }

  // TODO: 以下はGSサイトの設定値を参考として記載
  // TODO: 適宜変更すること
  /**
   * TypographyVariantsOptionsの拡張型
   */
  interface TypographyVariantsOptions {
    W6p18?: React.CSSProperties;
    W6p16?: React.CSSProperties;
    W6p14?: React.CSSProperties;
    W6p12?: React.CSSProperties;
    W6p10?: React.CSSProperties;
    W3p14?: React.CSSProperties;
    W3p12?: React.CSSProperties;
    W3p10?: React.CSSProperties;
  }
}

// TODO: 以下はGSサイトの設定値を参考として記載
// TODO: 適宜変更すること
/**
 * MUIのTypography拡張モジュール
 */
declare module "@mui/material/Typography" {
  /**
   * TypographyPropsVariantOverridesの拡張型
   */
  interface TypographyPropsVariantOverrides {
    W6h16: true;
    W6p18: true;
    W6p16: true;
    W6p14: true;
    W6p12: true;
    W6p10: true;
    W3p14: true;
    W3p12: true;
    W3p10: true;
  }
}

/**
 * MUIのカスタムテーマ
 */
export const customTheme = createTheme({
  palette: {
    commonGray: {
      100: "#333",
      80: "#616161",
      60: "#B4B4B4",
      50: "#CCC",
      40: "#D8D9D9",
      20: "#EEE",
      10: "#F8F8F8",
    },
    commonWhite: {
      0: "#FFF",
    },
    commonBlue: {
      100: "#0A4D8E",
    },
    commonGreen: {
      100: "#3CB37A",
      50: "#3DC308",
      30: "#B1E79C",
    },
    commonOrange: {
      100: "#FF6600",
    },
    commonRed: {
      100: "#FF6666",
      10: "#FEDED9",
    },
    iryouBlue: {
      80: "#3366CC",
      60: "#0099FF",
    },
    iryouEmelard: {
      100: "#0070C0",
      50: "#29ABE2",
    },
    iryouBeige: {
      10: "#F7F6F0",
    },
    kaigoBrown: {
      100: "#C37110",
    },
    kaigoOrange: {
      100: "#F79D33",
      30: "#FAC546",
      10: "#FEF4DB",
    },
    kaigoBlue: {
      100: "#39A1BF",
    },
    kaigoShadow: {
      80: "rgba(195,113,16,.8)",
    },
    gradation: {
      trytGreen: "linear-gradient(123deg, #8bc34a, #3cb37a)",
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
    fontFamily: ["Arial", "HiraginoSans-W3", "sans-serif"].join(","),
  },
  components: {
    MuiTextField: {
      styleOverrides: {
        root: {
          input: {
            fontFamily: "Arial, 'HiraginoSans-W3', sans-serif",
            fontSize: "14px",
          },
        },
      },
    },
  },
  spacing: [4, 8, 12, 16, 24, 32, 40, 56],
});

// TODO: 以下はGSサイトの設定値を参考として記載
// TODO: 適宜変更すること

//Headline
customTheme.typography.W6h16 = {
  fontSize: 16,
  fontFamily: "'Arial','HiraginoSans-W6'",
  fontWeight: "500",
  lineHeight: "1.25",
};

//Text
customTheme.typography.W6p18 = {
  fontSize: 18,
  fontFamily: "'Arial','HiraginoSans-W6'",
  fontWeight: "500",
  lineHeight: "1.75",
};
customTheme.typography.W6p16 = {
  fontSize: 16,
  fontFamily: "'Arial','HiraginoSans-W6'",
  fontWeight: "500",
  lineHeight: "1.75",
};
customTheme.typography.W6p14 = {
  fontSize: 14,
  fontFamily: "'Arial','HiraginoSans-W6'",
  fontWeight: "500",
  lineHeight: "1.75",
};
customTheme.typography.W6p12 = {
  fontSize: 12,
  fontFamily: "'Arial','HiraginoSans-W6'",
  fontWeight: "500",
  lineHeight: "1.75",
};
customTheme.typography.W6p10 = {
  fontSize: 10,
  fontFamily: "'Arial','HiraginoSans-W6'",
  fontWeight: "500",
  lineHeight: "1.75",
};
customTheme.typography.W3p14 = {
  fontSize: 14,
  fontFamily: "'Arial','HiraginoSans-W3'",
  fontWeight: "400",
  lineHeight: "1.75",
};
customTheme.typography.W3p12 = {
  fontSize: 12,
  fontFamily: "'Arial','HiraginoSans-W3'",
  fontWeight: "400",
  lineHeight: "1.75",
};
customTheme.typography.W3p10 = {
  fontSize: 10,
  fontFamily: "'Arial','HiraginoSans-W3'",
  fontWeight: "400",
  lineHeight: "1.75",
};
