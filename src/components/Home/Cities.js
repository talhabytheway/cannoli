import "./Cities.css";
import cities from "../../data/cities.json";
function Cities() {
  return (
    <div className="main_Cities">
      <h1>Cities</h1>
      <span className="subHead">Find us in these Cities and many more!</span>
      <div className="cardP">
        {cities.map((e) => {
            console.log(e.image, e.name);
          return (
            <div className="card">
                <img src={e.image+'?width=400?height=400'} alt={e.name} />
                <span>{e.name}</span>
              </div>
          )
        })}
      </div>
    </div>
  );
}

export default Cities;
