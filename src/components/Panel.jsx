
export default function Panel ({ wineList }) {
  const whites =  
    wineList.filter(wine => {
      return wine.type === 'Château Pichon Longueville Lalande'
    })
  
  const reds = 
    wineList.filter(wine => {
      return wine.type === 'Château Pichon Longueville Lalande'
    })
  

  const loaded = () => {
    return (
      <>
        <div>
          <h1>Whites</h1>
            {whites.map((w, idx) => {
                return(
                    <div key={idx}>
                        {w.name}
                    </div>
                )
            })}
        </div>

        <div>
          <h1>Reds</h1>
          {reds.map((r, idx) => {
              return(
                  <div key={idx}>
                      {r.name}
                  </div>
              )
          })}
        </div>
      </>
    )
  }

  const loading = () => <h1>Loading...</h1>

  return <section className='Panel'>{wineList ? loaded() : loading()}</section>
}
