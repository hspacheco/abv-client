import { violet } from "@radix-ui/colors";
import { Cross2Icon, PlusIcon } from "@radix-ui/react-icons";
import { styled } from "@stitches/react";
import { Button, CloseButton, IconButton } from "../../components/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogTitle,
  DialogTrigger,
} from "../../components/dialog";
import { UploadFile } from "../upload-file";

export function ImportDialog() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <IconButton>
          <PlusIcon />
        </IconButton>
      </DialogTrigger>
      <DialogContent>
        <DialogTitle>Importar documentos</DialogTitle>
        <DialogDescription>Aumente a base de arquivos</DialogDescription>
        <p>
          Submeta o arquivo para ser armazenado na nossa base. Após o envio
          preencha o campo <strong>nome de referência</strong>. O nome
          referência servirá para a exibição de resultados, caso não seja
          definido o nome do arquivo será utilizado.
        </p>
        <p>
          Após esta etapa selecione <strong color="green">Processar </strong>
        </p>
        <p>
          Por padrão suportamos apenas arquivos <strong>.pdf</strong>
        </p>
        <UploadFile id="upload-file" labelText="Enviar" />
        <DialogClose asChild>
          <CloseButton aria-label="Close">
            <Cross2Icon />
          </CloseButton>
        </DialogClose>
      </DialogContent>
    </Dialog>
  );
}
