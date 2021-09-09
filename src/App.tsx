import { useState } from "react";
import { cardStyle } from "./style";
import {
  getPath,
  getTraitList,
  getStrength,
  getAgility,
  getResilience,
  getWisdom,
  getLuck,
} from "./utils";
import { traitsForMaleHero } from "./model";
import "bootstrap/dist/css/bootstrap.min.css";
import "./app.css";

function App() {
  const [name, setName] = useState("hiromina");
  const [gender, setGender] = useState("Male");
  const [job, setJob] = useState("Hero");
  const [traits, setTrait] = useState("Everyman");
  const [path, setPath] = useState(
    "https://recursionist.io/img/dashboard/lessons/quickstart/male-hero.png"
  );
  const [traitList, setTraitList] = useState(traitsForMaleHero);

  const [strength, setStrength] = useState("120");
  const [agility, setAgility] = useState("100");
  const [resilience, setResilience] = useState("100");
  const [wisdom, setWisdom] = useState("110");
  const [luck, setLuck] = useState("120");

  const changeGender = (e: any) => {
    const newGender = e.target.value;
    setGender(newGender);
    setPath(getPath(newGender, job));
    setTraitList(getTraitList(newGender, job));
    if (newGender === "Female" && traits === "Lucky devil") {
      const newTrait = "Tomboy";
      setTrait(newTrait);
      setStatus(job, newTrait);
    } else if (newGender === "Male" && traits === "Tomboy") {
      const newTrait = "Lucky devil";
      setTrait(newTrait);
      setStatus(job, newTrait);
    }
  };

  const changeJob = (e: any) => {
    const newJob = e.target.value;
    setJob(newJob);
    setPath(getPath(gender, newJob));
    setTraitList(getTraitList(gender, newJob));
    setStatus(newJob, traits);
  };

  const changeTrait = (e: any) => {
    const newTrait = e.target.value;
    setTrait(newTrait);
    setStatus(job, newTrait);
  };

  const setStatus = (job: string, trait: string) => {
    setStrength(getStrength(job, trait).toString());
    setAgility(getAgility(job, trait).toString());
    setResilience(getResilience(job).toString());
    setWisdom(getWisdom(job).toString());
    setLuck(getLuck(job, trait).toString());
  };

  return (
    <div className="game-maker">
      <div className="container pt-5">
        <h5 className="text-white font-weight-bold">表示エリア</h5>
        <div className="card mb-3 rounded-3" style={cardStyle}>
          <div className="row g-0 px-2">
            <div className="col-md-3 d-flex justify-content-center align-items-center">
              <div className="col-12 border border-white border-5 rounded-3 img-fit">
                <img src={path} className="img-fluid rounded-start" alt="..." />
              </div>
            </div>
            <div className="col-md-9 text-white">
              <div className="card-body px-2">
                <div className="border border-white border-4 rounded-3 px-3 py-1">
                  <h5 className="card-title">Name : {name}</h5>
                  <h5 className="card-title">Class : {job}</h5>
                  <h5 className="card-title">Gender : {gender}</h5>
                  <h5 className="card-title m-0">Traits : {traits}</h5>
                </div>
                <div className="mt-2 border border-white border-4 rounded-3 px-3 py-1">
                  <h5 className="card-title">Strength : {strength}</h5>
                  <h5 className="card-title">Agility : {agility}</h5>
                  <h5 className="card-title">Resilience : {resilience}</h5>
                  <h5 className="card-title">Wisdom : {wisdom}</h5>
                  <h5 className="card-title m-0">Luck : {luck}</h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container py-5">
        <h5 className="text-white font-weight-bold">入力エリア</h5>
        <div className="mb-3 row">
          <label
            htmlFor="inputName"
            className="col-sm-1 col-form-label text-white"
          >
            Name
          </label>
          <div className="col-sm-3">
            <input
              type="text"
              className="form-control"
              id="inputName"
              value={name}
              onChange={(e: { target: { value: any } }) =>
                setName(e.target.value)
              }
            />
          </div>
        </div>
        <div className="mb-3 row">
          <label
            htmlFor="inputName"
            className="col-sm-1 col-form-label text-white"
          >
            Gender
          </label>
          <div className="col-sm-3 mt-2">
            <div className="form-check form-check-inline">
              <input
                className="form-check-input"
                type="radio"
                name="inlineRadioOptions"
                id="inlineRadio1"
                value="Male"
                onChange={changeGender}
                checked={gender === "Male"}
              />
              <label
                className="form-check-label text-white"
                htmlFor="inlineRadio1"
              >
                Male
              </label>
            </div>
            <div className="form-check form-check-inline">
              <input
                className="form-check-input"
                type="radio"
                name="inlineRadioOptions"
                id="inlineRadio2"
                value="Female"
                onChange={changeGender}
                checked={gender === "Female"}
              />
              <label
                className="form-check-label text-white"
                htmlFor="inlineRadio2"
              >
                Female
              </label>
            </div>
          </div>
        </div>
        <div className="mb-3 row">
          <label
            htmlFor="inputName"
            className="col-sm-1 col-form-label text-white"
          >
            Class
          </label>
          <div className="col-sm-3">
            <select
              className="form-select"
              aria-label="Default select example"
              onChange={changeJob}
            >
              <option value="Hero">Hero</option>
              <option value="Warrior">Warrior</option>
              <option value="Mage">Mage</option>
            </select>
          </div>
        </div>
        <div className="mb-3 row">
          <label
            htmlFor="inputName"
            className="col-sm-1 col-form-label text-white"
          >
            Traits
          </label>
          <div className="col-sm-3">
            <select
              className="form-select"
              aria-label="Default select example"
              onChange={changeTrait}
            >
              {traitList.map((trait, index) => (
                <option key={index} value={trait}>
                  {trait}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
