import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";

const NotFoundPage = () => {
  const [timer, setTimer] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTimer((prevTimer) => prevTimer + 1);
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  if (timer === 5) {
    return <Navigate to="/" replace />;
  }

  return (
    <div>
      <p>Page you visited doesn&apos;t exist. </p>
      <p>You will be redirected to the home page in {5 - timer} seconds</p>
    </div>
  );
};

export default NotFoundPage;
