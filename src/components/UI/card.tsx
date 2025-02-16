import { useState } from "react";
import Button from "@common/buttons/button";

const Card = () => {
  const [count, setCount] = useState(0);

  return (
    <div className="card">
      <Button onClick={() => setCount((count) => count + 1)} count={count} />
      <p>
        Edit <code>src/App.tsx</code> and save to test HMR
      </p>
    </div>
  );
};

export default Card;
