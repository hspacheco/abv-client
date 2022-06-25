import { Checkbox, CheckboxIndicator } from "../../components/checkbox";
import { CheckIcon } from "@radix-ui/react-icons";
import { useEffect, useState } from "react";
import { CheckboxLabel } from "../../components/checkbox";
import { Flex } from "../../components/flex";

type SymptomsGroup = Array<{ name: string; slug: string }>;

interface IProps {
  symptoms: SymptomsGroup | null;
  onChange?: (selectedSymptoms: SymptomsGroup) => void;
}

export function SymptomsGroup({ symptoms, onChange }: IProps) {
  const [selectedSymptoms, setSymptoms] = useState<SymptomsGroup>([]);
  
  useEffect(() => {
    setSymptoms(symptoms ?? []);
  }, [symptoms]);

  useEffect(() => {
    onChange?.(selectedSymptoms);
  }, [selectedSymptoms])

  if (!symptoms) return <div>Carregando ...</div>;

  return (
    <Flex direction="column">
      {symptoms.map(({ name, slug }, idx) => (
        <Flex align="center" css={{ marginBottom: 8 }} key={idx + slug}>
          <Checkbox
            checked={selectedSymptoms.some((symp) => symp.slug === slug)}
            id={slug}
            onCheckedChange={(ev) => {
              if (typeof ev === "boolean") {
                if (ev) setSymptoms((old) => [...old, { name, slug }]);
                else
                  setSymptoms((old) =>
                    old.filter((symp) => symp.slug !== slug)
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
    </Flex>
  );
}
