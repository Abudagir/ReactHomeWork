import { Route, Routes } from "react-router-dom";
import "./App.css";
import AllPosts from "./pages/AllPosts";
import Post from "./pages/Post";
import PageNotFound from "./pages/PageNotFound";
// import Header from "./components/Header";

function App() {
  return (
    <div>

    {/* <Header /> */}

    
      <Routes>
        <Route path="/posts" element={<AllPosts />}></Route>
        <Route path="/posts/:id" element={<Post />}></Route>

        <Route path="*" element={<PageNotFound />}></Route>
      </Routes>
    </div>
  );
}

export default App;
