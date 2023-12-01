import './styles/rutas.css'

export default function Instructions({ ins }) {
    return (
        <div className={'ins'}>
            <ol>
                {ins.map((step, i) =>
                    <div key={i} className={'step'} dangerouslySetInnerHTML={{ __html: '<li>' + step.instructions + '</li>' }} />
                )}
            </ol>
        </div>
    )
}