import { styled } from "@stitches/react";

interface IProps {
  children?: React.ReactNode | string;
}

const Header = styled("header")

export function PageHeader(props: IProps) {
  return (
    <Header>{props.children}</Header>
  );
}