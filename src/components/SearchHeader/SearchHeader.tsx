import React from 'react';
import SearchIcon from 'src/assets/icons/SearchIcon';

function SearchHeader() {
  return (
    <div className="flex justify-between bg-white rounded-sm shadow-sm">
      <input
        className="ml-2 w-full outline-none text-black"
        placeholder="text some text text text"
        type="text"
      />
      <a href="" className="px-5 py-2 bg-nc-primary mx-1 my-1 rounded-sm">
        <SearchIcon size={18} color="white" />
      </a>
    </div>
  );
}

export default SearchHeader;
