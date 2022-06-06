/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
const Suggestions = ({ data, onClick }) => {
  // console.log('data :>> ', data);

  if (!data) return null;

  const handleClick = (e) => {
    console.log(e.target.textContent);
  };

  return (
    <ul className="suggestions">
      {data.map((item) => (
        <li key={item}>
          <button onClick={(e) => onClick(e.target.textContent)}>
            {item}
          </button>
        </li>
      ))}
    </ul>
  );
};
export default Suggestions;
