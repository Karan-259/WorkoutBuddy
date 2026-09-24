import React, { useEffect, useState } from 'react'
import WorkoutDetails from '../Components/WorkoutDetails'
import WorkoutForm from '../Components/WorkoutForm'
import { useWorkoutsContext } from '../Hooks/useWorkoutsContext'

const Home = () => {

    const {workouts, dispatch} = useWorkoutsContext()
    // const [workouts, setWorkouts] = useState()

    const fetchWorkouts = async () => {
        const response = await fetch('http://localhost:4000/api/workouts/')
        const json = await response.json()

        if(response.ok){
            //use State
            // setWorkouts(json)
            dispatch({type: 'SET_WORKOUTS', payload: json})
        }
    }

    useEffect(() => {
        fetchWorkouts();
    }, [dispatch])

    return (
        <div className='home'>
            <div className='workouts'>
                {
                    workouts && workouts.map((workout)=>(
                        <WorkoutDetails key={workout._id} workout={workout}/>
                    ))
                }
            </div>

            <WorkoutForm/>
        </div>
    )
}

export default Home