import React from 'react'

export const ShowIncremente = React.memo(({increment}) => {

    console.log("Me volvi a generard DD:DD");

    

  return (
    <div>
        <button
         className='btn btn-primary'
         onClick={ ()  => {

            increment( 5 );
         }}
        >
            increment
        </button>
    </div>
  )
}
)