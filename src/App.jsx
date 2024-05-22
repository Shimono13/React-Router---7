import React, { useState } from "react"; // impo
import Hello from "./Hello";
// import Messaggio from "./Messaggio";
import Welcome from "./Welcome";
// import AlertClock from "./AlertClock";
// import Clock from "./Clock";
// // import MouseClicker from "./MouseClicker";
import Login from "./Login";
// import UnctrolledForms from "./UncontrolledForm";
// import Refs from "./Refs";
import Counter from "./Counter";
// import Colors from "./Colors";
// import TodoList from "./TodoList";
// import Container from "./Container";
// import { LanguageContext } from "./LanguageContext";
import GithubUsers from "./GithubUsers";
import ShowGithubUser from "./ShowGithubUser";
// import { Hookcounter } from "./Hookcounter";
// import Myform from "./Myform";
// import Location from "./Location";
import { Link, Route, Routes } from "react-router-dom";
import GithubUserList from "./GithubUserList";
function App() {
  // const [language, setLanguage] = useState(`en`);

  // function handleSetLanguage(language) {
  //   setLanguage(language);
  // }

  return (
    // <div className="flex justify-center items-center h-screen bg-slate-400">
    //   <Container title={"Ciao, questo è il mio titolo"}>
    //     <div className="flex flex-col gap-4">
    //       <Hello />
    //       <Messaggio />
    //       <Welcome name="Simone" age={26} />

    //       <Hookcounter />
    //       <div className="flex flex-row gap-2 border-2	">
    //         <button
    //           className=" bg-slate-300 rounded border-2 py-2 px-4 border-red-500 "
    //           onClick={() => {
    //             handleSetLanguage(`en`);
    //           }}>
    //           EN
    //         </button>
    //         <button
    //           className=" bg-slate-300 rounded border-2 py-2 px-4 border-red-500"
    //           onClick={() => {
    //             handleSetLanguage(`it`);
    //           }}>
    //           IT
    //         </button>
    //         <LanguageContext.Provider value={language}>
    //           <Clock></Clock>
    //         </LanguageContext.Provider>
    //       </div>
    //       {/* <TodoList></TodoList> */}
    //     </div>
    //     <GithubUsers></GithubUsers>
    //     {/* <Myform></Myform> */}
    //     <Location />
    //   </Container>
    // </div>

    <div className=" flex flex-col justify-center items-center min-h-screen bg-gray-100">
      <nav>
        <ul className="grid grid-cols-2 w-max">
          <li className="list-item">
            <Link to="/">Welcome</Link>
          </li>
          <li className="list-item">
            <Link to="/login">Login</Link>
          </li>
          <li className="list-item">
            <Link to="/counter">Counter</Link>
          </li>
          <li className="list-item">
            <Link to="/users/">Show Github Users</Link>
          </li>
        </ul>
      </nav>

      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/:name" element={<Welcome />} />
        <Route path="/login" element={<Login />} />
        <Route
          path="/counter"
          element={<Counter valoreIniziale={0} valore={1} />}
        />

        <Route path="/users" element={<GithubUserList />}>
          {/* Rotte nidificate per il componente GithubUserList */}
          <Route index element={<p>Add a user and select it</p>} />
          <Route path=":username" element={<ShowGithubUser />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
