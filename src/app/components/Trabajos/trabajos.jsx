import { dataTrabajos } from "./dataTrabajos";
import TrabajosCard from "./trabajosCard";

const Trabajos = () => {
    return (
        <div className="w-11/12 flex flex-col gap-12 m-12">
            <span>Trabajos</span>
            
            {
            dataTrabajos.map((data) =>
                <TrabajosCard
                    title={data.title}
                    description={data.description}
                    service={data.technology}
                />
            )
        }
        </div>
    )

}

export default Trabajos;