import {useState} from 'react';


export default function OneMenu({
    menuName,
    menuList
})
{
    const [isOpen, setIsOpen] = useState(false);

    // Handlers to control menu state
    const handleMouseEnter = () => setIsOpen(true);
    const handleMouseLeave = () => setIsOpen(false);

    return (
            <div 
                className="menu-container"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
            >
                <button  className='menu-trigger'>
                    {menuName}
                </button >
                
                {(isOpen) ?
                    <ul className="menu-dropdown">
                        {menuList.map((oneItem)=>(
                            <li 
                                className="menu-item"
                                key={oneItem.title}
                            >  
                                <a href={oneItem.link}>
                                    {oneItem.title}
                                </a>
                            </li>
                        ))}
                    </ul> 
                    :<></>}
            </div>
    )
}