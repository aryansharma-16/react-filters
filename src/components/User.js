import React, { useEffect, useState } from "react";

function User() {

  const [optionvalue,setoptionvalue] = useState("");
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

  let states = [];
  people.filter((ele)=>{
    if (states.indexOf(ele.state)){
      states.push(ele.state);
    }
  })
  console.log("states",states);

  const [olddata,setolddata] = useState([]);
  useEffect(()=>{
    setolddata([...people]);
    console.log(olddata);
  },[])

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
    return ele.age > 20;
  })
  console.log(filteringData);
  // people = filteringData;
  setpeople([...filteringData]);
  console.warn(people);
}

const ReturnData = () =>{
  setpeople([...olddata]);
  console.log('pppp',people);
  return people;
}

const optionsubmit = () =>{
  if (optionvalue !== ""){
    let optionfilter =  people.filter((ele)=>{
      return ele.state === optionvalue;
    })
    console.log(optionfilter);
    // people = filteringData;
    setpeople([...optionfilter]);
    // setoptionvalue("")
  }
}


  return (
    <>
      <h2>React Filters</h2>
      Filter persons:{" "}
      <input type="text" value={search} onChange={handleSearchChange} /><br></br>
      <button type="submit" onClick={()=>HandleAge()}>Filter</button><br></br>
      <button type="submit" onClick={()=>ReturnData()}>Back</button><br></br>
      <label for="cars">Choose a State: </label>
      <select id="state" value={optionvalue} onChange={(e)=>setoptionvalue(e.target.value)} onClick={()=>optionsubmit()} style={{paddingTop:"10px",paddingRight:"30px"}}>
      <option id="" value='select'>select</option>

      {states.map((ele,id)=>{
        return (<>
        <option id={id}  value={ele}>{ele}</option>

        </>)
      })}
      </select>

      <h2>Users</h2>
      {filtered.map((person) => {
        return (
          <p key={person.id}>
            {person.name} // {person.age} // {person.state}
          </p>
        );
      })}
    </>
  );

}

export default User