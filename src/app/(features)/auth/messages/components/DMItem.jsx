import React from 'react'

const DMItem = ({ room }) => {
  const { otherUser, lastMessage } = room

  return (
    <div className="flex items-center px-4 py-2 hover:bg-gray-100 cursor-pointer">
      <img
        src={otherUser.profileImage}
        alt={otherUser.username}
        className="w-10 h-10 rounded-full mr-3"
      />
      <div className="flex-1">
        <p className="font-semibold">{otherUser.username}</p>
        <p className="text-sm text-gray-500 truncate">{lastMessage}</p>
      </div>
    </div>
  )
}

export default DMItem
