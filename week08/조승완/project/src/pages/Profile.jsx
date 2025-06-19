import { useParams } from 'react-router-dom'

const data = {
    user1: {
        name: '홍길동',
        description: '프론트엔드 개발자입니다.'
    },
    user2: {
        name: '김철수',
        description: '백엔드 개발자입니다.'
    }
}

const Profile = () => {

    const params = useParams();
    console.log(params)
    const user = data[params.username]
    
    return (
    <>
    <div>
        <h1>사용자 프로필</h1>
        {user ? (
            <div>
                <h2>{user.name}</h2>
                <p>{user.description}</p>
            </div>
        ) : (
            <p>존재하지 않는 프로필입니다.</p>
        )}
    </div>
    </>
    )
}

export default Profile