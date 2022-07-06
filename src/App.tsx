import { useEffect, useMemo, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { Input } from "./components/input";
import { styled } from "@stitches/react";
import {
  Checkbox,
  CheckboxIndicator,
  CheckboxLabel,
} from "./components/checkbox";
import { CheckIcon, GearIcon, UpdateIcon } from "@radix-ui/react-icons";
import { dictionary, fileNames } from "../dictionary";
import { Flex } from "./components/flex";
import { TableResults } from "./features/results";
import { ScrollArea } from "./components/scroll-area";
import { blackA } from "@radix-ui/colors";
import { PlusIcon } from "@radix-ui/react-icons";
import { Button, IconButton } from "./components/button";
import { PageHeader } from "./components/header";
import { PageFooter } from "./components/footer";
import { ImportDialog } from "./features/import-dialog";
import { SymptomsGroup } from "./features/symptoms-group";
import { SymptomDialog } from "./features/symptom-dialog";
import { FilesGroup } from "./features/files-group";
import { LoadingWrapper } from "./components/loading";
import { ConfigDialog } from "./features/config-dialog";
import { RadioGroupIndicator, RadioGroupRadio } from "./components/radio";
import { RadioGroup } from "@radix-ui/react-radio-group";
import { Label } from "./components/label";

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
  textTransform: "uppercase",
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
  rowGap: 12,
});

const BoxShadow = styled("div", {
  boxShadow: `0 2px 10px ${blackA.blackA7}`,
});

type APISymptoms = {
  allSymptoms: Array<{ slug: string; name: string }>;
};

type APIFiles = {
  files: string[];
};

type ResultValue = {
  associatedGenome: Array<{ name: string; score: number }>;
  symptoms: Array<{ name: string; score: number }>;
};

type APILsaScore = {
  lsa_result: Record<string, ResultValue>;
};

const API_URL = import.meta.env.VITE_API_URL;

