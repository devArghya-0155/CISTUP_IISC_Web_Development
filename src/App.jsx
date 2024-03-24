import { HashRouter, Route, Routes } from "react-router-dom";
import { useState } from "react";

import Home from "./pages/Home";
import About from "./pages/About";
import Navbar from "./components/Navbar";
import ImgUpload from "./pages/ImgUpload";
import Result from "./pages/Reuslt";
import styles from "./App.module.scss";

function App() {
  const [file, setFile] = useState("");
  const [newImg, setNewImg] = useState("");
  const [origImg, setOrigImg] = useState("");
  return (
    <HashRouter>
      <Routes>
        <Route
          index
          element={
            <div className={styles.app}>
              <Navbar />
              <Home />
              <About />
              <ImgUpload
                file={file}
                setFile={setFile}
                newImg={newImg}
                setNewImg={setNewImg}
                origImg={origImg}
                setOrigImg={setOrigImg}
              />
            </div>
          }
        />
        <Route
          path="result"
          element={<Result origImg={origImg} newImg={newImg} />}
        />
      </Routes>
    </HashRouter>
  );
}

export default App;
