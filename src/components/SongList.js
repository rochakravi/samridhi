import React, { Component } from "react";
import { connect } from "react-redux";

class SongList extends Component {
  selSong = (ss, event) => {
    // console.log("ss", ss);
    this.props.selectingSong(ss);
    // alert("Agape");
  };
  renderList() {
    return this.props.songs.map((song) => {
      return (
        <div className="item" key={song.title}>
          <div className="right floated content">
            <button
              className="ui button primary"
              // onClick={this.props.selectingSong}
              onClick={() => this.selSong(song)}
            >
              Select
            </button>
          </div>
          <div className="content">{song.title}</div>
        </div>
      );
    });
  }
  render() {
    return (
      <div className="ui divided list">
        {this.renderList()}
        <p>{this.props.item}</p>
        {this.props.selectedSong.map((item) => {
          return <p key={item.title}>{item.title}</p>;
        })}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    songs: state.yz,
    item: state.selectedSongRed.item,
    selectedSong: state.selectedSongRed.selected,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    // selectingSong: (song) => dispatch({ type: "SELECTED_SONG", value: 2 }),
    selectingSong: (song) => dispatch({ type: "SELECTED_SONG", payload: song }),
    // dispatch({ type: "SELECTED_SONG", payload: { title: "Hare Krishna" } }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SongList);
