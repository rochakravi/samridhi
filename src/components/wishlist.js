import React, { Component } from "react";
import { connect } from "react-redux";

class Wishlist extends Component {
  // renderList() {
  //   return <div>
  //             {this.props.selectedSong.map((song) => {
  //     return (
  //       <div className="item" key={song.title}>
  //         <div className="right floated content">
  //           <button
  //             className="ui button primary"
  //             onClick={this.props.selectingSong}
  //           >
  //             Select
  //           </button>
  //         </div>
  //         <div className="content">{song.title}</div>
  //       </div>}

  //   </div>
  //     );
  //   });
  // }
  render() {
    return (
      <div className="ui divided list">
        <h2>Song WishList Item Count: {this.props.selectedSong.length}</h2>
        {this.props.selectedSong.map((item) => {
          return <p key={item.title}>{item.title}</p>;
        })}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
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
