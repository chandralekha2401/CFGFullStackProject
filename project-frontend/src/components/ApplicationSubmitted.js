import  { Link} from 'react-router-dom'
import './ApplicationSubmitted.css'


function ApplicationSubmitted(){

return(
    <div class="txt-msg">
        <h3>Your Application for Home Loan has been submitted to manager for review.</h3>
        <h3>You can check the status of your application in status page. <Link to='/status'>Application Status</Link></h3>
        <div class="link-cls"><h3><Link to='/HomePage'>Home Page</Link></h3></div>
    </div>
);
}

export default ApplicationSubmitted;