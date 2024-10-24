import { Typography } from '@material-tailwind/react'
import React, { useContext } from 'react'
import myContext from '../../context/data/myContext';

function HeroSection() {
    const context = useContext(myContext);
    const { mode } = context;

    return (
        <section
            style={{ background: mode === 'dark' ? 'rgb(30, 41, 59)' : '#30336b' }}>

            {/* Hero Section */}
            <div className="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
                
                {/* Main Content */}
                <main>
                    <div className="text-center">
                        <div className="mb-2">
                            {/* Image */}
                            <div className="flex justify-center">
                                {/* Use local image or valid URL */}
                                <img src="https://cdn-icons-png.flaticon.com/128/3685/3685253.png" alt="Logo" />
                            </div>

                            {/* Heading */}
                            <Typography variant="h4" className="text-white font-bold">
                                Fahad
                            </Typography>
                        </div>

                        {/* Paragraph */}
                        <Typography
                            variant="paragraph"
                            className="sm:text-3xl text-xl font-extralight sm:mx-auto"
                            style={{ color: mode === 'dark' ? 'white' : 'white' }}>
                            Here are some blogs and tutorials contributed by Fahad.
                        </Typography>
                    </div>

                </main>
            </div>
        </section>
    );
}

export default HeroSection;
