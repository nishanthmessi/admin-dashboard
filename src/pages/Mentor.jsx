import {XCircle, Edit} from 'react-feather'
import { Link } from 'react-router-dom'
import EditMentor from '../components/EditMentor'

const Mentor = ({ mentor, onDelete }) => {
  return (
    <>
      <tr className="">
        <td>
          <div className="flex items-center justify-center space-x-3">
            <div>
              <div className="font-medium">{mentor.name}</div>
            </div>
          </div>
        </td>
        <td>
          {mentor.email}
        </td>
        <td>
          {mentor.tech}
        </td>
        <td>{mentor.location}</td>
        <th>
          <Link className="btn btn-circle btn-success" to='/updatementor' >
            <Edit onClick={() => <EditMentor />}/>
          </Link>
        </th>
        <th>
          <button className="btn btn-circle btn-error" onClick={() => onDelete(mentor.id)}>
            <XCircle />
          </button>
        </th>    
      </tr>                            
    </>
  )
}

export default Mentor