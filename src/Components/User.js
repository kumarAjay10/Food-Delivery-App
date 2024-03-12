import { useState } from "react";

const User = ({ name, location }) => {
  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(1);
  return (
    <div className="user-card">
      <h1>count={count}</h1>
      <button onClick={()=>(
        setCount(count + 1)
  )
}
        >inc</button>
      <h1>count={count2}</h1>
      <h2>{name}</h2>
      <h3>{location}</h3>
      <h4>Contact: @ajay1010</h4>
    </div>
  );
};

export default User;
