const TrabajosCard = ({ title, service, description }) => {
    return (
        <div className="w-full flex justify-center items-center bg-slate-950 text-white rounded-3xl py-12">
            <div className="w-11/12 flex justify-center items-center">
                <div className="w-full flex flex-col gap-6">
                    <div className="">
                    <h3 className="text-5xl">{title}</h3>
                    <span>{service}</span>
                    </div>
                    <p>{description}</p>
                    <div className="flex gap-12">
                    <button>Ver Sitio</button>
                    <button>Quisiera un sitio como este</button>
                    </div>
                </div>
                <div className="Imagen"></div>
            </div>
        </div>
    )
}


export default TrabajosCard;
