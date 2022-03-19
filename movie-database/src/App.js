import "./App.css";

/**
 * Import Component Hello
 */
import Hello from "./components/Hello";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div>
      {/*
        Memanggil Component Hello.
        Mengirim props name. 
       */}
      <Hello />
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
