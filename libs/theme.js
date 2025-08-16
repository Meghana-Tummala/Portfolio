// theme.js or theme.ts
import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  // 1. Set the font families (Press Start 2P for all text)
  fonts: {
    heading: "'Press Start 2P', cursive",
    body: "'Press Start 2P', cursive",
  },
  // 2. Customize font size tokens to align with an 8px-based scale
  fontSizes: {
    xs: "0.5rem",   // 8px
    sm: "0.875rem", // 14px (optional; use if you want a step between 8 and 16)
    md: "1rem",     // 16px (base body text)
    lg: "1.5rem",   // 24px
    xl: "2rem",     // 32px
    "2xl": "3rem",  // 48px (for very large display text if needed)
    // You can continue the scale if needed: 3xl: "4rem" (64px), etc.
  },
  // 3. Global styles for base elements (optional but ensures HTML elements use the new sizes)
  styles: {
    global: {
      "html, body": {
        fontSize: "sm",        // Base font size 16px for body
        lineHeight: "1.5",     // Adjust line-height as needed
      },
      "h1": { fontSize: "lg" },// 32px for h1
      "h2": { fontSize: "md" },// 24px for h2
      "h3": { fontSize: "sm" },// 16px for h3
      "h4,h5,h6": { fontSize: "sm" } // 16px for h4-h6 (you can tweak h5,h6 if desired)
    }
  },
  colors: {
    glassTeal: '#88ccca'
    },
  // 4. Component-specific default sizes
  components: {
    Heading: {
      defaultProps: {
        size: "lg", // default size for Heading component (using our redefined "xl" = 32px)
      },
      // Optionally, you can map heading "as" levels to sizes in baseStyle:
      baseStyle: ({ as }) => {
        if (as === "h1") return { fontSize: "lg" };   // 32px
        if (as === "h2") return { fontSize: "md" };   // 24px
        if (as === "h3") return { fontSize: "sm" };   // 16px
        // h4, h5, h6:
        return { fontSize: "sm" };                   // 16px default
      },
    },
    Text: {
      baseStyle: {
        fontSize: "sm", // 16px for all Text components by default
      },
    },
    Link: {
      baseStyle: {
        fontSize: "sm", // 16px for link text (e.g. navbar links)
        textDecoration: "underline", // (Preserve default link style or customize)
      },
    },
    Button: {
      defaultProps: {
        size: "xs", // Use Chakra's "sm" button size by default (smaller padding & font)
      },
      // You can also override the fontSize for button sizes if needed:
      sizes: {
        sm: {
          fontSize: "xs", // 14px within buttons for slightly smaller text
          px: 4, py: 2,    // adjust paddings if needed (Chakra uses space scale)
        },
        md: {
          fontSize: "sm", // 16px for medium buttons (if used)
          // ...padding
        },
      },
    },
  },
});

export default theme;

  


