
import React, { useState } from "react";

const App = (props) => {

  const [people,setpeople] = useState([
    { name: "Aragorn", age:40, state: "Gondor", id: 1 },
    { name: "Arwen", age:24, state: "Rivendell", id: 2 },
    { name: "Bilbo", age:82, state: "Shire", id: 3 },
    { name: "Denethor", age:41, state: "Gondor", id: 4 },
    { name: "Elrond", age:169, state: "Rivendell", id: 5 },
    { name: "Frodo", age:12, state: "Shire", id: 6 },
    { name: "Legolas", age:34, state: "Rivendell", id: 7 },
    { name: "Samwise", age:13, state: "Shire", id: 8 },
    { name: "Saruman", age:245, state: "Old Westros", id: 9 },
    { name: "Theoden", age:29, state: "Rohaan", id: 10 }
  ])


  const [search, setNewSearch] = useState("");

  const handleSearchChange = (e) => {
    setNewSearch(e.target.value);
  };

  const filtered = !search
    ? people
    : people.filter((person) =>
        person.name.toLowerCase().includes(search.toLowerCase())
      );

const HandleAge = () =>{
  let filteringData =  people.filter((ele)=>{
    return ele.age > 30;
  })
  setpeople([...filteringData]);
  console.warn(people);
}

  return (
    <>
      <h2>Phone book</h2>
      Filter persons:{" "}
      <input type="text" value={search} onChange={handleSearchChange} /><br></br>
      <button type="submit" onClick={()=>HandleAge()}>Filter By Age greater than 30</button><br></br>
      <h2>Numbers</h2>
      {filtered.map((person) => {
        return (
          <p key={person.id}>
            {person.name} - {person.age}
          </p>
        );
      })}
    </>
  );
};

export default App;
