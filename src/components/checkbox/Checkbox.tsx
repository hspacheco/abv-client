import * as CheckboxPrimitive from "@radix-ui/react-checkbox";
import { violet, blackA } from "@radix-ui/colors";
import { styled } from "@stitches/react";

const StyledCheckbox = styled(CheckboxPrimitive.Root, {
  all: "unset",
  backgroundColor: "white",
  width: 20,
  height: 20,
  borderRadius: 4,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  boxShadow: `0 2px 10px ${blackA.blackA7}`,
  "&:hover": { backgroundColor: violet.violet3 },
  "&:focus": { boxShadow: `0 0 0 2px black` },
});

const Label = styled("label", {
  // color: "white",
  fontSize: 15,
  lineHeight: 1,
  userSelect: "none",
});

const StyledIndicator = styled(CheckboxPrimitive.Indicator, {
  color: violet.violet11,
});

// Exports
export const Checkbox = StyledCheckbox;
export const CheckboxIndicator = StyledIndicator;
export const CheckboxLabel = Label;