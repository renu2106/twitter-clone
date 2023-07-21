import React from "react";
import "./Home.css"
import { Feed } from "./Feed";
import { Sidebar } from "./Sidebar";
import { Widgets } from "./Widgets";


export const Home = () => {
  return (
    <div className="Home">
        <Sidebar/>
        <Feed/>
        <Widgets/>
    </div>
  )
}
