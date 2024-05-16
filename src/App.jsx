// import logo from './logo.svg';
import { useState } from 'react';
import './App.css';
import NavTabs from './NavTabs';
import { data } from './data';


function App() {

  // pass in all list of data by default
  const [projects, setProjects] = useState(data)


  const getTabs = () => {
    const tabs = ["All"]
    data.map((item) => {
      if (!tabs.includes(item.group)) {
        tabs.push(item.group)
      }
    })
    return tabs;


  }

  const setProjectTab = (group) => {
    if (group === "All") {
      return setProjects(data);
    }
    const newProjects = data.filter((item) => item.group === group);
    setProjects(newProjects);

  }


  return (
    <div className="App">
      <NavTabs tabs={getTabs()} onChange={setProjectTab} />

      <div className="projects__container">
        {
          projects.map(({ image, title, github, demo }, index) => (
            <div className={`projects__item`} key={index}>
              <div className="projects__item__image">
                <img src={image} alt={title} />
              </div>
              <h3>
                {title}
              </h3>
              <div className="projects__item__buttons">
                <a href={github} className='btn' target='__blank'> Github</a>
                <a href={demo} className='btn btn__primary' target='__blank'> Live Demo</a>
              </div>
            </div>
          ))
        }
      </div>
    </div>
  );
}

export default App;
