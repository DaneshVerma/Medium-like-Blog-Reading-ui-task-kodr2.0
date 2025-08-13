import { createContext, useState } from "react";
import post from '../data/posts.json';
export const DataContext = createContext();



function DataContextProvider({children}) {
    const [postData, setPostData] = useState(post);

    return (
        <DataContext.Provider value={{postData, setPostData}}>
            {children}
        </DataContext.Provider>
    )
}
export default DataContextProvider