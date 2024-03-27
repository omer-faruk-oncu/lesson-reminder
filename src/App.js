import Header from "./components/Header/Header";
import LessonCard from "./components/LessonCard/LessonCard";
import {data} from "./helper/data"
function App() {
  return (
    <div className="App">
      <Header />
      <LessonCard  data={data}/>
    </div>
  );
}
export default App;
