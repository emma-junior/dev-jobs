import React, { useContext, useState, useEffect } from "react";

const AppContext = React.createContext();
const AppProvider = ({ children }) => {

  const [switchChecked, setSwitchChecked] = useState(false);


  useEffect(() => {
    localStorage.setItem("switchChecked", JSON.stringify(switchChecked))
  },[switchChecked])

  return (
    <AppContext.Provider value={{ switchChecked, setSwitchChecked }}>
      {children}
    </AppContext.Provider>
  );
};
export const useGlobalContext = () => {
  return useContext(AppContext);
};

export default AppProvider;