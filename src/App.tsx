import { BrowserRouter, Route, Routes } from "react-router-dom";
import Posts from "./pages/Posts/Posts";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Posts />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
