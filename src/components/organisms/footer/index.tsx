import { Box } from "@/components/atoms/Box";
import { Typography } from "@/components/atoms/Typography";

/** フッター */
export const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        py: 3,
        color: "commonGray.100",
        borderTop: "1px solid",
        borderColor: "commonGray.40",
        backgroundColor: "commonWhite.0",
        textAlign: "center",
        width: "100%",
      }}
    >
      <Typography variant="W3p12">&copy; TRYT Career ,Inc.</Typography>
    </Box>
  );
};
