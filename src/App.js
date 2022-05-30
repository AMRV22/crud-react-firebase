import { useState, useEffect } from 'react';
import './App.css';
import { db } from './firebase-config';
import { collection, getDocs, addDoc, updateDoc, doc, deleteDoc } from "firebase/firestore"

function App() {
  const [users, setUsers] = useState([]);
  const usersCollectionRef = collection(db, "users");
  const [newName, setNewName] = useState("");
  const [newAge, setNewAge] = useState(0);

  const createUser = async () => {
    await addDoc(usersCollectionRef, { name: newName, age: Number(newAge) });
  }

  const updateUser = async (id, age) => {
    const userDoc = doc(db, "users", id);
    const newFields = { age: age + 1 }
    await updateDoc(userDoc, newFields)
  }

  const deleteUser = async (id) => {
    const userDoc = doc(db, "users", id);
    await deleteDoc(userDoc);
  }

  useEffect(() => {
    const getUsers = async () => {
      const data = await getDocs(usersCollectionRef);
      setUsers(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    }

    getUsers()
  }, [usersCollectionRef])
  return (
    <div className="App">
      <input
        type="text"
        placeholder="Name..."
        onChange={(event) => {
          setNewName(event.target.value)
        }} />
      <input
        type="number"
        placeholder="Age..."
        onChange={(event) => {
          setNewAge(event.target.value)
        }}
      />
      <button onClick={createUser}>Create User</button>
      {users.map((user, key) => {
        return <div key={key}>
          <h1>{user.name}</h1>
          <h1>{user.age}</h1>
          <button onClick={() => {
            updateUser(user.id, user.age)
          }}>Increase Age</button>
          <button onClick={() => {
            deleteUser(user.id)
          }}>
            Delete User
          </button>
        </div>
      })}
    </div>
  );
}

export default App;
