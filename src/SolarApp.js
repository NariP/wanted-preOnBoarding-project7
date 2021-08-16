import './App.css';
import ResultFields from './components/ResultFields/ResultFields';
import Timer from './components/Timer/Timer';
import styled from '@emotion/styled';

const SolarAppContainer = styled.div({
  textAlign: 'center',
  margin: 'auto',
  height: '100vh',
  width: 600,
  backgroundColor: 'white',
});

function SolarApp() {
  // state로 관리할거
  // NOTE: state: value, sorted(정렬된 값)
  // NOTE: sort 함수를 utils 로 만든다.
  // NOTE: form의 버튼을 누르면 실행이 되어야한다.
  // NOTE: handleSubmit = () => { validation; sorting...; setSorted(input)}
  // NOTE: getKST() {KST} -> format함수 (return `선데이 21 ,~~~)
  return (
    <SolarAppContainer className="test">
      {/* <Timer /> */}
      {/* <Form onSubmit={handleSubmit}> */}
      {/* <Input value={value} />  */}
      {/* Button */}
      {/* </Form> */}
      {/* NOTE: ResultFields 에서 state  */}
      {/* <ResultFields value={sorted} /> */}
      <ResultFields value={[1, 2, 3, 4]} />
      {/* <Timer locale={kor | en} type={ko-KR | en-US} /> */}
    </SolarAppContainer>
  );
}

export default SolarApp;
