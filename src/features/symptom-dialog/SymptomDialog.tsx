import { violet } from "@radix-ui/colors";
import { Cross2Icon, PlusIcon } from "@radix-ui/react-icons";
import { styled } from "@stitches/react";
import { useState } from "react";
import { Button, IconButton } from "../../components/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogTitle,
  DialogTrigger,
} from "../../components/dialog";
import { Input } from "../../components/input";

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

const Label = styled("label", {
  fontSize: 12,
  display: "block",
  marginBottom: 4,
});

interface IProps {
  onSave: (symptom: { name: string; slug: string }) => void;
}

export function SymptomDialog({ onSave }: IProps) {
  const [value, setValue] = useState("");

  function handleSymptom() {
    console.log("asdad");
    onSave({ name: value, slug: value.replace(/\s/g, "_") });
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <IconButton>
          <PlusIcon />
        </IconButton>
        {/* <Button variant="violet">Importar</Button> */}
      </DialogTrigger>
      <DialogContent>
        <DialogTitle>Importar termo</DialogTitle>
        <DialogDescription>
          Aumente a base de sintomas para processamento
        </DialogDescription>
        <p>
          Adicione um novo termo correspondente à um sintoma que será utilizado
          no LSA
        </p>
        <p>Os termos adicionados serão limpos ao término do uso da aplicação</p>

        <Label htmlFor="term">Adicionar termo:</Label>
        <Input
          placeholder="ex: muscle pain"
          value={value}
          onChange={(ev) => {
            setValue(ev.target.value);
          }}
        />
        <Button variant="green" css={{ marginLeft: 6 }} onClick={handleSymptom}>
          Salvar
        </Button>
        <DialogClose asChild>
          <CloseButton aria-label="Close">
            <Cross2Icon />
          </CloseButton>
        </DialogClose>
      </DialogContent>
    </Dialog>
  );
}
