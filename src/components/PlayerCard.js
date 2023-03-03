import React, { useState } from "react";
import { styles } from "./style";
import useImage from "./useImage";

const PlayerCard = ({ data }) => {
  const playerData = data;
  const { loading, error, image } = useImage(playerData.Id);

  const localTime = (mtime) => {
    let locTime = new Date(mtime);
    return locTime.toLocaleString();
  };

  return (
    <div key={playerData.id} style={{ ...styles.grid_items }}>
      <div style={{ ...styles.grid_content }}>
        <div>
          <label style={{ ...styles.content_items1 }}>Full Name: </label>{" "}
          <label style={{ ...styles.content_items2 }}>
            {playerData.PFName}
          </label>
        </div>
        <div>
          <label style={{ ...styles.content_items1 }}>Team Name: </label>{" "}
          <label style={{ ...styles.content_items2 }}>{playerData.TName}</label>
        </div>
        <div>
          <label style={{ ...styles.content_items1 }}>
            Skill Description:{" "}
          </label>{" "}
          <label style={{ ...styles.content_items2 }}>
            {playerData.SkillDesc}
          </label>
        </div>
        <div>
          <label style={{ ...styles.content_items1 }}>Value: </label>{" "}
          <label style={{ ...styles.content_items2 }}>
            <span>&#36;</span>
            {playerData.Value}
          </label>
        </div>
        {playerData.UpComingMatchesList.map((ucm, i) => (
          <div>
            <label style={{ ...styles.content_items1 }}>
              Up Coming Match:{" "}
            </label>
            <label style={{ ...styles.content_items2 }}>
              {ucm.CCode}
              <span> vs </span>
              {ucm.VsCCode}
            </label>
            <div>
              <label style={{ ...styles.content_items1 }}>Next Match: </label>
              <label style={{ ...styles.content_items2 }}>{localTime(ucm.MDate)}</label>
            </div>
          </div>
        ))}
      </div>
      <div style={{ ...styles.grid_image }}>
        <img src={image} alt="" />
      </div>
    </div>
  );
};

export default PlayerCard;
