
const navContent=['Woman’s Fashion','Men’s Fashion','Electronics',
                  'Home & Lifestyle','Medicine','Sports & Outdoor',
                  'Baby’s & Toys','Groceries & Pets','Health & Beauty'

                ]

const MainNavbar=(props)=>{
    return(
        <div className="mt-2   md:mt-6 ">    
            {navContent.map((element)=>{
                return(
                    <div className="mt-3">
                        <button >{element}</button>
                    </div>
                    
                )
            })}
        </div>
    )

}

export default MainNavbar;