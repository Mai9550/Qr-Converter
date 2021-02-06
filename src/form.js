import React from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';

class Form extends React.Component{
  
  constructor(props) {
	super(props);
	this.state = {
  	photoData:'',
  	email: ''
  }
  
  }
  handle(e){
    e.preventDefault();
    console.log(this.state.email);
    const qrUrl=this.props.qrUrl;
    console.log(this.props.qrUrl);
    console.log(qrUrl);
  this.sendToServer(this.state.email,qrUrl)
  
   
  }
  sendToServer(email,link){
    axios({method: "POST", 
    url:"http://localhost:3001/api/sendMail", 
    data: {link:link,email:"mai.sa2sa2@gmail.com"
  }}).then((response)=>{
    if (response.data.status === 'success'){
      alert("Message Sent."); 
      this.resetForm()
    }else if(response.data.status === 'fail'){
      alert("Message failed to send.")
    }
  })
  }
  
  
  



  
  
  
  render() {
    
  
     return(
  	<div className="App">
  	<form id="contact-form"   >
  	
      	
  	<div className="form-group">
      	<label htmlFor="exampleInputEmail1">Email address</label>
        <input type="email" className="form-control" id="email" aria-describedby="emailHelp" value={this.state.email} onChange={this.onEmailChange.bind(this)}  />
  	</div>
  	<Button onClick={this.handle.bind(this)}>submit</Button>
  	
  	</form>
  	</div>
   );

 }
 onEmailChange(event) {
	this.setState({email: event.target.value})
  }
}




export default Form;