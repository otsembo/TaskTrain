import { useNavigate } from "react-router-dom";
import { isUserLoggedIn } from "../utils/auth";

const Todos = (): JSX.Element => {

    const navigate = useNavigate();
    !isUserLoggedIn() && navigate('/');
    

    const todos = [];

    return (
        <div className="row mx-5">
            <div className="col-8">
                <table className="table table-striped-columns table-striped">
                    <thead>
                        <tr className="table-primary">
                            <th>#</th>
                            <th>Title</th>
                            <th>Description</th>
                            <th>Status</th>
                            <th>Priority</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        { todos.length <= 0 ? 
                        
                        <tr>
                            <td colSpan={6}>
                                <div className="py-5 d-flex justify-content-center">
                                    <h1>You do not have any tasks right now.</h1>
                                </div>
                            </td>
                        </tr>
                         :

                        <></> 
                        }
                    </tbody>
                </table>
            </div>
            <div className="col-4 px-4 card py-5">
                <div className="mb-2 card-title">
                    <h1>Add Todo</h1>
                </div>
                <form className="card-body">
                    <div className="mb-3">
                        <label htmlFor="title" className="form-label">Title</label>
                        <input type="text" className="form-control" id="title"/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="description" className="form-label">Description</label>
                        <textarea className="form-control" id="description" rows={3}></textarea>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="status" className="form-label">Status</label>
                        <select className="form-select" id="status">
                            <option value="0">CREATED</option>
                            <option value="1">IN PROGRESS</option>
                            <option value="2">COMPLETED</option>
                            <option value="3">CANCELLED</option>
                        </select>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="priority" className="form-label">Priority</label>
                        <select className="form-select" id="priority">
                            <option value="0">LOW</option>
                            <option value="1">MEDIUM</option>
                            <option value="2">HIGH</option>
                        </select>
                    </div>
                    <button type="submit" className="btn btn-success">ADD</button>
                </form>
            </div>
        </div>
    )
}

export default Todos;