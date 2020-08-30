import React, { Component } from "react";
import { connect } from "react-redux";

class Wishlist extends Component {
  renderList() {
    return this.props.selectedSong.map((song) => {
      return (
        <div className="item" key={song.title}>
          <div className="right floated content">
            <button
              className="ui button primary"
              onClick={this.props.selectingSong}
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
        <p>{this.props.selectedSong}</p>
        <button
          className="ui button primary"
          onClick={this.props.selectingSong}
        >
          Select
        </button>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    songs: state.sngReducer,
    item: state.selectedSongRed.item,
    selectedSong: state.selectedSongRed.selected,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    // selectingSong: (song) => dispatch({ type: "SELECTED_SONG", value: 2 }),
    selectingSong: (song) =>
      dispatch({
        type: "SELECTED_SONG",
        payload: { title: "Mahadev", duration: "4:05" },
      }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Wishlist);
