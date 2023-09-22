import { useState } from "react";

export const CommonBlock = ({ mouseEnterCallbak, children }) => {
  const [isActive, setActive] = useState(false);

  const mouseEnterHandler = () => {
    setActive(true);
    mouseEnterCallbak();
  };

  return (
    <div onMouseEnter={mouseEnterHandler} className={isActive ? "active" : ""}>
      {children}
    </div>
  );
};

export const Block1 = ({ mouseEnterCallbak, imgSrc, imgAlt }) => (
  <CommonBlock mouseEnterCallbak={mouseEnterCallbak}>
    <img src={imgSrc} alt={imgAlt} />
  </CommonBlock>
);

export const Block2 = ({ mouseEnterCallbak, content }) => (
  <CommonBlock mouseEnterCallbak={mouseEnterCallbak}>
    <p>{content}</p>
  </CommonBlock>
);

export const Block3 = ({ mouseEnterCallbak, userData }) => (
  <CommonBlock mouseEnterCallbak={mouseEnterCallbak}>
    <address>
      country: {userData.country}, street: {userData.street}
    </address>
  </CommonBlock>
);
