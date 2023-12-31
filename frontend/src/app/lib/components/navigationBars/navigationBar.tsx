import React from "react"

type NavbarProps = {
    elements: React.ReactElement[];
    direction?: 'top' | 'side';
    isExpanded?: boolean;
  };

const Navbar: React.FC<NavbarProps> = ({ elements, direction = 'side', isExpanded = true }) => {
    const isTopbar = direction === 'top';
    const containerClass = isTopbar ? 'flex flex-col items-start bg-blue-500 p-4 w-full border-b' : 'fixed left-0 flex flex-col items-start bg-blue-500 p-4 border-r';
  
    if (!isExpanded) {
      return null;
    }
  
    return (
      <nav className={`${containerClass}`}>
        <ul className="flex flex-col items-start">
          {elements.map((element, index) => React.cloneElement(element, { key: index }))}
        </ul>
      </nav>
    )
  }

export default Navbar