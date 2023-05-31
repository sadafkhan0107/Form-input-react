import './App.css';
import { useState } from 'react';

function App(){
  const[user, setUser] = useState({
    firstName : "",
    lastName : "",
    cityName : "",
    stateName : ""
  })
  function firstNameHandler(e){
    setUser({...user, firstName: e.target.value})
  }
  function lastNameHandler(e){
    setUser({...user, lastName: e.target.value})
  }
  function cityNameHandler(e){
    setUser({...user, cityName: e.target.value})
  }
  function stateNameHandler(e){
    setUser({...user, stateName: e.target.value})
  }

  return(
    <>
    <input value={user.firstName} placeholder='First Name' onChange={firstNameHandler}/>
    <input value={user.lastName} placeholder='Last Name' onChange={lastNameHandler}/>
    <input value={user.cityName}placeholder='City Name' onChange={cityNameHandler}/>
    <input value={user.stateName}placeholder='State Name' onChange={stateNameHandler}/>
    <p>{user.firstName} { user.lastName}  {user.cityName}  {user.stateName}</p>
    </>
  )
}

// function App(){
//   const [isChecked, setIsChecked] = useState(true)
//   function handleChange(event){
//     setIsChecked(event.target.checked);
//   }
//   return(
//     <><label>
//       <input type='checkbox' onChange={handleChange} checked= {isChecked}/>
//       Checkbox
//     </label>
//     <p>{isChecked ? "box is checked" : "box is not checked"}</p>
//     </>
//   )
// }

// function App(){
//   const[isShowPassword, setIsShowPassword] = useState(false);
//   function handleClick(){
//     setIsShowPassword(!isShowPassword);
//   }
//   return(
//     <div>
//       <input type={isShowPassword? 'text' :'password'} placeholder='Enter Password'/>
//       <button onClick={handleClick}>{isShowPassword? "Hide Password" : "Show Password"}</button>
//     </div>
//   )
// }

// function App(){
//   const [isValueFound, setIsValueFound] = useState(false);
//   const [name, setName] = useState();
//   const [age, setAge] = useState();
//  function handleNameChange(event){
//   setName(event.target.value);
//  }
//  function handleAgeChange(event){
//   setAge(event.target.value);
//  }
//  function handleClick(){
//   setIsValueFound(!isValueFound);
//  }

//   return(
//    <div>
//     <input value={name} placeholder='Enter Name' onChange={handleNameChange}/>
//     <input value={age} placeholder='Enter Age' onChange={handleAgeChange} />
//     <button onClick={handleClick}>{isValueFound ? "Hide value" : "Show value"}</button>
//     {isValueFound && <p> {name} {age}</p>}
//     {/* <p> {name} {age}</p> */}
//    </div>
//   );
// }



// function App() {
//   const [text, setText] = useState("Hello");
//   function handleInput(event){
//     setText(event.target.value);
//   }
//   function handleClick(){
//     setText("");
//   }
//   return (
//     <div className="App">
//       <input value={text} onChange={handleInput}/>
//       <button onClick={handleClick}> Reset </button>
//       <p>{text}</p>
//     </div>
//   );
// }

export default App;
