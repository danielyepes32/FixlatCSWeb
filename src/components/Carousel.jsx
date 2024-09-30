import React from 'react';
import '../index.css'; // Importar el archivo CSS personalizado

const Carousel = () => {
    const logos = [
        "https://raw.githubusercontent.com/juanroacaice12/imagens-/main/logo_smart.svg",
        "https://raw.githubusercontent.com/juanroacaice12/imagens-/main/quimicas-removebg-preview.svg",
        "https://raw.githubusercontent.com/juanroacaice12/imagens-/main/el-retiro.svg",
        "https://raw.githubusercontent.com/juanroacaice12/imagens-/main/emo.svg"
    ];

    return (
        
        <div className="slider flex justify-center align-items-center">
            <div className="move">
                {logos.concat(logos).map((logo, index) => (

                    <div key={index} className="h-[100px] lg:w-[250px] w-[150px] flex justify-center bg-transparent">
                        <img
                            src={logo}
                            alt={`Logo ${index + 1}`}
                            className="filter brightness-0 invert lg:h-20 h-16"
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Carousel;
