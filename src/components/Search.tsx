import React from 'react'
import {searchIcon} from '../assets/icons/search'
interface SearchProps {
    handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    value: string;
    handleSearch: () => void
  }

  
function Search({handleChange,value,handleSearch}: SearchProps) {
  return (
    <div className='flex items-center justify-center '>
    <input type="text"  name='user' placeholder="Enter UserName" className='p-2 rounded mr-1' value={value} onChange={handleChange}/>
    <button type='submit' aria-label='Search' onClick={handleSearch}>
      {searchIcon}
    </button>
    </div>
  )
}

export default Search
