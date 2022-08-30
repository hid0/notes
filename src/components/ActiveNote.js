import CardItem from "./CardItem";

const ActiveNote = ({ notes, onDelete, onArchive, query }) => {
  return (
    <>
      <h2>Aktif</h2>
      {notes.length === 0 ? (
        <p className="notes-list__empty-message">Tidak ada catatan</p>
      ) : (
        <div className="notes-list">
          {notes
            .filter((note) => {
              if (query) {
                return note.title.toLoweCase().includes(query.toLoweCase());
              }
              return true;
            })
            .map((note) => (
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

export default ActiveNote;
