import { useState } from "react";
import { AiFillHeart } from "react-icons/ai";
import { AiOutlineHeart } from "react-icons/ai";

const Like = () => {
  const [status, setStatus] = useState(false);
  const toggle = () => {
    setStatus(!status);
    console.log(status);
  };

  if (status) return <AiFillHeart onClick={toggle} color="#ff6b81" size="20" />;
  return <AiOutlineHeart onClick={toggle} size="20" />;
};

export default Like;
