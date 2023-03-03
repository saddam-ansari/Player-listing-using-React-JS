import React, { useEffect, useState } from "react";
import axios from "axios";
import PlayerCard from "./PlayerCard";
import { styles } from "./style";

const PlayerList = () => {
  let url = "https://api.npoint.io/20c1afef1661881ddc9c";
  const [players, setPlayers] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [fliteredPlayers, setFilteredPlayers] = useState([]);

  const fatchData = async () => {
    const response = await axios.get(url);
    setPlayers(response.data.playerList);
  };

  useEffect(() => {
    fatchData();
  }, []);

  useEffect(() => {
    setFilteredPlayers(players);
  }, [players]);

  const handleSearchText = (e) => {
    setSearchText(e.target.value);
  };

  useEffect(() => {
    if (searchText) {
      // let matchPlayers = players.filter(player => player.PFName.includes(searchText));
      let matcher = players.filter((player) =>
        (player.TName + player.PFName)
          .toLowerCase()
          .includes(searchText.toLowerCase())
      );
      // setFilteredPlayers(matchPlayers);
      setFilteredPlayers(matcher);
    } else {
      setFilteredPlayers(players);
    }
  }, [searchText]);

  return (
    <div style={{ ...styles.container }}>
      <div style={{ ...styles.sub_header }}>
        <div style={{ ...styles.heading }}>
          <p>Player List</p>
        </div>
        <div style={{ ...styles.search_box }}>
          <img
            style={{ ...styles.search_icon }}
            src="/search-icon.svg"
            alt="search"
          />
          <input
            style={{ ...styles.search_input }}
            type="text"
            value={searchText}
            onChange={(e) => handleSearchText(e)}
            placeholder="Search by Team Name / Full Name"
          />
        </div>
      </div>
      <div style={{ ...styles.grid_box }}>
        {fliteredPlayers.length > 0 ? (
          fliteredPlayers
            .sort((a, b) => a.Value - b.Value)
            .map((player) => <PlayerCard data={player} />)
        ) : (
          <div style={{ ...styles.no_player_list }}>No Player List to Show</div>
        )}
      </div>
    </div>
  );
};

export default PlayerList;
