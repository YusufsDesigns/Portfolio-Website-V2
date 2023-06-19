import { useState, forwardRef, useRef } from 'react';
import { images } from '../../constants';
import { motion } from 'framer-motion'
import emailjs from '@emailjs/browser';
import Swal from 'sweetalert2'
import './Footer.scss';

const Footer = forwardRef(function Footer(props, ref){
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    })

    const [isFormSubmited, setFormIsSubmited] = useState(false)

    const { name, email, message } = formData

    const handleChangeInput = (e) => {
        const { name, value } = e.target

        setFormData({...formData, [name]: value})
    }

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        if(name === '' || email === '' || message === ''){
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'You need to fill in all the fields!'
            })
        } else {
            emailjs.sendForm('service_fn10td4', 'template_pmzzvot', form.current, 's30MTv4sbc7gnMZdz')
                .then((result) => {
                    console.log(result.text);
                }, (error) => {
                    console.log(error.text);
                });

            setFormIsSubmited(true)
            Swal.fire(
                'Good job!',
                'Thank you for getting in touch!',
                'success'
            )
        }
        
    };

    return (
        <div id='contact' className='app__container app__wrapper app__flex'>
            <motion.div
                ref={ref}
                whileInView={{ y: [100, 50, 0], opacity: [0, 0, 1] }}
                transition={{ duration: 0.5 }}
                className='app__flex app__footer'
            >
                <h2 className="head-text">Get In <span>Touch!</span></h2>
                <div className="app__footer-cards">
                    <div className="app__footer-card">
                        <img src={images.email} alt="email" />
                        <a href="mailto:yusuf.olaoluwalawal@outlook.com" className='p-text'>yusuf.olaoluwalawal@outlook.com</a>
                    </div>
                    <div className="app__footer-card">
                        <img src={images.mobile} alt="mobile" />
                        <a href="tel: +2349137106079" className='p-text'>(+234) 913 710 607 9</a>
                    </div>
                </div>
                {!isFormSubmited
                    ? 
                    <form ref={form} onSubmit={sendEmail} className="app__footer-form app__flex">
                        <div className="app__flex">
                            <input 
                                type="text" 
                                placeholder='Your Name' 
                                name='name'
                                value={name}
                                onChange={handleChangeInput}
                                className="p-text"  
                            />
                        </div>
                        <div className="app__flex">
                            <input 
                                type="email" 
                                placeholder='Your Email' 
                                name='email'
                                value={email}
                                onChange={handleChangeInput}
                                className="p-text"  
                            />
                        </div>
                        <div>
                            <textarea 
                                placeholder='Your Message'
                                name="message"
                                className='p-text'
                                value={message}
                                onChange={handleChangeInput}
                            >
                            </textarea>
                        </div>
                        <button type="submit" className="p-text">Send Message</button>
                    </form>
                    :
                    <div>
                        <h3 className="head-text">Thank you for getting in touch!</h3>
                    </div>
                }
            </motion.div>
        </div>
    )
})

export default Footer