import React from 'react'
import { Link} from 'react-router-dom';
export default function Writing() {
    return (
        <div>
            <h1 className="font-semibold text-2xl mb-4">Writing</h1>
            <div>
                <section className='py-5'>
                    <Link to="/writing/w3" className="grid grid-cols-2 gap-4" >
                        <span className="text-black/50">2024-02-13</span>
                        <div className="flex flex-col">
                            <span className="text-black">One must imagine Sisyphus HAPPY</span>
                            <p className="mt-2 font-serif text-black/70 text-base">Writing about Albert Camus Philosophy</p>
                        </div>
                    </Link>
                </section>
                <section className='py-5'>
                    <Link to="/writing/w2" className="grid grid-cols-2 gap-4" >
                        <span className="text-black/50">2023-12-25</span>
                        <div className="flex flex-col">
                            <span className="text-black">It's all good man.</span>
                            <p className="mt-2 font-serif text-black/70 text-base">Writing about Better call Saul and Breaking Bad</p>
                        </div>
                    </Link>
                </section>
                <section className='py-5'>
                    <Link to="/writing/w1" className="grid grid-cols-2 gap-4" >
                        <span className="text-black/50">2023-08-24</span>
                        <div className="flex flex-col">
                            <span className="text-black">The Dichotomy of Mumbai</span>
                            <p className="mt-2 font-serif text-black/70 text-base">Writing about the city I love : Mumbai</p>
                        </div>
                    </Link>
                </section>
                
            </div>
        </div>
    );
}

