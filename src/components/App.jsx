import Hero from "./hero/Hero";
import { CV } from "../CV/cv"
import Education from "./education/Education";
import Experiencies from "./experiences/Experiencies";
import { useState } from "react";
import Languages from "./language/Languages";

function App() {
  const { education, experience, habilities, hero, languages, volunteer } = CV;
  const [edu, setEdu] = useState(true) // por defecto  se vea el componente  Education

  const [showLanguage, setShowLanguage] = useState(false)

  const handleClick = () => {
    setEdu(true)
  }
  const handleCheckbox = (event) => {
    //setShowLanguage(showLanguage ? false : true) Esto sería otra forma de hacerlo.
    setShowLanguage(event.target.checked)
    console.log(event.target.checked) // el input tiene la propiedad checked  y es un valor true, o false. Esta es la mejor forma.
    //setShowLanguage(!showLanguage) Esto sería otra alternativa. Hay 3 formas de hacer la misma función.
  }

  return (
    <div>
      <Hero data={hero} />
      <button onClick={handleClick}>Education</button>
      <button onClick={() => { setEdu(false) }}>Experiencies</button>

      {edu ? <Education data={education} /> : <Experiencies data={experience} />}

      <input type="checkbox" onChange={handleCheckbox} />
      <label>Idiomas</label>

      {showLanguage ? <Languages info={languages} /> : null}

    </div>
  );
}

export default App;
