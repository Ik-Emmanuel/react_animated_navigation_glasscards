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
  return (
    <div className="App">
      <NavTabs tabs={getTabs()} onChange={(value) => { console.log("value", value) }} />
    </div>
  );
}

export default App;
