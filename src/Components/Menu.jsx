import React from 'react'

const Menu = () => {
  let arr = [
    {
      img: "/images/menu_burger_image.png",
      title: "Burgers",
      plus: "https://www.knight-bite.com/res/menu/add-icon.svg"
    },
    {
      img: "/images/menu_fries.png",
      title: "Fries/Starters",
      plus: "https://www.knight-bite.com/res/menu/add-icon.svg"
    },

    {
      img: "/images/menu_menu.png",
      title: "Main Course",
      plus: "https://www.knight-bite.com/res/menu/add-icon.svg"
    },

    {
      img: "/images/menu_drinks.png",
      title: "Drinks",
      plus: "https://www.knight-bite.com/res/menu/add-icon.svg"
    },

    {
      img: "/images/menu_wraps.png",
      title: "Wraps",
      plus: "https://www.knight-bite.com/res/menu/add-icon.svg",
    },

    {
      img: "/images/menu_deserts.png",
      title: "Desserts",
      plus: "https://www.knight-bite.com/res/menu/add-icon.svg",
    }
  ]
  return (
    <>
      <div className="menu">
        <div className="submenu">
          {
            arr.map((elem,index) => {
              let { img, title, plus } = elem

              return (
                <React.Fragment key={index}>
                  <div className="box">
                    <img src={img} alt="" />
                    <h2>{title}</h2>
                    <img src={plus} alt="" />
                  </div>
                </React.Fragment>
              )
            })
          }
        </div>
      </div>
    </>
  )
}

export default Menu
