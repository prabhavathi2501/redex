import { Form}from 'react-bootstrap'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useSelector,useDispatch } from 'react-redux'

function App() {
  let todo = useSelector((state)=>state.todo)
  console.log(todo)
 return<>
 <div className='container-fluid'>
  <div className='row'>
    <div className='col-2'>
      <h1>Notes App</h1>
    <br/>
    <h3>Notes</h3>
    </div>
    <div className='col-10'>
 <div className='bg-light  mx-8 mt-3 mb-2 static-top shadow py-2 px-3 border-radius:4px'>

 <Form.Group className="mb-3 ">
    <h1 className='text-muted'>Add a Notes</h1>
                <Form.Label><h2 className='text-muted'>Title</h2></Form.Label>
                <Form.Control type="text"  placeholder=" Enter your Title" onChange={(e)=>setTask(e.target.value)} />
               </Form.Group>
    
              <Form.Group className="mb-3">
                <Form.Label><h2 className='text-muted'>Take a Notes</h2></Form.Label>
                <Form.Control type="text"  placeholder="Enter your Notes"onChange={(e)=>setDiscription(e.target.value)} />
              </Form.Group>
              <Button variant="primary" type='submit'>clcik</Button>
  
</div>
<h3>My Notes</h3>
  <p> Recently Viewed</p>
  <div className='bg-blue  mx-9 mt-3 mb-2  shadow py-2 px-3' style={{display:"flex"}}>
    <div className='mx-2 mt-2 mb-2 shadow py-2 border-radius:4px'>
  <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title>FeedBacks  <i className="fa-solid fa-pen p-3" style={{color:"#19191a"}}></i><i className="fa-solid fa-trash-can" style={{color: "#111212;"}}></i></Card.Title>
       
        <Card.Text>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Blanditiis error quisquam itaque ea soluta? Non quis ex sint animi unde tempore obcaecati, soluta hic vero culpa incidunt quod ea quia.
        </Card.Text>
       <p> 5 days ago</p>
      </Card.Body>
    </Card>
    </div>
  {/* <div className='bg-light  mx-8 mt-3 mb-2  shadow py-5 px-3' style={{display:"flex"}}> */}
  <div className='mx-2 mt-2 mb-2 shadow py-2 border-radius:8px'>
  <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title>Weekly Task <i className="fa-solid fa-pen p-3" style={{color:"#19191a"}}></i><i className="fa-solid fa-trash-can" style={{color: "#111212;"}}></i></Card.Title>
       
        <Card.Text>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Blanditiis error quisquam itaque ea soluta? Non quis ex sint animi unde tempore obcaecati, soluta hic vero culpa incidunt quod ea quia.
        </Card.Text>
       <p>2 weeks ago</p>
      </Card.Body>
    </Card>
    </div>
    <div className='mx-2 mt-2 mb-2 shadow py-2'>
    <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title>Lyrics<i className="fa-solid fa-pen p-3" style={{color:"#19191a"}}></i><i className="fa-solid fa-trash-can" style={{color: "#111212;"}}></i></Card.Title>
        
        <Card.Text>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Blanditiis error quisquam itaque ea soluta? Non quis ex sint animi unde tempore obcaecati, soluta hic vero culpa incidunt quod ea quia.
        </Card.Text>
       <p>3 weeks ago</p>
      </Card.Body>
    </Card>
    </div>
    </div>

 </div>
</div>
  </div>
  </>
   
}
    
export default App
