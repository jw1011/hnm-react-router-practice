import { useEffect, useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route } from "react-router-dom";
import ProductAll from "./page/ProductAll";
import Login from "./page/Login";
import ProductDetail from "./page/ProductDetail";
import Navbar from "./components/Navbar";
import PrivateRoute from "./route/PrivateRoute";

//1. 전체상품페이지, 로그인, 상품상세페이지
//1-1. 네비게이션 바
//2. 전체 상페이지에서는 전체 상품을 볼 수 있다
//3. 로그인 버튼 누르면 로그인 페이지 뜬다
//4. 상품 디테일 볼때, 로그인 안되있을 경우 로그인페이지 뜬다.
//5. 로그인 되어있을 경우 상품 디테일페이지 뜬다
//6. 로그아웃 버튼을 클릭하면 로그아웃이 된다
//7. 로그아웃 되면 상품 디테일페이지를 볼 수 없다. 다시 로그인 페이지 보인다
//8. 로그인.로그아웃 버튼 상태 변경
//9. 상품 검색할 수 있다.
function App() {
  const [authenticate, setAuthenticate] = useState(false);
  useEffect(() => {
    console.log("aa", authenticate);
  }, [authenticate]);
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<ProductAll />} />
        <Route
          path="/login"
          element={<Login setAuthenticate={setAuthenticate} />}
        />
        <Route
          path="/product/:id"
          element={<PrivateRoute authenticate={authenticate} />}
        />
      </Routes>
    </div>
  );
}

export default App;
