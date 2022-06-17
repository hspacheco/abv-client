import { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { Input } from "./components/input";
import { styled } from "@stitches/react";
import {
  Checkbox,
  CheckboxIndicator,
  CheckboxLabel,
} from "./components/checkbox";
import { CheckIcon } from "@radix-ui/react-icons";
import { dictionary, fileNames } from "../dictionary";
import { Flex } from "./components/flex";
import { Results } from "./features/results";
import { ScrollArea } from "./components/scroll-area";
import { blackA } from "@radix-ui/colors";
import { PlusIcon } from "@radix-ui/react-icons";
import { Button, IconButton } from "./components/button";

const SymptomsGroup = () => (
  <Flex direction="column">
    {dictionary.map((symp, idx) => (
      <Flex align="center" css={{ marginBottom: 8 }} key={idx + symp}>
        <Checkbox defaultChecked id="c1">
          <CheckboxIndicator>
            <CheckIcon />
          </CheckboxIndicator>
        </Checkbox>
        <CheckboxLabel css={{ paddingLeft: 15 }} htmlFor="c1">
          {symp}
        </CheckboxLabel>
      </Flex>
    ))}
  </Flex>
);

const FilesGroup = () => (
  <Flex direction="column">
    {fileNames.map((file, idx) => (
      <Flex align="center" css={{ marginBottom: 8 }} key={idx + file}>
        <Checkbox defaultChecked id={file}>
          <CheckboxIndicator>
            <CheckIcon />
          </CheckboxIndicator>
        </Checkbox>
        <CheckboxLabel css={{ paddingLeft: 15 }} htmlFor={file}>
          {file}
        </CheckboxLabel>
      </Flex>
    ))}
  </Flex>
);

// Da pra colocar um filtro como bigramas e trigramas por exemplo
// Adicionar total de sintomas
// Adiciona busca dentro dos sintomas

// Barra de progresso
// Porcentagem associada dos sintomas para o genoma
// Artigos disponiveis
// Conversao de valores grandes está quebrando as colunas e nao formata direito
// Adicionar checkbox selecionar todos
// Adicionar checkbox bigramas trigramas
// adicionar campo de texto para escrever sintomas

const Title = styled("h2", {
  fontSize: 18,
  textAlign: "left",
  textTransform: "uppercase"
});

const GlobalGrid = styled("div", {
  width: "100%",
  display: "grid",
  gridTemplateColumns: "20em 1fr",
});

const ConfigGrid = styled("div", {
  width: "100%",
  display: "grid",
  gridTemplateColumns: "repeat(2, 1fr)",
  gridTemplateRows: "450px auto",
  rowGap: 18,
});

const BoxShadow = styled("div", {
  boxShadow: `0 2px 10px ${blackA.blackA7}`,
});

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Resultados</h1>
      </header>
      <div className="App-content">
        <GlobalGrid>
          <ConfigGrid>
            <div>
              <Flex css={{ paddingRight: 16, paddingLeft: 8 }} align="center">
                <Title css={{ marginRight: 8 }}>Sintomas</Title>
                <IconButton>
                  <PlusIcon />
                </IconButton>
              </Flex>
              <ScrollArea scrollHeight="400px">
                <SymptomsGroup />
              </ScrollArea>
            </div>
            <div>
              <Flex css={{ paddingRight: 16, paddingLeft: 8 }} align="center">
                <Title css={{ marginRight: 8 }}>Locus/Arquivos</Title>
                <IconButton>
                  <PlusIcon />
                </IconButton>
              </Flex>
              <ScrollArea scrollHeight="400px">
                <FilesGroup />
              </ScrollArea>
            </div>
            <Button
              variant="green"
              css={{ marginBottom: 8, gridColumn: "1/3" }}
            >
              Processar informações
            </Button>
          </ConfigGrid>
          <div
            style={{
              borderLeft: "solid 1px #ffe4e4",
              paddingLeft: 8,
              maxHeight: 500,
              overflowY: "scroll",
            }}
          >
            <Flex
              direction="row"
              align="center"
              justify="spaceBetween"
              css={{
                backgroundColor: "#f9f8f8",
                position: "sticky",
                top: 0,
                padding: "0 8px",
              }}
            >
              <Title>Resultados</Title>{" "}
              <Input css={{ width: 400 }} placeholder="Pesquisar ..." />
            </Flex>
            <Results />
          </div>
        </GlobalGrid>
      </div>
    </div>
  );
}

export default App;
