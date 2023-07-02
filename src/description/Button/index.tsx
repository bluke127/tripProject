import ButtonComp from "@/components/Button";
/**
 *@prop onClick 함수
 *@prop style 스타일
 *@prop children 버튼 글자
 *@prop isDebouncedButton 디바운스 여부
 */
export default function Button(props) {
  const props1 = {
    onClick: () => alert("no debounce"),
    style: { backgroundColor: "red" },
    isDebouncedButton: false
  };

  const props2 = {
    onClick: () => alert("debounce"),
    style: { backgroundColor: "blue" },
    isDebouncedButton: true
  };
  return (
    <div>
      <ButtonComp {...props1}>디바운스 false</ButtonComp>
      <ButtonComp {...props2}>디바운스 true</ButtonComp>
    </div>
  );
}
