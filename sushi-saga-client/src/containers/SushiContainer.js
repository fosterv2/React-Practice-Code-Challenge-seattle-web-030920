import React, { Fragment } from 'react'
import MoreButton from '../components/MoreButton'
import Sushi from "../components/Sushi";

const SushiContainer = (props) => {
  
  return (
    <Fragment>
      <div className="belt">
        {props.sushiList.map(sushi => {
          return <Sushi key={sushi.id} sushiItem={sushi} onSushiClick={props.onSushiClick} eaten={props.eatenList} />
        })}
        <MoreButton onMoreClick={props.onMoreClick} />
      </div>
    </Fragment>
  )
}

export default SushiContainer