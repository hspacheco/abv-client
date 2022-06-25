import { Checkbox, CheckboxIndicator } from "../../components/checkbox";
import { CheckIcon } from "@radix-ui/react-icons";
import React, { useEffect, useState } from "react";
import { CheckboxLabel } from "../../components/checkbox";
import { Flex } from "../../components/flex";
import { Input } from "../../components/input";
import { ScrollArea } from "../../components/scroll-area";

type FileItems = Array<{ name: string; slug: string }>;

interface IProps {
  files: FileItems | null;
  onChange?: (selectedSymptoms: FileItems) => void;
}

export function FilesGroup({ files, onChange }: IProps) {
  const [selectedFiles, setFiles] = useState<FileItems>([]);
  const [filteredFiles, setFilteredFiles] = useState<FileItems>([]);

  useEffect(() => {
    setFiles(files ?? []);
    setFilteredFiles(files ?? []);
  }, [files]);

  useEffect(() => {
    onChange?.(selectedFiles);
  }, [selectedFiles]);

  function handleChange(ev: React.ChangeEvent<HTMLInputElement>) {
    const value = ev.target.value;
    if (!ev.target.value) {
      setFilteredFiles(files ?? []);
      return;
    }
    setFilteredFiles(
      (files ?? []).filter((files) =>
        files.name.toLowerCase().includes(value.toLowerCase())
      )
    );
  }

  if (!files) return <div>Carregando ...</div>;

  return (
    <Flex direction="column">
      <Input
        css={{ marginBottom: 16, width: 200 }}
        placeholder="Buscar"
        onChange={handleChange}
      />
      <ScrollArea scrollHeight="400px">
        <div>
          {filteredFiles.map(({ name, slug }, idx) => (
            <Flex align="center" css={{ marginBottom: 8 }} key={idx + slug}>
              <Checkbox
                checked={selectedFiles.some((symp) => symp.slug === slug)}
                id={slug}
                onCheckedChange={(ev) => {
                  if (typeof ev === "boolean") {
                    if (ev) setFiles((old) => [...old, { name, slug }]);
                    else
                      setFiles((old) =>
                        old.filter((file) => file.slug !== slug)
                      );
                  }
                }}
              >
                <CheckboxIndicator>
                  <CheckIcon />
                </CheckboxIndicator>
              </Checkbox>
              <CheckboxLabel css={{ paddingLeft: 15 }} htmlFor={slug}>
                {name}
              </CheckboxLabel>
            </Flex>
          ))}
        </div>
      </ScrollArea>
    </Flex>
  );
}
