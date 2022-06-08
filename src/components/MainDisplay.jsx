

export default function MainDisplay({ wineList }) {

    const loaded = () => {
        return wineList.map((wine, index) => {
            return(
                <div key={index}>
                    name={wine.name}
                    type={wine.type}
                    year={wine.year}
                    price={wine.price}
                    details={wine.details}
                    image={wine.image}
                </div>
            )
        })
    }

    const loading = () => <h1>Loading...</h1>

    return(
        <section className="Main-Disp">
            {wineList ? loaded() : loading()}
        </section>
    )
}