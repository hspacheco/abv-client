import { styled } from "@stitches/react";
import * as RadioGroupPrimitive from '@radix-ui/react-radio-group';
import { blackA, violet } from "@radix-ui/colors";

const StyledRadio = styled(RadioGroupPrimitive.Item, {
  all: 'unset',
  backgroundColor: 'white',
  width: 18,
  height: 18,
  borderRadius: '100%',
  boxShadow: `0 2px 10px ${blackA.blackA7}`,
  '&:hover': { backgroundColor: violet.violet3 },
  '&:focus': { boxShadow: `0 0 0 2px black` },
});

const StyledIndicator = styled(RadioGroupPrimitive.Indicator, {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '100%',
  height: '100%',
  position: 'relative',
  '&::after': {
    content: '""',
    display: 'block',
    width: 11,
    height: 11,
    borderRadius: '50%',
    backgroundColor: violet.violet11,
  },
});

// Exports
export const RadioGroup = RadioGroupPrimitive.Root;
export const RadioGroupRadio = StyledRadio;
export const RadioGroupIndicator = StyledIndicator;