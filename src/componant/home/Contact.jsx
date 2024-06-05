import React from 'react';
import { toast } from 'react-hot-toast';
import './Contact.css'

const Contact = () => {

    const handleSubmit = (e) => {
        e.preventDefault();
        toast.success('Form submitted, Thanks for reaching out', 5000)
        e.target.reset()
    }
    return (
        <div className='contact'> 
            <div className='px-16 text-center pt-12'>
                <p className='pb-1 text-3xl font-semibold font-serif inline border-b-4 border-gray-500'>Contact Us</p>
                <p className='pt-6'>Submit the form to get in touch with us</p>
            </div>
            <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 px-16 lg:px-40 py-10 gap-9 '>

                <div className='lg:ml-16'>
                    <div className='py-8'>
                        <p className='text-3xl mb-6'>Have a question?</p>
                        <p>Here, Send Your Query ------</p>
                    </div>
                    
                </div>

                <div>
                    <form action="" onSubmit={handleSubmit} className='flex flex-col w-auto'>
                        <input type="text" name='name' placeholder='Enter your name' className='p-2 border-2 border-black  text-black rounded-md focus:outline-none' required />
                        <input type="email" name='name' placeholder='Enter your email' className='p-2 my-3  border-2  text-black border-black  rounded-md focus:outline-none' required />

                        <textarea name="message" rows="10" placeholder='Enter your message' className='p-2 h-28  border-2 text-black  border-black  rounded-md focus:outline-none' required></textarea>

                        <button className='text-white bg-gradient-to-r from-green-600 to-gray-500 mt-6 px-5 py-2 mx-auto flex items-center rounded-sm hover:scale-105 duration-300'>Let's talk</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Contact;