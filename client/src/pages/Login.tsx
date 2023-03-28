import { Link } from 'react-router-dom';
import AuthLogo from '../assets/create_account.png';

const Login = (): JSX.Element => {
    return(
        <div className='row d-flex justify-content-center px-5'>
            <div className="col-6">
                    <h1 className="row">Welcome To TaskTrain.</h1>
                    <form className='mt-5'>
                        <div className="mb-3">
                            <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                            <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                            <input type="password" className="form-control" id="exampleInputPassword1"/>
                        </div>
                        <div className="mb-3 form-check">
                            <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
                            <label className="form-check-label" htmlFor="exampleCheck1">Remember Me</label>
                        </div>
                        <button type="submit" className="btn btn-success">LOGIN</button>
                        <div className="mt-3">
                            <Link to={'/register'}>Do not have an account? Create one.</Link>
                        </div>
                    </form>
            </div>
            <div className="col-6 mx-auto d-flex justify-content-center">
                <img src={AuthLogo} height={'500px'} style={{objectFit: 'contain'}}/>
            </div>
        </div>
    )
};

export default Login;