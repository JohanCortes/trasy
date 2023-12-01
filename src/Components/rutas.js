import './styles/rutas.css'
import Instructions from './instructions';

export default function Rutas({ instructions }) {
    const toggleDetail = (e) => {
        let $leg = e.target;
        while (!$leg.classList.contains('legs'))
            $leg = $leg.parentElement;
        let $detail = $leg.querySelector('.detail'),
            $ins = $leg.nextElementSibling;
        if ($detail.classList.contains('deployed')) { 
            $detail.classList.remove('deployed')
            $ins.classList.remove('deploy') 
        }
        else { 
            $detail.classList.add('deployed') 
            $ins.classList.add('deploy')
        }
    };

    return (
        <div style={{ minHeight: '83vh' }}>
            {instructions.map((ins, i) =>
                <div key={i}>
                    <div onClick={toggleDetail} className="legs" keyy={i}>
                        <div className='leg'>
                            <h3>{ins.duration.text + ' (' + ins.distance.text + ')'}</h3>
                            <h4>Partida: {ins.start_address.replace(', Colombia', '')}</h4>
                            <h4>Destino: {ins.end_address.replace(', Colombia', '')}</h4>
                        </div>
                        <div className='detail'>
                        </div>
                    </div>
                    <Instructions ins={ins.steps} />
                </div>)}
        </div>
    )
}