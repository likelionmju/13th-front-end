import { Navigate } from "react-router-dom";

const MyPage = () => {
    const isLoggedIn = false

    if (!isLoggedIn) {
        return <Navigate to="/Login" />
    }

    return <div>마이 페이지</div>
}
export default MyPage