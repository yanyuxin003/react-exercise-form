import React, {Component} from 'react';
import './myProfile.less';

class MyProfile extends Component {
 state = {
   name : '',
   gender : '',
   descrption : '',
   readed :''
 }
 handleChange = (event) =>{
   this.setState({
       [event.target.name]:event.target.value
   })
 }
 
 handleSubmit=(event)=>{
   event.preventDefault();
   //call api
   console.log(JSON.stringify(this.state))
 }
  render() {
    return (
      
      <form onSubmit={this.handleSubmit}>
      <h1>My Profile</h1>
      <label for="Name" class="label">Name<br/>
      <input type="text" class="input" name="name" value={this.state.name} onChange={this.handleChange}/>
      </label><br/>
	    
      <label for="Gender" class="label">
        Gender<br/>
      <select name="gender" value={this.state.gender} onChange={this.handleChange}>
        <option value="male">male</option>
        <option value="female">female</option>
      </select>
      </label><br/>
      
      <label for="Descrption">
        Descrption<br/>
      <textarea rows="10" cols="30" name="descrption" value={this.state.descrption} onChange={this.handleChange}>
          Descrption about yourself
      </textarea>
      </label>
      <br/>

      <div>
          <input
            name="readed"
            type="checkbox"
            checked={this.state.readed}
            onChange={this.handleChange} />
            I have read the terms of conduct
        </div>
      <br/>

       <input  
        class="submit" 
        type="submit" 
        value="submit"
        // 当disabled中this.state.name不为空
        disabled={!this.state.name || !this.state.gender || !this.state.descrption || !this.state.readed}/>
      </form>
    );
  }
}

export default MyProfile;


