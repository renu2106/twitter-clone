import React from 'react'
import "./SidebarOperation.css"

export const SidebarOperations = (props) => {
    const {text,active}=props;
  return (
    <div className={'sidebar-operation ${active && "sidebar-option_active"}'}>SidebarOperations
    <h2>{text}</h2>
    
    </div>

  )
}
