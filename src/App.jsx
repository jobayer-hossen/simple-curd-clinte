
import './App.css'

function App() {
  
  const handleSubmit = event =>{
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const user = {name,email}

    fetch('http://localhost:5000/user' ,{
      method :'POST',
      headers :{
        'content-type' : 'application/json'
      },
      body: JSON.stringify(user)
    })
    .then(res => res.json())
    .then(data => {
      
      console.log(data)
    })
  }

  return (
    <>
      <h1>Simple Curd</h1>

      <form onSubmit={handleSubmit}>
      <input type="text" name='name' /><br/>
      <input type="text" name='email' />
      <br/>
      <input type="submit" value='add user' />
      </form>
     
      
    </>
  )
}

export default App
