import { Link } from 'react-router-dom';
import AuthLogo from '../assets/create_account.png';

const Register = (): JSX.Element => {
    return (
        <div className='row d-flex justify-content-center px-5'>
        <div className="col-6">
                <h1 className="row">Create a new account.</h1>
                <form className='mt-5'>
                    <div className="mb-3">
                        <label htmlFor="email" className="form-label">Email address</label>
                        <input type="email" className="form-control" id="email" aria-describedby="emailHelp"/>
                        <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="username" className="form-label">Username</label>
                        <input type="text" className="form-control" id="username"/>
                        <div id="usernamehelp" className="form-text">Create a unique username</div>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="password" className="form-label">Password</label>
                        <input type="password" className="form-control" id="password"/>
                    </div>
                    <button type="submit" className="btn btn-success">CREATE ACCOUNT</button>
                    <div className="mt-3">
                        <Link to={'/'}>Already have an account? Log In instead.</Link>
                    </div>
                </form>
        </div>
        <div className="col-6 mx-auto d-flex justify-content-center">
            <img src={AuthLogo} height={'500px'} style={{objectFit: 'contain'}}/>
        </div>
    </div>
    )
}

export default Register;