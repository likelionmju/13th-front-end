# 리액트 훅이란?

- 함수형 컴포넌트에서 React state와 생명주기 기능을 연동할 수 있게 해주는 함수
- 리액트에서 제공하는 내장 훅(useState, useEffect,..)과 사용자가 직접 정의할 수 있는 Custom Hooks가 있다.

## 해결할 수 있는 문제들

- 컴포넌트 간 상태 로직 재사용하기 어렵다
- 복잡한 컴포넌트들의 이해가 어렵다
- Class 문법 자체가 어렵다

## 이런 문제들을 해결할 수 있는 함수형 컴포넌트에서의 HOOK이 등장

- 컴포넌트 간의 계층을 바꾸지 않고 상태 로직을 재사용할 수 있음
- 하나의 컴포넌트를 생명주기가 아닌 기능을 기반으로 하여 작은 함수 단위로 나눌 수 있다
- Class 문법 없이도 React 기능을 사용할 수 있게끔 해준다

### 훅 규칙

- 같은 훅을 여러 번 호출 가능
- 컴포넌트 최상위에서만 호출 가능, 반복문, 조건문, 중첩된 함수 내에서 훅 사용 안됨
  - 컴포넌트 최상위에서 훅을 호출하면, 컴포넌트가 렌더링 될 때마다항상 동일한 순서로 Hook이 호출되는 것이 보장됨.
  - React가 useState와 useEffect 등의 훅이 여러 번 호출되는 중에도 훅의 상태를 올바르게 유지할 수 있도록 해줌
  - 훅의 호출 순서가 같아야하는 이유
    - React가 특정 state가 어떤 useState 호출에 해당되는지 알 수 있는 이유는 React가 Hook이 호출되는 순서에 의존
- Hook은 React 함수 내에서만 호출할 수 있다. 리액트 혹은 함수형 컴포넌트에서 호출해야하며, 추가적으로 custom hooks에서 또한 호출할 수 있다
- 비동기 함수(async)는 콜백함수로 사용할 수 없다.

# Hook의 종류

### useState: 기본적으로 컴포넌트 상태 관리

### useEffect: 컴포넌트 생애주기에 개입할 수 있음

### useContext: 컴포넌트 간의 전역 상태 관리

- useReducer: 상태 업데이트 로직을 reducer 함수에 따로 분리
- useRef: 컴포넌트나 HTML 엘리먼트를 레퍼런스로 관리
- useImperativeHandle: useRef의 레퍼런스를 상위 컴포넌트로 전달
- useMemo, useCallback: 의존성 배열에 적힌 값이 변할 때만 값 또는 함수를 다시 정의
- useLayoutEffect: 모든 DOM 변경 후 브라우저가 화면을 그리기 이전 시점에 effect를 동기적으로 실행
- useDebugvalue: 사용자 정의 Hook의 디버깅 도와줌

# 사용 방법

# useState

- 리액트 훅의 기본, 컴포넌트의 상태를 관리하는 훅

```jsx
const [number, setNumber] = useState(1);
```

상태값 변경 시 리렌더링 발생

# useEffect

- 컴포넌트 내의 상태 변화가 있을 때, 이를 감지하여 특정 작업을 해줄 수 있는 훅. 일반적으로 sideEffect의 처리를 위해서 사용
- sideEffect란?
  - 컴포넌트가 화면에 렌더링 된 이후에 비동기로 처리되어야하는 부수적인 효과

```jsx
useEffect(() => {
  //
}, []); // 의존성 배열
```

```jsx
useEffect(() => {}); // 아무것도 전달 x
```

```jsx
useEffect(() => {
  console.log("Component Loaded");
}, []);
// 컴포넌트가 마운트 됐을때만 실행된다. (componentDidMount)
```

```jsx
useEffect(() => {
  document.title = `You clicked ${count} times`;
}, [count]);
// count가 바뀔 때만 effect를 재실행
```
