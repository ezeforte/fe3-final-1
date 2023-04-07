import { createContext } from "react";


//export const initialState = {theme: "", data: []}


const ThemeContext = createContext();
export default ThemeContext;
//export const ContextProvider = ({ children }) => {
  //Aqui deberan implementar la logica propia del Context, utilizando el hook useMemo

  //return (
  //  <ContextGlobal.Provider value={{}}>
   //   {children}
   // </ContextGlobal.Provider>
  //);
//};
