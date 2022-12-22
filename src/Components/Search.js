import React, { useEffect, useState } from 'react'

function Search({ cb = Function.prototype }) {
    const [value, setValue] = useState("")
    const ref = React.useRef()

    const handleKey = (e) => {
        if (e.code === "Enter") {
            handleSubmit()
        }
    }

    useEffect(() => {
        ref.current.focus()
    }, [])

    const handleChange = (e) => {
        setValue(e.target.value)
    }

    const handleSubmit = () => {
        cb(value)
    }

    return (
        <div className='row'>
            <div className='input-field col s12'>
                <input type="search"
                    id="search-field"
                    placeholder='Search'
                    value={value}
                    onKeyDown={handleKey}
                    onChange={handleChange}
                    ref={ref}
                />
                <button
                    className='btn'
                    style={{
                        position: "absolute",
                        top: 0,
                        right: 0
                    }}
                    onClick={handleSubmit}
                >Search</button>
            </div>
        </div>
    )
}

export default Search
