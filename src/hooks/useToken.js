import axios from 'axios';
import React, { useEffect, useState } from 'react';

const useToken = user => {
    const [token, setToken] = useState('');
    useEffect(() => {
        const getToken = async () => {
            console.log(user);
            const email = user?.user?.email;

            const { data } = await axios.post('https://nameless-wildwood-86783.herokuapp.com/login', { email });
            setToken(data.accessToken);
            localStorage.setItem('accessToken', data.accessToken);
        }
        getToken();
    }, [user]);
    return [token];
};

export default useToken;