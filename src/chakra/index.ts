import { extendTheme } from "@chakra-ui/react";
import { createBreakpoints } from "@chakra-ui/theme-tools";

const breakpoints = createBreakpoints({
    xs: "480px",
    sm: "600px",
    md: "768px",
    lg: "1000px",
    xl: "1200px",
    "2xl": "1536px",
});

export const theme = extendTheme({
    breakpoints,
    colors: {
        brand: {
            accent: "",
            primaryText: "",
            secondaryText: "",
            mainText: ""
        }
    },
    styles:{
        global:{
            "*":{
                fontFamily: "Work Sans",
                fontWeight: "normal"
            },
            body:{
                textAlign: "left"
            }
        }
        
    }
});