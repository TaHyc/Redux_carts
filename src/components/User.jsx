import { useActions } from '../redux/hooks/useActions'
import { useSelector } from 'react-redux'


export default function User() {

const {isLoading, error, user}=useSelector(state=>state.user)

  const {getUsersById} = useActions()


  return (
    <div>
    <button onClick={()=>getUsersById(1)}>
        Get user
    </button>
        {isLoading ? (
        <div>Loading...</div>
        ): error ? ( 
        <div>{error.message}</div> 
        ): user ? (
        <h1>User: {user.name}</h1>
        ):
        ( <h1>User not found</h1> )
    }   
    </div>
  );
}

