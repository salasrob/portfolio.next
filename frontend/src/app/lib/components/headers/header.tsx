import React from 'react'

type HeaderProps = {
    elements?: React.ReactElement[];
  };
  
  const Header = ({ elements = [] }: HeaderProps) => {
    return (
      <header className="fixed inset-x-0 top-0 bg-blue-500 p-4">
        <div className="container mx-auto flex justify-between items-center max-w-screen-lg overflow-auto">
          {elements.map((element, index) => React.cloneElement(element, { key: index, className: 'text-white' }))}
        </div>
      </header>
    )
  }
  
  
  export default Header