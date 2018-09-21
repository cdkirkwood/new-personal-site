import React from 'react'
import ReactTooltip from 'react-tooltip'

const Tooltip = props => {
  const deployed = props.link
  return (
    <ReactTooltip id={'dataToolTip1'} type="dark" effect="solid" place="bottom">
      Check it out!
    </ReactTooltip>

  )
}

export default Tooltip