import { Tag } from "../../components/tag";

export function ResultTag({ score }: { score: number }) {
  // return score;
  const type =
    score <= 0.3
      ? "danger"
      : score < 0.6 && score > 0.3
      ? "warning"
      : "secondary";
  const name =
    score <= 0.3 ? "baixa" : score < 0.6 && score > 0.3 ? "média" : "alta";
  return <Tag type={type}>{name}</Tag>;
}