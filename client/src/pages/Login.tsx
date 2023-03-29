import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import AuthLogo from '../assets/create_account.png';
import network from '../utils/network';
import { storeToken } from '../utils/auth';
import AppError from '../components/AppError';

const Login = (): JSX.Element => {

    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [error, setError] = useState<string|null>(null);
    const [loading, setLoading] = useState<boolean>(false);
    const navigate = useNavigate();

    const loginUser = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setLoading(true)
        try {
            const body = { email, password };
            const response = await network.login(body);
            storeToken(response.data.data.token)
            setError(null)
            navigate('/todos')
        } catch (err: any) {
           setError(JSON.stringify(err.response.data));
        }
        setLoading(false)
    }
    
    return(
        <div className='row d-flex justify-content-center px-5'>
            <div className="col-6">
                    <h1 className="row">Welcome To TaskTrain.</h1>
                    <form className='mt-5' onSubmit={loginUser}>
                        <div className="mb-3">
                            <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                            <input type="email" className="form-control" id="exampleInputEmail1" 
                                aria-describedby="emailHelp" 
                                value={email} 
                                onChange={(e) => setEmail(e.target.value)}/>
                            <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                            <input type="password" className="form-control" id="exampleInputPassword1"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}/>
                        </div>
                        <div className="mb-3 form-check">
                            <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
                            <label className="form-check-label" htmlFor="exampleCheck1">Remember Me</label>
                        </div>

                        { loading ? <div className="d-flex align-items-center">
                                        <strong>Please Wait...</strong>
                                        <div className="spinner-border ms-auto" role="status" aria-hidden="true"></div>
                                        </div> : 
                                        <button type="submit" className="btn btn-success">LOGIN</button> 
                         }


                        <div className="mt-3">
                            <Link to={'/register'}>Do not have an account? Create one.</Link>
                        </div>
                    </form>

                    <AppError loading={loading} error={error}/>
            </div>
            <div className="col-6 mx-auto d-flex justify-content-center">
                <img src={AuthLogo} height={'500px'} style={{objectFit: 'contain'}}/>
            </div>
        </div>
    )
};

export default Login;