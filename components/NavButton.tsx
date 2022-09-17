import type { FC } from 'react';

interface INavButtonProps {
    title: string;
    isActive?: boolean;
    onClick?: () => void;
}

const NavButton: FC<INavButtonProps> = ({ title, isActive, onClick }) => {
    return (
        <button
            className={`${
                isActive && 'bg-cyan-600'
            } hover:bg-cyan-600 text-white py-2 px-2 rounded`}
            onClick={onClick}
        >
            {title}
        </button>
    );
};

export default NavButton;
