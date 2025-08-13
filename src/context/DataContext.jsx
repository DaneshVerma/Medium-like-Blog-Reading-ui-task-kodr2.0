import { createContext, useState } from "react";
import post from '../data/posts.json';
export const DataContext = createContext();



function DataContextProvider({children}) {
    const [postData, setPostData] = useState(post);
    const [filteredData, setFilteredData] = useState(post);
    return (
        <DataContext.Provider value={{postData, setPostData, filteredData, setFilteredData }}>
            {children}
        </DataContext.Provider>
    )
}
export default DataContextProvider