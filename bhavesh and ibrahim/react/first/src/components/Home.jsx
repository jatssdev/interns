import React, { useContext } from 'react'
import { mainContext } from '../App'

const Home = () => { //(props)
    let { user, skill, age, users } = useContext(mainContext)

    return (
        <div>
            <h1>Hello {user.name} | {age}</h1>
            <h3>Skill : {skill}</h3>
            {
                users.map((item, index) => {
                    return <p>{item}</p>
                })
            }

        </div>
    )
}

export default Home
