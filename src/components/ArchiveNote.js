import CardItem from "./CardItem";

const ArchiveNote = ({ notes, onDelete, onArchive }) => {
  return (
    <>
      <h2>Arsip</h2>
      {notes.length === 0 ? (
        <p class="notes-list__empty-message">Tidak ada catatan</p>
      ) : (
        <div className="notes-list">
          {notes?.map((note) => (
            <CardItem
              key={note.id}
              onDelete={onDelete}
              onArchive={onArchive}
              {...note}
            />
          ))}
        </div>
      )}
    </>
  );
};

export default ArchiveNote;
