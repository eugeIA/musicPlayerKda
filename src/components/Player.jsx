
import React, { useState,useEffect } from "react";
import styled from "styled-components";
import SpotifyPlayer from "react-spotify-web-playback";
import { useStateProvider } from "../utils/StateProvider";
// import {reducerCases} from "../utils/Constants"
function Player() {
  const[{contextUri,token}]=useStateProvider();
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
      token={token}
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