import CursorSVG from '@/public/assets/CursorSVG'
import { CursorChatProps, CursorMode } from '@/types/type'
import React from 'react'

//  {cursorState.mode === CursorMode.Chat && (
// )}

const CursorChat = ({ cursor, cursorState, setCursorState, updateMyPresence }: CursorChatProps) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {

  }

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {

  }

  return (
    <div className='absolute top-0 left-0' style={{
      transform: `translatex(${cursor.x}px) translateY(${cursor.y}px)`
    }}>

      <>
        <CursorSVG color='#000' />

        <div className='absolute left-2 top-5 bg-blue-500 px-4 py-2 text-sm leading-relaxed text-white rounded-[20px]'>

          {cursorState.previousMessage && (
            <div>{cursorState.previousMessage}</div>
          )}
          <input className='z-10 w-60 border-none bg-transparent text-white placeholder-blue-300 outline-none'
            autoFocus={true}
            onChange={handleChange}
            onKeyDown={handleKeyDown}
            placeholder={cursorState.previousMessage ? '' : 'Type a Message...'}
            value={cursorState.message}
            maxLength={50}
          />

        </div>


      </>

    </div>
  )
}

export default CursorChat