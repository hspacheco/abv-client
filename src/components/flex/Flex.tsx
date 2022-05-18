import { styled } from "@stitches/react";

export const Flex = styled("div", {
  display: "flex",
  variants: {
    direction: {
      row: {
        flexDirection: "row",
      },
      column: {
        flexDirection: "column",
      },
    },
    align: {
      center: {
        alignItems: "center",
      },
      right: {
        alignItems: "right",
      },
    },
    justify: {
      spaceBetween: {
        justifyContent: "space-between"
      }
    }
  },
});
