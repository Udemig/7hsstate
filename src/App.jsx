import "./App.css";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import React, { useState } from "react";

const App = () => {
  const [isim, setIsim] = useState("");
  const [soyIsim, setSoyIsim] = useState("");
  const [meslek, setMeslek] = useState("");
  const [users, setUsers] = useState([]);

  const addUser = () => {
    console.log("çalıştım");
    let newUser = {
      adi: isim,
      soyadi: soyIsim,
      newmeslek: meslek,
    };

    // setState kullanarak users dizisini güncelleyin
    setUsers([...users, newUser]);

    setIsim("");
    setSoyIsim("");
    setMeslek("");
  };

  return (
    <div>
      <div className="form">
        <div>
          <label htmlFor="name">İsim Giriniz</label>
          <input
            value={isim}
            id="name"
            type="text"
            onChange={(e) => setIsim(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="surname">Soyisim Giriniz</label>
          <input
            value={soyIsim}
            id="surname"
            type="text"
            onChange={(e) => setSoyIsim(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="job">Meslek Giriniz</label>
          <input
            value={meslek}
            id="job"
            type="text"
            onChange={(e) => setMeslek(e.target.value)}
          />
        </div>

        <button onClick={() => addUser()}>Kullanıcı Ekle</button>
      </div>

      {/* users dizisini haritalama ve her bir kullanıcıyı görüntüleme */}
      {users.map((user, index) => {
        return (
          <div key={index}>
            İsim: {user.adi}, Soyisim: {user.soyadi}, Meslek: {user.newmeslek}
          </div>
        );
      })}
    </div>
  );
};

export default App;
