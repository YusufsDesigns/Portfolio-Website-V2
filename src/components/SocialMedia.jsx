import { BsTwitter, BsLinkedin, BsGithub, BsFileEarmarkPdfFill } from 'react-icons/bs'
import { MdEmail } from 'react-icons/md'
import { images } from '../constants'

const SocialMedia = () => {
    return (
        <div className='app__social'>
            <a href='https://twitter.com/yusuf_Designs' target='blank'>
                <BsTwitter />
            </a>
            <a href='https://www.linkedin.com/in/yusuf-lawal-2b5ab6241/' target='blank'>
                <BsLinkedin />
            </a>
            <a href='https://github.com/YusufsDesigns' target='blank'>
                <BsGithub />
            </a>
            <a href="mailto: yusuf.olaoluwalawal@outlook.com">
                <MdEmail />
            </a>
            <a href={images.resume} target='_blank' rel="noreferrer">
                <BsFileEarmarkPdfFill />
            </a>
        </div>
    )
}

export default SocialMedia