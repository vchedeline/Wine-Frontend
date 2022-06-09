export default function MainDisplay({ wineList, wine }) {
  const loaded = () => {
    if (wine) {
      return <div>{wine.name}</div>;
    }
    return wineList.map((ele, idx) => {
      return <div key={idx}>{ele.name}</div>;
    });
  };

  return (
    <div className="Main-Disp">{wineList ? loaded() : <h1>Loading...</h1>}</div>
  );
}
