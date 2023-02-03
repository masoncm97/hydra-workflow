import React from 'react'

function Canvas({creation, loop}) {

    loop.start()

    creation()
  
    return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
      }}
    >
    </div>
    )
  }

export default Canvas;