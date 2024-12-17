import "../components/proyectos.css"
import Target from "./minicomponents/target"
import BarberPage from "./BarberPage.png"
import climaApp from "./climaapp.png"
import contadorApp from "./contadorapp.png"


export default function Proyectos() {
    

    return(
        <div className="as">
            <h1 className="title">Proyectos</h1>
            <Target nombre="App de clima" data="Desarrollada con las últimas tecnologías (React Native, Expo y AccuWeather), nuestra app ofrece una interfaz intuitiva y fácil de usar, diseñada para una experiencia de usuario excepcional." link="https://github.com/ivan20078/clima-app" imagen={climaApp}/>
            <Target nombre="Contador" data="Esta app, desarrollada con React Native y Expo, es una muestra de lo que se puede lograr con las últimas tecnologías. Con una interfaz intuitiva y un rendimiento óptimo, es perfecta para contar repeticiones en el gimnasio, etc. ¡Descúbrela y simplifica tu día a día!" imagen={contadorApp} link="https://github.com/ivan200789/contador-RN1" />
            <Target nombre="BarberPage (En proceso)" data="Nuestra aplicación está diseñada para optimizar la gestión de tu barbería. Permite a tus clientes reservar citas en línea, te ayuda a organizar tu agenda y te brinda una visión clara de tus ingresos. Además, incluye herramientas para gestionar tu inventario y personalizar los servicios que ofreces." imagen={BarberPage} link="https://github.com/ivan200789/BarberPage" />

        </div>
    )
}