import StudentIcon from './studentSignIn.svg'
import InstructorIcon from './InstructorIcon.svg'
import MailIcon from './Mail.svg'
import ImagePlaceholder from './imagePlaceholder.svg'
import ProfilePlaceholder from './ProfilePlaceholder.svg'
import Upload from './upload.svg';
import Dunagi from './dunagi.svg';

const svgExportor = {
    ImagePlaceholder,
    ProfilePlaceholder,
    Upload,
    Dunagi: {
        Logo: Dunagi
    },
    loginTab: {
        StudentIcon,
        InstructorIcon,
    },
    EmailVerfication: {
        MailIcon,
    }
}

export default svgExportor