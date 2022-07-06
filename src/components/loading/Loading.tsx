import { keyframes, styled } from "@stitches/react";

const shimmer = keyframes({
  "100%": { transform: "translateX(100%)" },
});

const Loading = styled("span", {
  display: "inline-block",
  height: "4px",
  width: "100%",
  position: "relative",
  overflow: "hidden",
  backgroundColor: "rgb(87, 70, 175)",
  "&::after": {
    position: "absolute",
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    transform: "translateX(-100%)",
    backgroundImage:
      "linear-gradient(90deg, #fff0 0, #fff3 20%, #ffffff80 60%, #fff0)",
    animation: `${shimmer} 2s infinite`,
    content: "",
  },
  variants: {
    visible: {
      false: {
        display: "none",
      },
    },
  },
});

interface IProps {
  isLoading?: boolean;
  children: React.ReactNode;
}

const Wrapper = styled("div", {
  position: "relative",
});

export function LoadingWrapper({ children, isLoading }: IProps) {
  return (
    <Wrapper>
      <Loading
        css={{ position: "absolute", top: 0, zIndex: 100 }}
        visible={Boolean(isLoading)}
      />
      {children}
    </Wrapper>
  );
}
