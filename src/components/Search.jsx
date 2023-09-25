import React, {useState} from "react";

export default function useSearch() {
    const [searchTerm, handleSearch] = useState('')
    return(
        {searchTerm, handleSearch}
    )
}