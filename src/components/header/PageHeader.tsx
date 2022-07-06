import { styled } from "@stitches/react";

interface IProps {
  children?: React.ReactNode | string;
}

const Header = styled("header", {
  marginLeft: 12,
  marginRight: 12,
});

export function PageHeader(props: IProps) {
  return <Header>{props.children}</Header>;
}
