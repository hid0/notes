const NoteDate = ({ date }) => {
  const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  return (
    <>
      <p className="note-item__date">
        {new Date(date).toLocaleDateString("id-ID", options)}
      </p>
    </>
  );
};

export default NoteDate;
