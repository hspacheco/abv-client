import { styled } from "@stitches/react";

const StyledTag = styled("span", {
  padding: "2px 8px",
  textTransform: "uppercase",
  textAlign: "center",
  fontSize: 12,
  borderRadius: 16,
  fontWeight: 700,
  maxHeight: 43,
  alignSelf: "center",
  variants: {
    type: {
      secondary: {
        color: "#244C3C",
        backgroundColor: "#6DE5B5"
      },
      danger: {
        color: "#660E13",
        backgroundColor: "#F5626A"
      },
      warning: {
        color: "#9F7300",
        backgroundColor: "#FFCB44"
      }
    }
  }
});

export const Tag = StyledTag;