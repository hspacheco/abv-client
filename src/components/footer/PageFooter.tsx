import { styled } from "@stitches/react";

interface IProps {
  children?: React.ReactNode;
}

const Footer = styled("footer")

export function PageFooter(props: IProps) {
  return (
    <Footer>{props.children}</Footer>
  );
}