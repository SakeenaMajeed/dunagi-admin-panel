import { CiMail } from "react-icons/ci";
import { MdOutlineVpnKey } from "react-icons/md";
import { FaFacebook, FaGoogle, FaApple, FaYoutube, FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaUserCircle } from "react-icons/fa";
import { IoLogoGooglePlaystore } from "react-icons/io5";
import { HiOutlineMailOpen } from "react-icons/hi";

const iconExporter = {

    login: {
        Email: CiMail,
        Password: MdOutlineVpnKey
    },
    signUp: {
        user: FaUserCircle,
    },
    socialLogin: {
        Facebook: FaFacebook,
        Google: FaGoogle,
        Apple: FaApple
    },
    footer: {
        Youtube: FaYoutube,
        Facebook: FaFacebookF,
        Twitter: FaTwitter,
        Instagram: FaInstagram,
        LinkedIn: FaLinkedinIn,
    },
    confirmationEmail: {
        Email: HiOutlineMailOpen,
    },
    AppDownload: {
        AppleStore: FaApple,
        GooglePlay: IoLogoGooglePlaystore,
    }

}

export default iconExporter