import axios from "axios";
import { useNavigate } from "react-router-dom";

import styles from "./ImgUpload.module.scss";

function ImgUpload({ file, setFile, origImg, setOrigImg, newImg, setNewImg }) {
  const BASE_URL_NEW_IMG = "../../Flask/",
    BASE_URL_ORIG_IMG = `${BASE_URL_NEW_IMG}static/upload/`;
  const navigate = useNavigate();

  function handleImage(e) {
    setFile(e.target.files[0]);
    setOrigImg(`${BASE_URL_ORIG_IMG}${e.target.files[0].name}`); //This should provide the path to the original image in the static folder.
  }

  function handleResults(e) {
    e.preventDefault();
    if (!file) {
      alert("Please upload a file first");
      return;
    }
    if (!newImg) {
      alert("Please wait");
      return;
    }
    navigate("/result"); //redirecting to result route when rendering is done.
  }

  function handleUpload(e) {
    e.preventDefault();
    if (!file) {
      alert("Please upload a file first");
      return;
    }
    const fd = new FormData();
    fd.append("img", file);
    axios
      .post("http://localhost:5000/results", fd, {
        onUploadProgress: (ProgressEvent) => {
          console.log(ProgressEvent.loaded * 100);
        },
      })
      .then((res) => {
        alert("Image upload and processing is over. Go to results.");
        console.log(res.data, origImg);
        setNewImg(`${BASE_URL_NEW_IMG}${res.data}`);
      })
      .catch((err) => console.log(err));
  }

  return (
    <section id="upload" className={styles.mainBlock}>
      <div>Get detailed analysis of image </div>
      <div>Drop images below</div>
      <form>
        <input type="file" name="image" onChange={handleImage} />
        <div className={styles.mainBlock__buttons}>
          <button type="submit" onClick={handleUpload}>
            {" "}
            Upload Image
          </button>
          <button onClick={handleResults}> Check Results </button>
        </div>
      </form>
    </section>
  );
}

export default ImgUpload;
