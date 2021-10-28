import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
export default function App() {
  return (
    <div>
      <Header />
      <main>
        <Meals></Meals>
      </main>
    </div>
  );
}
