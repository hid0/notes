const BtnArchive = ({ id, onArchive }) => {
  return (
    <button className="note-item__archive-button" onClick={() => onArchive(id)}>
      Arsip
    </button>
  );
};
export default BtnArchive;
