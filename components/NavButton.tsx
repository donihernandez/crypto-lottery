import type { FC } from 'react'

interface INavButtonProps {
    title: string;
    isActive?: boolean
}

const NavButton: FC<INavButtonProps> = ({ title, isActive }) => {
  return (
      <button className={`${isActive && "bg-cyan-600"} hover:bg-cyan-600 text-white py-2 px-2 rounded`}>{title}</button>
  )
}

export default NavButton