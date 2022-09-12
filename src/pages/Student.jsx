import {XCircle, Edit} from 'react-feather'
import { Link } from 'react-router-dom'
import EditStudent from '../components/EditStudent'

const Student = ({ student, onDelete }) => {
  return (
    <>
      <tr className="">
        <td>
          <div className="flex items-center justify-center space-x-3">
            <div>
              <div className="font-medium">{student.name}</div>
            </div>
          </div>
        </td>
        <td>
          {student.email}
        </td>
        <td>
          {student.batch}
        </td>
        <td>
          {student.tech}
        </td>
        <td>{student.location}</td>
        <th>
          <Link className="btn btn-circle btn-success" to='/updatestudent' >
            <Edit onClick={() => <EditStudent />}/>
          </Link>
        </th>
        <th>
          <button className="btn btn-circle btn-error" onClick={() => onDelete(student.id)}>
            <XCircle />
          </button>
        </th>    
      </tr>
    </>
  )
}

export default Student