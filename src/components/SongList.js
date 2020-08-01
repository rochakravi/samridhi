import React, { Component } from "react";
import { connect } from "react-redux";

class SongList extends Component {
  renderList() {
    const selectingsong = () => {
      console.log("Yes baby");
    };
    return this.props.songs.map((song) => {
      return (
        <div className="item" key={song.title}>
          <div className="right floated content">
            <button
              className="ui button primary"
              onClick={this.props.selectingsong(song)}
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
        <p>{this.props.selectedSong}</p>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { songs: state.songs, selectedSong: state.selecdSong };
};

const mapDispatchToProps = (dispatch) => {
  return {
    selectingSong: (song) =>
      dispatch({ type: "SELECTED_SONG", selected: song }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SongList);
