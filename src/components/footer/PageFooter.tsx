import { styled } from "@stitches/react";

interface IProps {
  children?: React.ReactNode;
}

const Footer = styled("footer", {
  marginLeft: 12,
  marginRight: 12,
  fontSize: 14
});

export function PageFooter(props: IProps) {
  return <Footer>{props.children}</Footer>;
}
