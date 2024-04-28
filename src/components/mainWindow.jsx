import LocationList from './LocationList'
import arrow from '/Arrow.svg'

export default function MainWindow(){
    return(
        <section className="main-window-section">
            <h1 className="path-header">Путь:</h1>
            <LocationList />    
            <a className="back-link" href="#"><img src={arrow} alt="Стрелка назад" /></a>
        </section>
    )
}