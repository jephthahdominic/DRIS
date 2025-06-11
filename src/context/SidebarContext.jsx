import { createContext, useContext, useState } from "react";

const SidebarContext = createContext(null);

function SidebarProvider({children}){

    const [isSidebar, setIsSidebar] = useState(false)

    return <SidebarContext.Provider value={{isSidebar, setIsSidebar}}>
        {children}
    </SidebarContext.Provider>
}

function useSidebar(){
    const context = useContext(SidebarContext);
    if(!context) throw new Error("You cannot use this context outside its provider");
    return context
}

export {SidebarProvider, useSidebar}