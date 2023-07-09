import { extendTheme } from "@chakra-ui/react"
import { inputTheme } from "../(landing-page)/UI/Variants/InputTheme";
import { accordionTheme } from "../(landing-page)/UI/Variants/AccordionTheme";


const theme = extendTheme({
    components: { 
      Input: inputTheme, 
      Accordion: accordionTheme 
    },
    colors: {
      green: {
          100: "#3DA542",
          200: "#328636",
        },
      
      gray: {
        200: "#262D33",
      },

      blue: {
        100: "#4299FF",
      },

      text: {
        100: "#F2F2F8",
        200: "#262D33",
      },
    },

    breakpoints: {
      sm: '30em', // 480px
      md: '48em', // 768px
      lg: '62em', // 992px
      xl: '80em', // 1280px
      xxl: '96em', // 1536px
      xxxl: '160em', // 2560px
    },

    styles: {
      global: () => ({
        "*": {
          boxSizing: "border-box",
          scrollBehavior: "smooth",
          padding: 0,
          margin: 0,
        },
  
        "html, body": {
          fontFamily: '"Roboto Slab", "sans-serif"',
          color: "#F2F2F8",
        },
        "a, a:link, a:visited, a:hover, a:active": {
          textDecoration: "none",
        },

        "ul, li": {
          listStyle: "none",
        },
      }),
    },
  })

export default theme;