
import "./Header.css";
import {React} from "react";


const Header = () => {

    return (
        <div className="Header">
            <h3>오늘은 📆</h3>
            <h1>{new Date().toDateString()}</h1> 
            {/*https://hwangseoyoung.tistory.com/211, 검색어 : 리액트 오늘 날짜 "텍스트" */}
        </div> 
    );
};

export default Header;