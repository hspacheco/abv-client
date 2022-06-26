import { blackA } from "@radix-ui/colors";
import { styled } from "@stitches/react";
import { Flex } from "../flex";

const Title = styled("h4", {
  fontSize: 24,
  color: blackA.blackA6,
});

export function Empty() {
  return (
    <Flex align="center" justify="center" css={{ position: "relative" }}>
      <Title>Sem dados para exibir</Title>
    </Flex>
  );
}
