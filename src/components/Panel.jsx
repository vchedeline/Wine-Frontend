export default function Panel ({ wineList }) {
  const loaded = () => {
    return wineList.map((wine, index) => {
      return (
        <div key={index}>
          name={wine.name}
          image={wine.image}
        </div>
      )
    })
  }

  const loading = () => <h1>Loading...</h1>

  return (
    <section className='Panel'>{wineList ? loaded() : loading()}</section>
  )
}
