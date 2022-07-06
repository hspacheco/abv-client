import { violet } from "@radix-ui/colors";
import { Cross2Icon, PlusIcon } from "@radix-ui/react-icons";
import { styled } from "@stitches/react";
import { useState } from "react";
import { Button, CloseButton, IconButton } from "../../components/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogTitle,
  DialogTrigger,
} from "../../components/dialog";
import { Input } from "../../components/input";
import { Label } from "../../components/label";

interface IProps {
  onSave: (symptom: { name: string; slug: string }) => void;
}

export function SymptomDialog({ onSave }: IProps) {
  const [value, setValue] = useState("");

  function handleSymptom() {
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
