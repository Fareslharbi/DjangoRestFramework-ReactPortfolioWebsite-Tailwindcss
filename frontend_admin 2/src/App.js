import { useRef } from 'react';
import Nav from './components/nav/nav';
import AddProject from './components/addProject/AddProject';
import UpdateProject from './components/updateProject/UpdateProject';
import DeleteProject from './components/deleteProject/DeleteProject';
function App() {
  const homeRef = useRef(null)
  const addRef = useRef(null)
  const updateRef = useRef(null)
  const deleteRef = useRef(null)
  return (
    <>
      <Nav homeRef={homeRef} addRef={addRef} updateRef={updateRef} deleteRef={deleteRef} />

      <div ref={addRef}>
        <AddProject />
      </div>
      <div ref={updateRef}>
        <UpdateProject />
      </div>      
      <div ref={deleteRef}>
        <DeleteProject />
      </div>
    </>
  );
}

export default App;
