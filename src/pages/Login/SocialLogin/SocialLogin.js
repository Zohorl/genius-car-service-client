import React from 'react';
import google from '../../../images/Social/Google-icon.png';
import facebook from '../../../images/Social/facebook.png';
import github from '../../../images/Social/github.png';
import { useSignInWithGithub, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import { useLocation, useNavigate } from 'react-router-dom';
import Loading from '../../Shared/Loading/Loading';
import useToken from '../../../hooks/useToken';

const SocialLogin = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const [signInWithGithub, user1, loading1, error1] = useSignInWithGithub(auth);
    const [token] = useToken(user || user1);

    const location = useLocation();
    let from = location.state?.from?.pathname || "/";

    const navigate = useNavigate();

    if (loading || loading1) {
        return <Loading></Loading>
    }

    let errorElement;
    if (error || error1) {
        errorElement = <p className='text-danger'>Error: {error?.message} {error1?.message}</p>
    }
    if (token) {
        navigate(from, { replace: true });
    }

    return (
        <div>
            <div className='d-flex align-items-center'>
                <div style={{ height: '1px' }} className='bg-secondary w-50'></div>
                <p className='mt-2 mx-2'>or</p>
                <div style={{ height: '1px' }} className='bg-secondary w-50'></div>
            </div>
            {errorElement}
            <div>
                <button
                    onClick={() => signInWithGoogle()}
                    className='btn btn-info d-block mx-auto my-2 px-4'>
                    <img style={{ height: '25px' }} src={google} alt="" />
                    <span className='px-2'>Google Sign In</span>
                </button>
                <button

                    className='btn btn-info d-block mx-auto my-2 px-3'>
                    <img style={{ height: '25px' }} src={facebook} alt="" />
                    <span className='px-2'>Facebook Sign In</span>
                </button>
                <button
                    onClick={() => signInWithGithub()}
                    className='btn btn-info d-block mx-auto px-4'>
                    <img style={{ height: '25px' }} src={github} alt="" />
                    <span className='px-2'>Github Sign In</span>
                </button>
            </div>
        </div>
    );
};

export default SocialLogin;