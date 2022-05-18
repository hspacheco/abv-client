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
import { dictionary } from "../dictionary";
import { Flex } from "./components/flex";
import { Results } from "./features/results";
import { ScrollArea } from "./components/scroll-area";
import { blackA } from "@radix-ui/colors";
import { PlusIcon } from "@radix-ui/react-icons";
import { IconButton } from "./components/button";

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

// Da pra colocar um filtro como bigramas e trigramas por exemplo
// Adicionar total de sintomas
// Adiciona busca dentro dos sintomas

// Barra de progresso
// Porcentagem associada dos sintomas para o genoma
// Artigos disponiveis

const Title = styled("h2", {
  fontSize: 18,
  textAlign: "left",
});

const GlobalGrid = styled("div", {
  width: "100%",
  display: "grid",
  gridTemplateColumns: "repeat(2, 10em) 1fr",
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
          <div>
            <Flex css={{ paddingRight: 16, paddingLeft: 8 }} align="center">
              <Title css={{ marginRight: 8 }}>Sintomas</Title>
              <IconButton>
                <PlusIcon />
              </IconButton>
            </Flex>
            <ScrollArea scrollHeight="300px">
              <SymptomsGroup />
            </ScrollArea>
          </div>
          <div>
            <Flex css={{ paddingRight: 16, paddingLeft: 8 }} align="center">
              <Title css={{ marginRight: 8 }} >Textos/Genomas</Title>
              <IconButton>
                <PlusIcon />
              </IconButton>
            </Flex>
            <ScrollArea scrollHeight="300px">
              <SymptomsGroup />
            </ScrollArea>
          </div>
          <div style={{ borderLeft: "solid 1px whitesmoke", paddingLeft: 8 }}>
            <Flex direction="row" align="center" justify="spaceBetween">
              <Title>Resultados</Title> <Input placeholder="pesquisar" />
            </Flex>
            <Results />
          </div>
        </GlobalGrid>
      </div>
    </div>
  );
}

export default App;
