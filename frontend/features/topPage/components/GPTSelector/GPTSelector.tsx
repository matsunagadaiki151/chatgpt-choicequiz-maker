import RadioTab, { TRadioTab } from "@/components/RadioTab/RadioTab";
import { isLoadingState } from "@/features/topPage/stores/isLoadingState";
import { useRecoilValue } from "recoil";

type TGPTSelector = Pick<
  TRadioTab,
  "options" | "selectedOption" | "onOptionChange"
>;

const GPTSelector = ({
  options,
  selectedOption,
  onOptionChange,
}: TGPTSelector) => {
  const isLoading = useRecoilValue(isLoadingState);
  return (
    <RadioTab
      options={options}
      selectedOption={selectedOption}
      onOptionChange={onOptionChange}
      isLoading={isLoading}
    />
  );
};

export default GPTSelector;
