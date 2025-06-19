import { Link } from 'react-router-dom'

const Home = () => {
    return (
    <>
        <div>
            <h1>홈</h1>
            <p>가장 먼저 보이는 페이지 입니다. </p>
            <ul>
                <li>
                    <Link to="/Home">Home</Link>
                </li>
                <li>
                    <Link to="/About">About</Link>
                </li>
                <li>
                    <Link to="/Profile/user1">user1</Link>
                </li>
                <li>
                    <Link to="/Profile/user2">user2</Link>
                </li>
                <li>
                    <Link to="/articles">게시글 목록</Link>
                </li>
            </ul>
        </div>
    </>
    )
}

export default Home