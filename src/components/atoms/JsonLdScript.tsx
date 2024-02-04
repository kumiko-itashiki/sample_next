/** JsonLdScriptのpropsの型 */
type JsonLdProps = {
  data: string;
};

/**
 * [atoms] 構造化データ JSON-LDのScriptタグ
 * @param data JSON-LDのデータ
 * @returns scriptタグ
 */
export const JsonLdScript = ({ data }: JsonLdProps) => {
  return (
    <script
      type='application/ld+json'
      dangerouslySetInnerHTML={{ __html: data }}
    />
  );
};
