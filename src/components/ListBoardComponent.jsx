import React, { Component } from 'react';

class ListBoardComponent extends Component {

  constructor(props) {
    super(prpos);
    this.state ={
      board: []
    }
  }

  componentDidMount() {
    BoardService.getBoards().then((res) => {
      this.setState({boards : res.data});
    });
  }

  render() {
    return (
      <div>
        <h2> className="text-center"> 게시판 목록</h2>
        <div className="row">
          <table className="table table-striped table-boardered">
            <thead>
            <tr>
              <th>글 번호</th>
              <th>글 번호</th>
              <th>글 번호</th>
              <th>글 번호</th>
              <th>글 번호</th>
              <th>글 번호</th>
              <th>글 번호</th>
              <th>글 번호</th>
              <th>글 번호</th>
            </tr>
            </thead>
            <tbody>
            {
              this.state.boards.map(
                board =>
                  <tr key={board.board_no}>
                    <td> {board.address}</td>
                  </tr>
              )
            }
            </tbody>
          </table>
        </div>

      </div>
    );
  }
}

export default ListBoardComponent;