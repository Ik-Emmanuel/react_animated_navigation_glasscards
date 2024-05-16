// import logo from './logo.svg';
import './App.css';
import NavTabs from './NavTabs';
import { data } from './data';


function App() {

  const getTabs = () => {
    const tabs = ["All"]
    data.map((item) => {
      if (!tabs.includes(item.group)) {
        tabs.push(item.group)
      }
    })
    return tabs;


  }

  const setProject = (group) => {
    console.log("group", group)
  }


  return (
    <div className="App">
      <NavTabs tabs={getTabs()} onChange={setProject} />
    </div>
  );
}

export default App;
