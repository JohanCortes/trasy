import './styles/inicio.css'
export default function Inicio() {
    return (
        <div className="bcg">
            <div className="bsg">
                <div className='contIn'>
                    <section>
                        <img src="https://th.bing.com/th/id/OIG.sIjTBnXQgjWHfqqIxwJP?w=1024&h=1024&rs=1&pid=ImgDetMain" alt="img" />
                    </section>
                    <section>
                        <h2>¿Qué hace nuestro software?</h2>
                        <p>Nuestro software utiliza datos obtenidos por sensores para generar rutas eficientes y seguras. Ya sea para logística, seguimiento de vehículos o cualquier aplicación que requiera rutas optimizadas.</p>
                    </section>

                    <section>
                        <h2>Características destacadas</h2>
                        <ul>
                            <li>Optimización de rutas basada en datos en tiempo real.</li>
                            <li>Integración fácil con una variedad de sensores.</li>
                            <li>Interfaz intuitiva para la configuración y monitorización.</li>
                        </ul>
                    </section>
                    <section>
                        <img src="https://th.bing.com/th/id/OIG.TtFo6slw1ngkKhIA7s3x?pid=ImgGn" alt="img" />
                    </section>
                </div>
            </div>
        </div>
    )
}