import React, { useState, useEffect } from 'react';
import { Watch } from 'react-loader-spinner';
import axios from 'axios';
import Buttons from './Buttons';

function Users() {
    const [users, setUsers] = useState([]);
    const [toggleBtn, setToggleBtn] = useState(true);
    const [Loading, setLoading] = useState(true);
    const [inpt, setInpt] = useState('');
    const [offset, setOffset] = useState(0);
    let limit = 2;
    function callingApi() {
        setLoading(true)
        axios.get(`https://jsonplaceholder.typicode.com/users?_start=${offset}&_limit=${limit}`)
            .then((res) => {
                // console.log(res.data.length)
                setUsers(res.data)
                setLoading(false)

            })
            .catch((err) => {
                console.log('error is ', err)
            })
    }
    console.log(users.length)

    function handleClick() {
        let btn = document.querySelector('#btn');
        if (toggleBtn) {
            setToggleBtn(false);
            btn.innerText = 'toggled';
        } else {
            setToggleBtn(true);
            btn.innerText = 'toggle';

        }
    }

    function handleInput(e) {
        setInpt(e.target.value);
    }
    function noOfPages(e) {
        setOffset(e.target.value)
    }

    useEffect(() => {
        callingApi();
    }, [offset])
    return (
        <>
            <input className='inpt' type='text' placeholder='Enter Your Text...' onInput={handleInput} value={inpt} />
            <h3>{inpt}</h3>
            {Loading ? <Watch
                height="80"
                width="80"
                radius="48"
                color="#fff"
                ariaLabel="watch-loading"
                wrapperClassName="load"
                visible={Loading}
                text-align="center"
            /> :
                toggleBtn && <ul>
                    {
                        users.map((users) => {
                            return <li key={users.id} > {users.name}</li>
                        })
                    }
                </ul>}
            {/* filter Search */}
            {/* {toggleBtn && users
        .filter((user) => user.name.toLowerCase().includes(inpt.toLowerCase()))
        .map((item) => {
          return <li>{item.name}</li>;
        })} */}

            <Buttons noOfPages={noOfPages} />
            <button className='btn' id='btn' onClick={handleClick}>toggle</button>
        </>
    )
}

export default Users