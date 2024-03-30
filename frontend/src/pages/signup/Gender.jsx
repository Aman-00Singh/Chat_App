import React from 'react'

const Gender = ({ onChangecheck, selectedgender }) => {
    return (
        <div className='flex'>
            <div className='form-control'>
                <label className={`label gap-2 cursor-pointer ${selectedgender === "male" ? "selected" : ""}`}>
                    <span className='label-text text-black'>Male</span>
                    <input type="checkbox" className='checkbox border-slate-900'
                        checked={selectedgender === "male"}
                        onChange={() => onChangecheck("male")}
                    />
                </label>
            </div>

            <div className='form-control'>
                <label className={`label gap-2 cursor-pointer ${selectedgender === "female" ? "selected " : ""}`}>
                    <span className='label-text text-black'>Female</span>
                    <input type="checkbox" className='checkbox border-slate-900'
                        checked={selectedgender === "female"}
                        onChange={() => onChangecheck("female")}
                    />
                </label>
            </div>

        </div>
    )
}

export default Gender
