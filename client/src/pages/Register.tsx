import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import AuthLogo from '../assets/create_account.png';
import network from '../utils/network';
import AppError from '../components/AppError';

const Register = (): JSX.Element => {

    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [username, setUsername] = useState<string>('');
    const [error, setError] = useState<string|null>(null);
    const [loading, setLoading] = useState<boolean>(false);
    const navigate = useNavigate();

    const registerUser = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setLoading(true)
        try {
            const body = { email, password, username };
            const response = await network.register(body);
            setError(null)
            navigate('/')
        } catch (err: any) {
            setError(JSON.stringify(err.response.data));
        }
        setLoading(false)
     }

    return (
        <div className='row d-flex justify-content-center px-5'>
        <div className="col-6">
                <h1 className="row">Create a new account.</h1>
                <form className='mt-5' onSubmit={registerUser}>
                    <div className="mb-3">
                        <label htmlFor="email" className="form-label">Email address</label>
                        <input type="email" className="form-control" id="email" 
                            aria-describedby="emailHelp"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}/>
                        <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="username" className="form-label">Username</label>
                        <input type="text" className="form-control" id="username"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}/>
                        <div id="usernamehelp" className="form-text">Create a unique username</div>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="password" className="form-label">Password</label>
                        <input type="password" className="form-control" id="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}/>
                    </div>
                    
                        { loading ? <div className="d-flex align-items-center">
                                        <strong>Please Wait...</strong>
                                        <div className="spinner-border ms-auto" role="status" aria-hidden="true"></div>
                                        </div> : 
                                        <button type="submit" className="btn btn-success">CREATE ACCOUNT</button> 
                        }

                        
                        { error && !loading && <div className="alert alert-danger mt-3">{error}</div> }


                    <div className="mt-3">
                        <Link to={'/'}>Already have an account? Log In instead.</Link>
                    </div>
                </form>

                <AppError loading={loading} error={error}/>
        </div>
        <div className="col-6 mx-auto d-flex justify-content-center">
            <img src={AuthLogo} height={'500px'} style={{objectFit: 'contain'}}/>
        </div>
    </div>
    )
}

export default Register;