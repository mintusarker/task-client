import React from 'react';

const Services = () => {

    const opinion = [
        {
            id: 1,
            name: '15 days',
            review: 'Easy replacement in'
        },
        {
            id: 2,
            name: '100 %',
            review: 'Fresh Products'
        },
        {
            id: 3,
            name: '2 days',
            review: 'Cash on delivery'
        },
        {
            id: 4,
            name: 'Exchange',
            review: 'Any products'
        },
    ]

    return (
        <div className='px-11 pt-14 pb-[150px]'>
            <p className='text-3xl font-semibold py-7'>Why should you buy from here?</p>
            <div className='grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 gap-6'>
                {opinion.length &&
                    opinion.map(opi => <div className='border shadow-md shadow-slate-400 p-2 rounded-lg' key={opi?.id}>
                        <p className='text-2xl font-semibold text-center'>{opi?.review}</p>
                        <p style={{ lineHeight: '75px' }} className='text-center border-2 m-3 border-green-700 w-20 h-20 mx-auto rounded-full font-medium'>{opi?.name}</p>

                    </div>)
                }
            </div>
        </div>
    );
};

export default Services;