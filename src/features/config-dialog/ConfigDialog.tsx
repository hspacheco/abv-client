import { violet } from "@radix-ui/colors";
import { Cross2Icon, GearIcon, PlusIcon } from "@radix-ui/react-icons";
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
import { Flex } from "../../components/flex";
import { Input } from "../../components/input";
import { Label } from "../../components/label";
import { Tag } from "../../components/tag";

interface MinMax {
  min: number;
  max: number;
}

interface ResultConfig {
  low: MinMax;
  medium: MinMax;
  high: MinMax;
}

export function ConfigDialog() {
  const [value, setValue] = useState<ResultConfig>({
    low: { min: 0, max: 0.3 },
    medium: { min: 0.3, max: 0.6 },
    high: { min: 0.6, max: 1.0 },
  });

  function handleConfig() {
    // onSave({ name: value, slug: value.replace(/\s/g, "_") });
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <IconButton>
          <GearIcon />
        </IconButton>
        {/* <Button variant="violet">Importar</Button> */}
      </DialogTrigger>
      <DialogContent>
        <DialogTitle>Ajustar configuração</DialogTitle>
        <DialogDescription>Faixas para visualização</DialogDescription>
        {/* <p>
          Adicione um novo termo correspondente à um sintoma que será utilizado
          no LSA
        </p>
        <p>Os termos adicionados serão limpos ao término do uso da aplicação</p> */}

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            columnGap: 8,
          }}
        >
          {/* Baixo */}
          <div>
            <Tag
              css={{ display: "block", width: 130, marginBottom: 8 }}
              type="danger"
            >
              Baixa
            </Tag>
            <Flex css={{ gap: 12, marginBottom: 12 }}>
              <div>
                <Label htmlFor="term">Mínimo:</Label>
                <Input css={{ width: "5ch" }} value={0} disabled />
              </div>
              <div>
                <Label htmlFor="term">Máximo:</Label>
                <Input
                  css={{ width: "5ch" }}
                  placeholder="ex: 0.3"
                  value={value.low.max}
                  onChange={(ev) => {
                    console.log(ev.target.value);
                  }}
                />
              </div>
            </Flex>
          </div>
          {/* Médio */}
          <div>
            <Tag
              css={{ display: "block", width: 130, marginBottom: 8 }}
              type="warning"
            >
              Média
            </Tag>
            <Flex css={{ gap: 12, marginBottom: 12 }}>
              <div>
                <Label htmlFor="term">Mínimo:</Label>
                <Input css={{ width: "5ch" }} value={value.medium.min} />
              </div>
              <div>
                <Label htmlFor="term">Máximo:</Label>
                <Input
                  css={{ width: "5ch" }}
                  placeholder="ex: 0.3"
                  value={value.medium.max}
                  onChange={(ev) => {
                    console.log(ev.target.value);
                  }}
                />
              </div>
            </Flex>
          </div>
          {/* Alto */}
          <div>
            <Tag
              css={{ display: "block", width: 130, marginBottom: 8 }}
              type="secondary"
            >
              Alta
            </Tag>
            <Flex css={{ gap: 12, marginBottom: 12 }}>
              <div>
                <Label htmlFor="term">Mínimo:</Label>
                <Input css={{ width: "5ch" }} value={value.high.min} />
              </div>
              <div>
                <Label htmlFor="term">Máximo:</Label>
                <Input
                  css={{ width: "5ch" }}
                  placeholder="ex: 0.3"
                  value={value.high.max}
                  onChange={(ev) => {
                    console.log(ev.target.value);
                  }}
                />
              </div>
            </Flex>
          </div>
        </div>

        <Flex justify="end" css={{ marginTop: 8 }}>
          <Button
            variant="green"
            css={{ marginLeft: 6 }}
            onClick={handleConfig}
          >
            Salvar
          </Button>
        </Flex>
        <DialogClose asChild>
          <CloseButton aria-label="Close">
            <Cross2Icon />
          </CloseButton>
        </DialogClose>
      </DialogContent>
    </Dialog>
  );
}
