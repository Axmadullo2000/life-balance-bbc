// Components
import NavBar from "./components/NavBar"
import { NewsList } from "./components/NewsList";
import { NewsAddForm } from "./components/NewsAddForm";
import { NewsFilter } from "./components/NewsFilter";
import { toast } from 'react-toastify';

// Styles
import "./index.scss";

export const removeNews = () => {
  toast.warning("❌ News removed from List", {
    position: "top-right",
    autoClose: 1000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
  })
}

export const creatingNews = () => {
  toast.success('✅ News created so easy!', {
    position: "top-right",
    autoClose: 1000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true
  })
}


function App() {
  return (
    <div className="app">
      <NavBar />
      <div className="content">
        <NewsList />
        <div className="content__page">
          <NewsAddForm />
          <NewsFilter />
        </div>
      </div>
      
    </div>
  );
}

export default App;
