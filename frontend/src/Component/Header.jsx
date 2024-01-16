import React from 'react'
import Container from './Container'
// import NavLink from 'react-router-dom'
function Header({setCategory}) {

  const navItems = [
    {
      id: 1,
      name: "sport",

    },
    {
      id: 2,
      name: "entertainment",
    },
    {
      id: 3,
      name: "business",
    },
    {
      id: 4,
      name: "general",
    },
    {
      id: 5,
      name: "health",
    },
    {
      id: 6,
      name: "science",
    },
    {
      id: 7,
      name: "technology",
    },
  ]
  return (
    <header className='py-3 shadow-xl bg-slate-100 w-[80vw]'>
      <Container>
      <nav className='flex items-center overflow-hidden'>
        <div className='mx-6'>
          <strong className='text-blue-900 text-3xl font-serif leading-tight'><span className='text-orange-700'>T</span>odayNews</strong>
        </div>
        <ul className='flex'>
          {
            navItems.map((item) => {
              return <li key={item.id}>
                <button
                  onClick={()=> setCategory(item.name)}
                  className='inline-block px-6 py-1 duration-200 hover:text-orange-600 rounded-full'
                >
                  {item.name}
               
                </button>
              </li>
            })
          }
        </ul>
      </nav>
      </Container>
    </header>
  )
}

export default Header
