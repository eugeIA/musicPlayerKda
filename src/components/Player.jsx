
import React, { useState,useEffect } from "react";
import styled from "styled-components";
import SpotifyPlayer from "react-spotify-web-playback";
import { useStateProvider } from "../utils/StateProvider";
// import {reducerCases} from "../utils/Constants"
function Player() {
  const[{contextUri}]=useStateProvider();
  const[playing,setPlaying]=useState(false)
  useEffect(()=>{
     setPlaying(true)
  },[contextUri]  
  )

  // const playItem = () => {
  //   dispatch({ type: reducerCases.SET_CONTEXTURI, contextUri: ["uri", ""]})
  // }
  
  return (
    
    <Container>
      <SpotifyPlayer 
       className="web__playback"
       play={playing}
       callback={(state)=>{
         state.isPlaying?setPlaying(true):setPlaying(false)
         console.log(state)
       }}
       styles = { { 
        activeColor : '#f0260f' , 
        bgColor : 'white' , 
        color : '#f0260f' , 
        loaderColor : '#f0260f' , 
        sliderColor : '#f0260f' , 
        trackArtistColor : '#f0260f' , 
        trackNameColor : 'black' , 
        
      } } 
      token={"BQDfJbIFJJ2aPgX9ePWVIvUk9TRRhR75ARqGMjAixjHiIWeKcL6JdqPdt7lns6tRHFRG_kWl5Sy9_WhUJvXEm6b_GfwO35b-hpHAJR8jfl6PtYWRCAnTOOBUxinAy7W1X0WGvnE_dh015HRUTL8mwx6McQXuOBJQTw2Y8iuR8J9yYm3ZgXg0ARonyeJC22_pymaTQo2zHFVMypHeI78eLsTtRzQCQtrmHHwLQy3SwdQ_itmrGmUSrKDzskKEm-i-tn2Tj59enyfERqKgw_Tq3WezUMQPsRYNoD7OfY7CfvTcWQLZ1d4gcNJmE0djwCFNpEMDSs7_CzXE5g9-YUA"}
      uris={[`${contextUri}`]}
      // uris={Array.isArray(contextUri) ? contextUri : [`${contextUri}`]}
      />
    </Container>
  );
}

const Container = styled.div`
  height: 8vh;
  
  .web__playback{
    width:100%;
    height:100%;
  }
`;

export default Player;