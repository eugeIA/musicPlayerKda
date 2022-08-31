import React from "react";
import styled from "styled-components";
import {SidebarData} from '../data/SidebarData'
import {NavLink} from 'react-router-dom'





function SidebarL() {
  
  return (
    <Container>
      
      <div className="sidebar__body">
        {
          SidebarData.map((item,index)=>{
            return(
              <div key={index}>
                <NavLink 
                 to={item.path} 
                 className="links"
                 style={({ isActive }) => ({
                  color: isActive ? '#f0260f' : ' #08033f ',
                  
                })}>
                  <span className="icon__link">{item.icon}</span>
                  <span >{item.title}</span>
                </NavLink>
              </div>
            )
          })
        }
      </div>
      
      
      
    </Container>
  );
}

const Container = styled.div`
    width:100%;
    padding-left:30px;
    
    .sidebar__body{
      margin-top:5px;
     
      div{
       
        .links{
          display:flex;
          cursor:pointer;
          text-decoration:none;
          font-size:100%;
          margin-bottom:20px;
          .icon__link{
            margin-right:5px;
            align-self:center;
          }
          
        }
      }
    }
    

`;

export default SidebarL;
