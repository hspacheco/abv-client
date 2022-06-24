import { Input } from "../../components/input";
import { getStorageRef } from "../../../config/firebase";
import { uploadBytes } from "firebase/storage";
import { styled } from "@stitches/react";
import React, { useRef, useState } from "react";
import { Button } from "../../components/button";
import { Flex } from "../../components/flex";
import { green } from "@radix-ui/colors";

const Label = styled("label", {
  fontSize: 12,
  display: "block",
  marginBottom: 4,
});

const FileInput = styled("input", {
  marginBottom: 6,
});

const SuccessLabel = styled("div", {
  color: green.green11,
  marginLeft: "auto",
  variants: {
    visible: {
      false: {
        display: "none",
      },
    },
  },
});

interface IProps {
  id: string;
  labelText: string;
}

export function UploadFile({ id, labelText }: IProps) {
  const inputRef = useRef<HTMLInputElement>(null);
  const [inputValue, setValue] = useState<string>("");
  const [currentFile, setFile] = useState<File | null>(null);
  const [submissionStatus, setStatus] = useState<"error" | "success" | null>(
    null
  );

  function handleFileChange(event: React.ChangeEvent<HTMLInputElement>) {
    const htmlFile = event.target.files?.[0] as File;
    setFile(htmlFile);
    setValue(htmlFile.name);
  }

  function handleFileUpload() {
    if (!currentFile) {
      console.error("Arquivo não encontrado");
      return;
    }

    const fileName = inputValue || currentFile.name;
    const storageRef = getStorageRef(fileName);

    uploadBytes(storageRef, currentFile)
      .then((snapshot) => {
        console.log("Uploaded a blob or file!");
        inputRef.current?.focus();
        setStatus("success");
      })
      .catch((err) => {
        console.error(err);
        setStatus("error");
      });
  }

  return (
    <>
      <Label htmlFor={id}>{labelText}:</Label>
      <FileInput type="file" accept=".pdf" onChange={handleFileChange} />

      <Flex align="center">
        <Input
          placeholder="Nome referência"
          ref={inputRef}
          id={id}
          value={inputValue}
          onChange={(ev) => {
            setValue(ev.target.value);
          }}
        />
        <Button
          variant="green"
          css={{ marginLeft: 6 }}
          onClick={handleFileUpload}
        >
          Enviar
        </Button>
        <SuccessLabel visible={submissionStatus === "success"}>
          Arquivo enviado !
        </SuccessLabel>
      </Flex>
    </>
  );
}
