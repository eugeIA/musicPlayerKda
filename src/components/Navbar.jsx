import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { reducerCases } from "../utils/Constants";

import SpotifyWebApi from "spotify-web-api-node";
import { IoPersonCircleOutline, IoSearch,IoMenu } from "react-icons/io5";
import { useStateProvider } from "../utils/StateProvider";
import { useNavigate } from "react-router-dom";

function Navbar() {
  const [{ userInfo }] = useStateProvider();
  const [searchInput, setSearchInput] = useState("");
  const [{ token, tracks,resultURI }, dispatch] = useStateProvider();
  const spotifyApi = new SpotifyWebApi();
  console.log(tracks);
  console.log(resultURI)

  console.log(setSearchInput);
 
  useEffect(() => {
    
    const search = async () => {
      spotifyApi.setAccessToken(token);
      spotifyApi
        .searchTracks(searchInput)

        .then((data) => {
          console.log("Data albums ", data)
          dispatch({ type: reducerCases.SET_SEARCH, tracks: data.body.tracks.items });
        });
    };
    search();
  }, [token, searchInput, dispatch]);

  let navigate = useNavigate();
  function handleClick() {
    navigate("/Search");
  }
  return (
    <Container>
      <div className="menu__navbar"><IoMenu /></div>
      <h2 className="app_title">
        <span className="sound">Sound</span>House
      </h2>
      <div className="home__page__search__bar">
        <IoSearch />
        <input
          type="search"
          className="bar__de__recherche"
          placeholder="Search and play the best sounds"
          onClick={handleClick}
          onChange={(e) => setSearchInput(e.target.value)}
        />
        {/* <Search /> */}
      </div>
      <div className="search__icon__navbar" onClick={handleClick}><IoSearch /></div>
      <div className="name_user">
        <IoPersonCircleOutline className="profil__icon"/>
        <div className="username">{userInfo?.username}</div>
      </div>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  .menu__navbar{
    display:none;
  }
  h2 {
    align-self: center;
    margin-top: -0.1px;
    margin-left: 20px;
    color: #08033f;
    .sound {
      color: #f0260f;
    }
  }
  .home__page__search__bar {
    display: flex;

    gap: 10px;
    padding: 15px 5px;
    height: 1.5vh;
    background-color: #f7f7fb;
    border-radius: 50px;
    width: 45%;
    margin-left: -115px;
    svg {
      color: black;
      align-self: center;
    }
    .bar__de__recherche {
      background-color: #f7f7fb;
      border: none;
      width: 90%;
      &:focus {
        outline: none;
      }
    }
  }
  .name_user {
    display: flex;
    margin-right: 55px;
    padding-top: 10px;
    gap: 2px;
    svg {
      padding-top: 3.5px;
      font-size: larger;
    }
    .username {
      font-size: larger;
    }
  }
  .search__icon__navbar{
    display:none;
  }
  @media only screen and (max-width: 500px){
    .menu__navbar{
      display:block;
      font-size:250%;
      margin-top:-5px;
    }
    h2 {
     align-self:center;
     margin-right:15vw;
     font-size:175%;
   }
    .home__page__search__bar{
      display:none;
    }
    .search__icon__navbar{
      display:block;
      font-size:200%;
      margin-right:5px;
    }
    .name_user {
     font-size:100%;
     .profil__icon{
       font-size:250%;
       margin-top:-20px;
     }
     .username {
      display:none;
    }
    }
  }
`;

export default Navbar;
