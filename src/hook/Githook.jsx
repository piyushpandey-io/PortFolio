import { useState, useEffect } from 'react'

function Git() {
    const [data, setData] = useState(null)

    useEffect(() => {
        fetch('https://api.github.com/users/piyushpandey-io')
            .then((res) => res.json())
            .then((json) => setData(json))
            .catch((err) => console.error('GitHub fetch error:', err))
    }, [])

    return (
        <div className='mt-5 ml-18'>
            <img src={data?.avatar_url} className="rounded-4xl " width={200} alt="GitHub avatar" />
        </div>
    )
}

export default Git
