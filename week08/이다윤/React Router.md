# React Router

## React Router 정리 (Notion용)

---

### React Router란?

> React Router는 리액트에서 여러 페이지를 전환할 수 있도록 도와주는 SPA(단일 페이지 애플리케이션) 전용 라우팅 라이브러리입니다.
> 
- HTML의 `<a>` 태그 대신 React 컴포넌트로 페이지 전환
- 새로고침 없이도 페이지 이동이 가능 (→ 빠르고 부드러운 사용자 경험)
- **URL**에 따라 컴포넌트를 렌더링

---

### 설치 방법

```bash
bash
npm install react-router-dom

```

---

### 기본 구성 요소

| 컴포넌트 / Hook | 설명 |
| --- | --- |
| `<BrowserRouter>` | 라우팅 기능을 사용할 수 있게 전체 앱을 감싸는 컴포넌트 |
| `<Routes>` / `<Route>` | URL 경로에 따라 어떤 컴포넌트를 보여줄지 정의 |
| `<Link>` | `<a>` 대신 사용하는 내부 링크 이동 컴포넌트 |
| `<NavLink>` | 현재 경로에 따라 스타일 변경 가능한 링크 |
| `useParams()` | URL 파라미터 값 가져오는 Hook |
| `useNavigate()` | 코드로 페이지 이동시 사용 (뒤로가기 등도 포함) |
| `useSearchParams()` | 쿼리스트링 값 읽고 쓰기 |
| `<Navigate />` | 특정 조건에서 자동 리다이렉트할 때 사용 |

---

### 기본 예시

```jsx

import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <nav>
        <Link to="/">홈</Link>
        <Link to="/about">소개</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}

```

---

### 동적 라우팅: URL 파라미터

```jsx

<Route path="/profile/:username" element={<Profile />} />

```

```jsx

// Profile.jsx
import { useParams } from "react-router-dom";

function Profile() {
  const { username } = useParams();
  return <h1>{username}님의 프로필 페이지입니다.</h1>;
}

```

---

### 쿼리스트링 처리

```jsx

import { useSearchParams } from "react-router-dom";

function ArticleList() {
  const [searchParams, setSearchParams] = useSearchParams();
  const keyword = searchParams.get("keyword");

  return <div>검색어: {keyword}</div>;
}

```

---

### 🧭 useNavigate()로 페이지 이동

```jsx

import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  const handleLogin = () => {
    // 로그인 성공 시 마이페이지로 이동
    navigate("/mypage");
  };

  return <button onClick={handleLogin}>로그인</button>;
}

```

---

### 중첩 라우트 + Outlet

```jsx

<Route path="/articles" element={<Articles />}>
  <Route path=":id" element={<Article />} />
</Route>

```

```jsx

// Articles.jsx
import { Outlet } from "react-router-dom";

function Articles() {
  return (
    <div>
      <h1>게시글 목록</h1>
      <Outlet />
    </div>
  );
}

```

---

### 404 페이지 처리 (NotFound)

```jsx

<Route path="*" element={<NotFound />} />

```

```jsx

function NotFound() {
  return <h1>페이지를 찾을 수 없습니다.</h1>;
}

```

---

### 조건부 리다이렉트 (로그인 필요 시 등)

```jsx

<Route path="/mypage" element={isLoggedIn ? <Mypage /> : <Navigate to="/login" />} />

```

---

##