function App() {
  const [availableSymptoms, setSymptoms] = useState<APISymptoms | null>(null);
  const [availableFiles, setAvailableFiles] = useState<APIFiles | null>(null);
  const [lsaResult, setLsaResult] = useState<APILsaScore | null>(null);
  const [symptomsQuery, setSymptomsQuery] = useState("");
  const [filesQuery, setFilesQuery] = useState("");
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    (async () => {
      try {
        const res = await fetch(`${API_URL}/symptoms`);
        const result = await res.json();
        setSymptoms(result);
      } catch (err) {
        console.error(err);
      }
    })();
  }, []);

  async function handleFileNames() {
    setLoading(true);
    try {
      const res = await fetch(`${API_URL}/file-names`);
      const result = (await res.json()) as APIFiles;
      setAvailableFiles(result);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  }

  async function handleSubmit() {
    setLoading(true);
    try {
      const res = await fetch(
        `${API_URL}/lsa-score?${symptomsQuery}&${filesQuery}`
      );
      const result = (await res.json()) as APILsaScore;
      setLsaResult(result);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  }

  function createSymptomsQuery(symptoms: APISymptoms["allSymptoms"]) {
    const urlSearch = new URLSearchParams();

    for (const symp of symptoms) {
      urlSearch.append("symptom", symp.slug);
    }
    return urlSearch.toString();
  }

  function createFilesQuery(files: APIFiles["files"]) {
    const urlSearch = new URLSearchParams();

    for (const file of files) {
      urlSearch.append("file_name", file);
    }
    return urlSearch.toString();
  }

  const memoFiles = useMemo(
    () =>
      availableFiles?.files.map((res) => ({
        name: res,
        slug: res,
      })) ?? null,
    [availableFiles]
  );

  const memoSymptoms = useMemo(
    () => availableSymptoms?.allSymptoms ?? null,
    [availableSymptoms]
  );

  return (
    <div className="App">
      <PageHeader>
        <h1>Latent Semantic Analysis</h1>
        <p>
          Submeta e avalie os resultados da relevância do conteúdo
          sintomatológico sobre arquivos.
        </p>
      </PageHeader>
      <LoadingWrapper isLoading={isLoading}>
        <div className="App-content">
          <GlobalGrid>
            <ConfigGrid>
              <div>
                <Flex css={{ paddingRight: 16, paddingLeft: 8 }} align="center">
                  <Title css={{ marginRight: 8 }}>Sintomas</Title>
                  <SymptomDialog
                    onSave={(val) => {
                      setSymptoms((old) =>
                        old ? { allSymptoms: [val, ...old.allSymptoms] } : null
                      );
                    }}
                  />
                </Flex>
                <ScrollArea scrollHeight="400px">
                  <SymptomsGroup
                    symptoms={memoSymptoms}
                    onChange={(values) => {
                      setSymptomsQuery(createSymptomsQuery(values));
                    }}
                  />
                </ScrollArea>
              </div>
              <div>
                <Flex css={{ paddingRight: 16, paddingLeft: 8 }} align="center">
                  <Title css={{ marginRight: 8 }}>Arquivos</Title>
                  <ImportDialog />
                  <IconButton css={{ marginLeft: 6 }} onClick={handleFileNames}>
                    <UpdateIcon />
                  </IconButton>
                </Flex>

                <FilesGroup
                  files={memoFiles}
                  onChange={(values) => {
                    setFilesQuery(createFilesQuery(values.map((v) => v.name)));
                  }}
                />
              </div>
              {/* Vetorizador */}
              <div>
                <Title css={{ marginRight: 8 }}>Weighting</Title>
                <Flex css={{ marginBottom: 8 }}>
                  <RadioGroup>
                    <Flex align="center" css={{ marginBottom: 4 }}>
                      <RadioGroupRadio checked value="tfidf" id="tfidf">
                        <RadioGroupIndicator />
                      </RadioGroupRadio>
                      <Label css={{ marginBottom: 0, marginLeft: 6 }}>
                        TF-IDF
                      </Label>
                    </Flex>
                    <Flex align="center">
                      <RadioGroupRadio value="bow" id="bow">
                        <RadioGroupIndicator />
                      </RadioGroupRadio>
                      <Label css={{ marginBottom: 0, marginLeft: 6 }}>
                        Bag-of-Words
                      </Label>
                    </Flex>
                  </RadioGroup>
                  {/* <Button
                  variant="green"
                  // css={{ marginBottom: 8, gridColumn: "1/3" }}
                  onClick={handleSubmit}
                >
                  Processar informações
                </Button> */}
                </Flex>
              </div>
              {/* ngram-range */}
              <div>
                <Title css={{ marginRight: 8 }}>n-gram range</Title>
                <Flex>
                  <RadioGroup>
                    <Flex align="center" css={{ marginBottom: 4 }}>
                      <RadioGroupRadio value="unigram" id="unigram">
                        <RadioGroupIndicator />
                      </RadioGroupRadio>
                      <Label css={{ marginBottom: 0, marginLeft: 6 }}>
                        unigrama
                      </Label>
                    </Flex>
                    <Flex align="center" css={{ marginBottom: 4 }}>
                      <RadioGroupRadio checked value="uni_and_bi" id="uni_and_bi">
                        <RadioGroupIndicator />
                      </RadioGroupRadio>
                      <Label css={{ marginBottom: 0, marginLeft: 6 }}>
                        unigrama e bigrama
                      </Label>
                    </Flex>
                    <Flex align="center" css={{ marginBottom: 4 }}>
                      <RadioGroupRadio value="bigram" id="bigram">
                        <RadioGroupIndicator />
                      </RadioGroupRadio>
                      <Label css={{ marginBottom: 0, marginLeft: 6 }}>
                        bigrama
                      </Label>
                    </Flex>
                  </RadioGroup>
                </Flex>
              </div>
              <Button
                variant="green"
                css={{ marginBottom: 12, gridColumn: "1/3" }}
                onClick={handleSubmit}
              >
                Processar informações
              </Button>
            </ConfigGrid>
            <div
              style={{
                borderLeft: "solid 1px #ffe4e4",
                paddingLeft: 8,
                maxHeight: 625,
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
                <Flex align="center">
                  <Title css={{ marginRight: 8 }}>Resultados</Title>
                  <ConfigDialog />
                </Flex>
                <Input css={{ width: 400 }} placeholder="Pesquisar ..." />
              </Flex>

              <TableResults lsaResults={lsaResult?.lsa_result ?? null} />
            </div>
          </GlobalGrid>
        </div>
      </LoadingWrapper>
      <PageFooter>
        <p>
          <i>Arthropode Borne Virus database</i> -{" "}
          <a href="https://abvdb.uneb.br/">ABVdb</a>
        </p>
      </PageFooter>
    </div>
  );
}

export default App;
