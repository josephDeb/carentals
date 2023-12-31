'use client';

import {useContext, useState, useEffect, createContext} from 'react'

export const SearchContext = createContext();

export const SearchContextProvider = ({children}) => {
    const [searchActive, setSearchActive] = useState(false)
  return (
    <SearchContext.Provider value={{searchActive,setSearchActive}}>{children}</SearchContext.Provider>
  )
}


export const useSearchContext = () => useContext(SearchContext)

