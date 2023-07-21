import React from 'react'
import "./Widgets.css"
import {TwitterTimelineEmbed}from"react-twitter-embed"
export const Widgets = () => {
  return (
    <div className='Widgets'>
        <TwitterTimelineEmbed className="widgets_container"
  sourceType="profile"
  screenName="saurabhnemade"
  options={{height: 600}}
/>
    </div>
  )
}
