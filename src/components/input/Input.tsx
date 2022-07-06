import { styled } from "@stitches/react";
import { blackA, gray, violet} from "@radix-ui/colors";

export const Input = styled("input", {
  all: "unset",
  display: "inline-flex",
  textAlign: "left",
  borderRadius: 4,
  padding: "0 10px",
  height: 35,
  fontSize: 15,
  lineHeight: 1,
  backgroundColor: "White",
  color: violet.violet11,
  boxShadow: `0 0 0 1px ${violet.violet7}`,
  '&:focus': { boxShadow: `0 0 0 2px ${violet.violet8}` },
  '&:disabled': { cursor: "not-allowed", color: gray.gray11, borderColor: gray.gray11, boxShadow: `0 0 0 1px ${gray.gray10}`,},
});
