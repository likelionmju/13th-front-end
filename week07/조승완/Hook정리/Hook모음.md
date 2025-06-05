# Hook 모음

# State Hooks

→ 기억하는 것: 변수

→ 변경 시 렌더링 됨

종류

- useState
    - 이렇게 씀
    
    ```jsx
    const [index, setIndex] = useState(0);
    setIndex(index+1);
    ```
    
- useReducer
    - 조금 더 구조화됨
    - 이렇게 씀
    
    ```jsx
    function reducer(state, action) {
    	// 대충 분류하는 코드 
    	if (action.type == "Hello") {
    		return state + 1;
    	};
    };
    
    const [state, dispatch] = useReducer(reducer, 4);
    
    dispacth({type: "hello"});
    ```
    
    - 값 저장 변수(state), 초기값 변경 함수(dispatch)를 선언, useReducer에 초기값 변경 함수에 의해 실행되는 함수(reducer)랑 초기값(4) 입력해 넣으면 알아서 댐

# Context Hooks

→ 부모 컴포넌트에 있는 정보 가져오기 but props 안 쓰고

종류

- useContext

# Ref Hooks

→ DOM, Timeout ID 등 렌더링 제외 일부 정보 보유 가능

→ 변경 시 렌더링 안됨

종류

- useRef
    - 이렇게 씀
    
    ```jsx
    const inputRef = useRef(1);
    
    inputRef.current++
    ```
    
- useImperativeHandle

# Effect Hooks

→ 컴포넌트를 외부와 연결 가능해지고 동기화 가능

종류

- useEffect
- useLayoutEffect
    - 화면 다시 그리기 전에 실행
- useInsertionEffect
    - React가 DOM을 변경하기 전에 실행

# Performanced Hooks

→ 최적화 Hook. 데이터 변경 없는 것들 재사용, 혹은 재렌더링 건너뛰도록 하는 것

종류 

- useMemo
- useCallback

렌더링 우선순위는 다음 Hook 사용

- useTransition
    - State 전환을Non-Blocking으로 표시, 다른 업데이트가 중단 가능
- useDeferreValue
    - UI의 중요하지 않은 부분 업데이트 지연, 다른 부분 먼저 업데이트 가능

# Other Hooks

→ 라이브러리 작성자가 사용하는 것

종류

- useDebugValue
    - 레이블 커스텀 가능
- useId
    - 컴포넌트가 고유 ID를 자신과 연결 가능
- useSyncExternalStore
    - 컴포넌트가 외부 저장소 구독 가능
- useActionState
    - 액션을 통해 State 관리 가능