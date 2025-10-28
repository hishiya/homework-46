import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchTodos } from "../redux/asyncActions/fetchData";

const ExampleComponent = () => {
    const dispatch = useDispatch();

    const { data, status, error } = useSelector((state) => state.todos);

    useEffect(() => {
        dispatch(fetchTodos());
    }, [dispatch]);

    if (status === 'loading') {
        return <div>Loading...</div>
    }

    if (status === 'failed') {
        return <div>Error: {error}</div>
    }

    return (
        <div>
            <h1>Todos List</h1>
            <ul>
                {data.map((todo) => (
                    <li key={todo.id}>{todo.title}</li>
                ))}
            </ul>
        </div>
    )

    }

    export default ExampleComponent;


    


