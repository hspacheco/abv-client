import { violet } from "@radix-ui/colors";
import { Cross2Icon } from "@radix-ui/react-icons";
import { styled } from "@stitches/react";
import { Button } from "../../components/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogTitle,
  DialogTrigger,
} from "../../components/dialog";

const CloseButton = styled("button", {
  all: "unset",
  fontFamily: "inherit",
  borderRadius: "100%",
  height: 25,
  width: 25,
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  color: violet.violet11,
  position: "absolute",
  top: 10,
  right: 10,

  "&:hover": { backgroundColor: violet.violet4 },
  "&:focus": { boxShadow: `0 0 0 2px ${violet.violet7}` },
});

export function ImportDialog() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="violet">Importar</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogTitle>Importar alguma coisa</DialogTitle>
        <DialogDescription>
          Desrição do dialog
        </DialogDescription>
        <p>conteúdo aqui</p>
        <DialogClose asChild>
          <CloseButton aria-label="Close">
            <Cross2Icon />
          </CloseButton>
        </DialogClose>
      </DialogContent>
    </Dialog>
  );
}
