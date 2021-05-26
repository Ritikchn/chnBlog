import React, { useState } from "react";
export const userInfoContext = React.createContext();
export const dbDataContext = React.createContext({});
export const DbProvider = ({ children }) => {
  const [DbData, setDbData] = useState({});
  function updateDb(dt) {
    setDbData(dt);
  }
  return (
    <dbDataContext.Provider value={{ DbData, updateDb }}>
      {children}
    </dbDataContext.Provider>
  );
};
export const DbConsumer = dbDataContext.Consumer;
export const UserProvider = ({ children }) => {
  const [Data, setData] = useState([{}]);
  return (
    <userInfoContext.Provider value={{ Data, setData }}>
      {children}
    </userInfoContext.Provider>
  );
};
