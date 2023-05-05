import { GithubAuthProvider, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import React, { useState } from 'react';
import { useContext } from 'react';
import { FaGithub, FaGoogle } from 'react-icons/fa';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import { AuthContext } from '../../../providers/AuthProvider';

const Login = () => {
    const {auth, signIn } = useContext(AuthContext);
    const [error, setError] = useState(null);

    const navigate = useNavigate();
    const location = useLocation();
    const from = location?.state?.from?.pathname || '/';

    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();

    const handleLogin = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        setError(null);

        if (password.length < 6) {
            setError('Password must be 6 characters or long');
            return;
        }

        signIn(email, password)
            .then(result => {
                const createdUser = result.user;
                console.log(createdUser);
                form.reset();
                navigate(from, {replace: true});
                toast.success("You're logged in");
            })
            .catch(error => {
                setError(error.message);
            });

    }

    const handleGoogleLogin = () => {
        signInWithPopup(auth, googleProvider)
        .then(result => {
            const loggedUser = result.user;
            console.log(loggedUser);
            toast.success("You're logged in!");
            navigate(from, {replace: true});
        })
        .catch(error => {
            console.log(error.message);
        });
    }

    const handleGithubLogin = () => {
        signInWithPopup(auth, githubProvider)
        .then(result => {
            const loggedUser = result.user;
            console.log(loggedUser);
            toast.success("You're logged in!");
            navigate(from, {replace: true});
        })
        .catch(error => {
            console.log(error.message);
        });
    }

    return (
        <div className='bg-yellow-100'>
            <div className='max-w-6xl mx-auto px-6 md:px-4 py-14 md:py-20'>
                <div className='p-10 max-w-[420px] mx-auto bg-white rounded-xl'>
                    <form onSubmit={handleLogin} className=''>
                        <h2 className='text-center font-bold text-3xl mb-2'>Login</h2>
                        {error && <div className="alert alert-warning shadow-lg mt-4 mb-2 py-3">
                            <div>
                                <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current flex-shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" /></svg>
                                <span>{error}</span>
                            </div>
                        </div>}
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name="email" placeholder="Email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name="password" placeholder="Password" className="input input-bordered" required />
                        </div>
                        <div className="form-control mt-6">
                            <button className="bg-red-600 py-3 px-6 rounded-md text-white font-semibold text-l hover:opacity-80">Login</button>
                        </div>
                    </form>
                    <div className='text-center py-1'>-or-</div>
                    <div>
                        <div className='mb-4'>
                            <button onClick={handleGoogleLogin} className='flex justify-center items-center bg-blue-600 py-3 px-6 rounded-md text-white font-semibold text-l hover:opacity-80 w-full'><FaGoogle className='mt-1 mr-2'></FaGoogle> <span>Login with Google</span></button>
                        </div>
                        <div>
                            <button onClick={handleGithubLogin} className='flex justify-center items-center bg-gray-900 py-3 px-6 rounded-md text-white font-semibold text-l hover:opacity-80 w-full'><FaGithub className='mt-1 mr-2'></FaGithub> <span>Login with Github</span></button>
                        </div>
                        <div className='text-center mt-4'>
                            <small className='mt-2'>Don't Have Account? <Link className='text-blue-500 underline' to="/register">Register</Link></small>
                        </div>
                    </div>
                </div>
            </div>
            <ToastContainer position="bottom-left"
                autoClose={2000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover={true}
                theme="light">
            </ToastContainer>
        </div>
    );
};

export default Login;