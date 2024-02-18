import React from "react";

interface Props {
  datosUser: (code: number[]) => void;
}

const Button: React.FC<Props> = ({ datosUser }) => {
  const code: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  const handleClick = () => {
    datosUser(code);
  };

  return <button onClick={handleClick}>Agregar codes</button>;
};

export default Button;
