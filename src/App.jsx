import "./styles/App.css";
import Header from "./components/Header";
import InputSection from "./components/InputSection";
import Preview from "./components/Preview";

function App() {
  return (
    <>
      <Header />
      <main>
        <InputSection></InputSection>
        <Preview></Preview>
      </main>
    </>
  );
}

export default App;
