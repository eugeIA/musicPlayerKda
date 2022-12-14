import React,{useEffect} from "react";
import styled from "styled-components";
import { useStateProvider } from "../utils/StateProvider";
import axios from "axios";
import radioboy from "./radioboy.jpg"
import { reducerCases } from "../utils/Constants";
import {IoEllipsisVertical} from "react-icons/io5"

function HomePage() {
  const [{ token, selectedPlaylistId, selectedPlaylist, contextUri }, dispatch] =
    useStateProvider();
  useEffect(() => {
    const getInitialPlaylist = async () => {
      const response = await axios.get(
        `https://api.spotify.com/v1/playlists/${selectedPlaylistId}`,
        {
          headers: {
            Authorization: "Bearer " + token,
            "Content-Type": "application/json",
          },
        }
      );
      console.log(response.data);
      const selectedPlaylist = {
        id: response.data.id,
        name: response.data.name,
        description: response.data.description.startsWith("<a")
          ? ""
          : response.data.description,
        image: response.data.images[0].url,
        tracks: response.data.tracks.items.map(({ track }) => ({
          id: track.id,
          name: track.name,
          artists: track.artists.map((artist) => artist.name),
          image: track.album.images[1].url,
          duration: track.duration_ms,
          album: track.album.name,
          contextUri: track.album.uri,
          track_number: track.track_number,
        })),
      };

      dispatch({ type: reducerCases.SET_PLAYLIST, selectedPlaylist });
    };
    getInitialPlaylist();
  }, [token, selectedPlaylistId,contextUri, dispatch]);

  
  return (
    <Container>
      <h2 className="homePage__title">Home</h2>
      <div className="home__page__cart">
        <div className="accroches">
           <h3 className="accroche__1">Try new vibes</h3>
           <h5 className="accroche__2">Play the best sounds of underground</h5>
           <div className="mini__block"><div className="orange"></div> <div className="blue"></div> <div className="green"></div> <div className="red"></div></div>
        </div>
        <div className="image__home__page__cart">
          <img src={radioboy} alt="radioboy" />
        </div>
      </div>
      
      <div className="top_track">
        <h3>My favorites</h3>
        {selectedPlaylist && (
        <>
          
          <div className="list">
            
            <div className="tracks">
              {selectedPlaylist.tracks.map(
                ({ id, name, artists, image,contextUri
                  }) => {
                  return (
                    <div className="row" 
                          key={id}
                          onClick={() => {
                            dispatch({type: reducerCases.SET_CONTEXTURI, contextUri})
                            console.log(contextUri)
                          }
                            
                          }>
                      
                      <div className="col__detail">
                        <div className="image">
                          <img src={image} alt="track" />
                        </div>
                        <div className="songs__detail">
                          <div className="info">
                            <p className="name">{name}</p>
                            <p className="artist__name">{artists}</p>
                          </div>
                          <div className="icone"><IoEllipsisVertical /></div>
                        </div>
                        
                      </div>
                      
                      
                    </div>
                  );
                }
              )}
            </div>
          </div>
        </>
      )}
      </div>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding-left:40px;
  padding-top:5px;
  padding-right:-5px;
  .home__page__cart{
    display:flex;
    background-color:#D9D9D9;
    width:49vw;
    border-radius:10px;
    justify-content:space-between;
    padding-left:10px;
    margin-top:-5px;
    height:40vh;
    .image__home__page__cart{
  
      img{
        height:40vh;
        width:15vw;
        border-radius:0% 5% 5% 0%;
      }
    }
    .accroches{
      padding-top:30px;
      .accroche__1{
         font-size:150%;
      }
      .mini__block{
        display:flex;
        gap:2px;
        margin-top:100px;
        .orange{
          background-color:#f0260f;
          width:5vw;
          height:2vh;
          border-radius:50px;
        }
        .blue{
          background-color:blue;
          width:1vw;
          height:2vh;
          border-radius:50px;
        }
        .green{
          background-color:green;
          width:1vw;
          height:2vh;
          border-radius:50px;
        }
        .red{
          background-color: #e01471 ;
          width:1vw;
          height:2vh;
          border-radius:50px;
        }
      }
    }
  }
  .top_track{
    margin-bottom:15px;
    h3{
      color:#08033f;
      font-size:100%;
    }
    .list{
      .tracks{
        display:flex;
        align-items:center;
        flex-wrap:wrap;
        gap:25px;
       
        .row{
          text-align:left;
          padding-left:5px;
          
          padding-top:10px;
          box-shadow:1px 1px 5px  #D9D9D9;
          box-sizing:border-box;
          border-radius:10px;
          width:15vw;
          cursor:pointer;
          font-size:smaller;
          .col__detail{
            .image{
              img{
                width:14vw;
                height:25vh;
                border-radius:10px;
              }
            }
            .songs__detail{
              display:flex;
              .icone{
                align-self:center;
              }
              .info{
                box-sizing:border-box;
                flex-grow:2;
                padding-left:3px;
                overflow:hidden;
                .name{
                  font-weight:bold;
                  font-size:smaller;
                  margin-right:1px;
                  margin-top:2px;
                  text-overflow:ellipsis;
                }
                .artist__name{
                   font-size:smaller;
                   margin-top:-5px;
                   text-overflow:ellipsis;
                }
                .hit__duration{
                   margin-top:-5px;
                }
             }
            }
            
          }

        }
        
      }
    }
  }
  .homePage__title{
    color:#08033f;
    font-size:125%;
  }
  
  
`;

export default HomePage;

