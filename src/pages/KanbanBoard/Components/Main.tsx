import Board from "./Board";
import ListItem from "./ListItem";
import BoardWrapper from "./BoardWrapper";

const Main = () => {
  return (
    <div className="flex-1 p-6 flex gap-4 overflow-x-auto bg-neutral-100">
      <BoardWrapper>
        <Board>
          <ListItem />
          <ListItem />
          <ListItem />
        </Board>
      </BoardWrapper>

      <BoardWrapper>
        <Board>
          <ListItem />
          <ListItem />
          <ListItem />
          <ListItem />
        </Board>
      </BoardWrapper>

      <BoardWrapper>
        <Board>
          <ListItem />
          <ListItem />
        </Board>
      </BoardWrapper>

      <BoardWrapper>
        <Board>
          <ListItem />
          <ListItem />
          <ListItem />
        </Board>
      </BoardWrapper>

      <BoardWrapper>
        <Board>
          <ListItem />
          <ListItem />
          <ListItem />
        </Board>
      </BoardWrapper>
    </div>
  );
};

export default Main;
