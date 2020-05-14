import React from 'react'

const Sushi = (props) => {
  return (
    <div className="sushi">
      <div className="plate" 
           onClick={() => props.onSushiClick(props.sushiItem)}>
        { 
          /* Tell me if this sushi has been eaten! */ 
          props.eaten.includes(props.sushiItem) ?
            null
          :
            <img src={props.sushiItem.img_url} alt="sushi_Item" width="100%" />
        }
      </div>
      <h4 className="sushi-details">
        {props.sushiItem.name} - ${props.sushiItem.price}
      </h4>
    </div>
  )
}

export default Sushi