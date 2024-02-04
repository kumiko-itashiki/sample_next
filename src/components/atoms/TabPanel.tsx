/** TabPanelのpropsの型 */
interface TabPanelProps {
  children?: React.ReactNode;
  // 自身のタブ識別番号
  index: number;
  // どのタブを選択しているか
  value: number;
}

/**
 * [atoms]　Tab用のパネル
 * @param props -　TabPanelProps
 */
export const TabPanel = (props: TabPanelProps) => {
  const { children, value, index, ...other } = props;

  return (
    <div hidden={value !== index} {...other}>
      {value === index && <>{children}</>}
    </div>
  );
};
