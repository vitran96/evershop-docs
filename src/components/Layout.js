import React from 'react';

const Area = ({ id, borderColor, backgroundColor }) => (
  <div className='h-full flex justify-center justify-items-center' style={{
    border: `1px solid ${borderColor}`,
    backgroundColor: backgroundColor
  }}>
    <div className="self-center">ID: <i>{id}</i></div>
  </div>
)

export default function Layout() {
  return <div className="grid gap-2">
    <div className="h-28">
      <Area id="#header" borderColor="#73A9AD" backgroundColor="#90C8AC" />
    </div>
    <div className="grid gap-2 grid-cols-12 h-60">
      <div className="left col-span-3" style={{ height: '100%' }}>
        <Area id="#leftCol" borderColor="#646FD4" backgroundColor="#9BA3EB" />
      </div>
      <div className="content col-span-6" >
        <div className='grid gap-2 grid-cols-1 grid-rows-3 h-full'>
          <div>
            <Area id="#contentTop" borderColor="#F473B9" backgroundColor="#FFBDE6" />
          </div>
          <div>
            <Area id="#content" borderColor="#FFB319" backgroundColor="#FFE194" />
          </div>
          <div>
            <Area id="#contentBottom" borderColor="#125D98" backgroundColor="#3C8DAD" />
          </div>
        </div>
      </div>
      <div className="right col-span-3" >
        <Area id="#rightCol" borderColor="#035397" backgroundColor="#5089C6" />
      </div>
    </div>
    <div className="h-28">
      <Area id="#footer" borderColor="#F38BA0" backgroundColor="#FFBCBC" />
    </div>
  </div>
}