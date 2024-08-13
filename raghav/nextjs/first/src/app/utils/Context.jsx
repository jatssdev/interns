"use client"
import { createContext } from "react";

export const MainContext = createContext();

import React from 'react'
import Header from "./Header";

const Context = ({ children }) => {


    return (
        <MainContext.Provider value={'raghav'}>
            <Header />
            {children}
        </MainContext.Provider>
    )
}

export default Context
