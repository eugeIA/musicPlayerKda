import React from "react";
import styled from "styled-components";
import { useStateProvider } from "../utils/StateProvider";
import { reducerCases } from "../utils/Constants";
import { IoEllipsisVertical } from "react-icons/io5";
// import SpotifyWebApi from "spotify-web-api-node";

function Search() {
  // const [searchInput, setSearchInput] = useState("");
  const [{ tracks },dispatch] = useStateProvider();
  
  // const [albums, setAlbums] = useState([]);
  
  //  console.log(setSearchInput)
  //  console.log(setAlbums)
  // // const spotifyApi=new SpotifyWebApi();
  // useEffect(() => {
  //   // const search=async () =>{
  //   //   spotifyApi.setAccessToken(token)
  //   //   let getSongs=spotifyApi.searchTracks(searchInput)
  //   //     .then((response)=>response.json())
  //   //     .then(
  //   //       (data)=>{setAlbums(data.tracks.items)}
  //   //     )
  //   //    console.log(getSongs) 
  //   // }
   
  //   // search()
  //   const search = async () => {
  //     const searchparams = {
  //       method: "GET",
  //       headers: {
  //         Authorization: "Bearer " + token,
  //         "Content-Type": "application/json",
  //       },
  //     };
  //     let getArtistId = await fetch(
  //       "https://api.spotify.com/v1/search?q=" + searchInput + "&type=artist",
  //       searchparams
  //     )
  //       .then((response) => response.json())
  //       .then((data) => {
  //         console.log(data);
  //         return data.artists.items[0].id
  //       });
  //     let getAlbums = await fetch(
  //       "https://api.spotify.com/v1/artists/" + getArtistId + "/albums" + "?include_groups=album&market=CA",
  //       searchparams
  //     )
  //       .then((response) => response.json())
  //       .then((data) => {
  //         console.log(data);
  //         setAlbums(data.items);
  //       });
      
        
        
  //     console.log(getAlbums);
     
      

  //     dispatch({ type: reducerCases.SET_SEARCH, albums });
  //   };
  //   search();
  // }, [token, searchInput,dispatch]);
  // console.log(albums);
  const times = (ms) => {
      const minutes = Math.floor(ms / 60000);
      const seconds = ((ms % 60000) / 1000).toFixed(0);
      return minutes + ":" + (seconds < 10 ? "0" : "") + seconds;
    };
  return (
    <Container>
      
      <div className="search__result__body">
        {tracks.map((track) => {
          return (
            <div key={track.id} className="search__results__cart" onClick={() => {
              dispatch({type: reducerCases.SET_CONTEXTURI, contextUri: track.uri})
            }}>
              <img src={track.album.images[0].url} alt="" className="albums__image" />
              <div className="album__description">
                <div className="track__name__duration">
                  <h6 className="result__title">{track.name}</h6>
                  <h6 className="parution__date">{times(track.duration_ms)}</h6>
                </div>
                <IoEllipsisVertical />
              </div>
              
            </div>
          );
        })}
      </div>
    </Container>
  );
}

export default Search;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 20px;
  padding-top: 27px;
  .search__bar {
    display: flex;
    gap: 10px;
    padding: 15px 5px;
    background-color: #f7f7fb;
    border-radius: 50px;
    width: 80%;
    svg {
      color: black;
    }
    input {
      background-color: #f7f7fb;
      border: none;
      width: 90%;
      &:focus {
        outline: none;
      }
    }
  }
  .search__result__body {
    padding-top:15px;
    padding-right:25px;
    padding-left:-1px;
    padding-bottom:25px;
    display:grid;
    grid-template-columns: repeat(4, 1fr);
    width:100%;
    gap:15px;
    
    .search__results__cart{
        display:flex;
        flex-direction:column;
        gap:10px;
        cursor:pointer;
        box-shadow:1px 1px 1px 1px #D9D9D9;
        padding:5px 5px;
        border-radius:10px;
        img{
          border-radius:10px;
          height:20vh;
        }
       .album__description{
          display: flex;
          margin-top:-15px;
          svg{
            align-self:center;
          }
          .track__name__duration{
            flex-grow:2;
            .parution__date{
              margin-top:-20px;
              font-weight:normal;
            }
            .result__title{
              
            }
          }
          
       }
    }
    
  }
`;
