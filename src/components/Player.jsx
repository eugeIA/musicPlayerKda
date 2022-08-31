
import React, { useEffect } from "react";
import styled from "styled-components";
import SpotifyPlayer from "react-spotify-web-playback";
import { useStateProvider } from "../utils/StateProvider";
import {reducerCases} from "../utils/Constants"
function Player() {
  const[{token,contextUri},dispatch]=useStateProvider();
  useEffect(()=>{
    dispatch(
      {
        type: reducerCases.SET_CONTEXTURI, contextUri
      },
      
    )
  },[token,dispatch]

  
  )

  // const playItem = () => {
  //   dispatch({ type: reducerCases.SET_CONTEXTURI, contextUri: ["uri", ""]})
  // }
  
  return (
    
    <Container>
      <SpotifyPlayer 
       className="web__playback"
       styles = { { 
        activeColor : '#f0260f' , 
        bgColor : 'white' , 
        color : '#f0260f' , 
        loaderColor : '#f0260f' , 
        sliderColor : '#1cb954' , 
        trackArtistColor : '#f0260f' , 
        trackNameColor : 'black' , 
        
      } } 
      token={"BQDQzJ1RdUVyjAl6QSHr67O45j792UTmNuzrwsZGkCAcMi9HgEOQYve3s2TevnzPPrZnYnbVqi9bxJHXQAGOrY6BAlCc8nXFSbdBjw9Otj5qC5I8-B71hHpYB8mInHB_NmmQ9-9qZXp2qnwueXtUiRbDaxs2Toii6HJRZUkWXZZ6mKJHkLp6UMRTNw87mrLIRk8vlJKGCj_kCMOoj7AegdfDquP0BIyAChRnKtE0xGPWI6y5ZUOIwq3We4iYn8u4_oqybndnTh7k0ojRnvB5y3_HJqQd4q0be6wGG0i5xa41b30P63Shu62X-199pfcq_uWboLzT-LrRb9ZLIrg"}
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