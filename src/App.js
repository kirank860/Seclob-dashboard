import { BrowserRouter, Route, Routes } from "react-router-dom";
import SignIn from "./Components/SignIn";
import Upload from "./Components/Upload";
import Uploading from "./Components/Uploading";
import Uploaded from "./Components/Uploaded";


function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>

        <Route path="/" element={<SignIn/>} />
        <Route path="Upload" element={<Upload/>} />
        <Route path="/Uploading" element={<Uploading/>} />
        <Route path="/Uploaded" element={<Uploaded/>} />
        
      </Routes>
   
      </BrowserRouter>

    </div>
  );
}

export default App;
