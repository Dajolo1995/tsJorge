import "./App.css";
import User from "./db/user.json";
import { user } from "./interface/ArrayUser";
import Button from "./components/Button";
import React, { useState } from "react";

const App: React.FC = () => {
  const user = User.data;

  const [userData, setUserData] = useState<user[] | []>([]);

  const variables = {
    sexo: "masculino",
  };

  const datosUser = (code: number[]) => {
    const user2: user[] = [
      {
        ...user[0],
        ...variables,
        code,
      },
    ];

    setUserData(user2);
    
  };

  console.log(userData);

  return (
    <>
      <Button datosUser={datosUser} />
    </>
  );
};

export default App;
