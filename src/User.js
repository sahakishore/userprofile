import { Link } from 'react-router-dom';
import { Card } from 'react-bootstrap';

const User = ({ user }) => {
  return (
    <Card className='my-3 p-3 rounded'>
      <Link to={`/user/${user.id}`}>
        <Card.Img src={user.avatar} variant='top' />
      </Link>

      <Card.Body>
       <Link to={`/user/${user.id}`}>
          <Card.Title as='div'>
          <strong>{user.first_name} </strong>
          <strong>{user.last_name}</strong>
          </Card.Title>
       </Link>

        
          <Card.Title as='div'>
            <strong>Email: {user.email}</strong>
          </Card.Title>
        

      </Card.Body>
    </Card>
  )
}

export default User;
