import React,{Component} from 'react';
import axios from 'axios';
import Swal from 'sweetalert2'
import {Link} from 'react-router-dom';

class Register extends Component{

    constructor(props) {
        super(props);

        this.state = {
            visible: false,
            full_name:'',
            gender: '',
            date_of_birth:'',
            email: '',
            password:''
        };

        this.onFormSubmit= this.onFormSubmit.bind(this);
        this.onValueChange = this.onValueChange.bind(this);
        this.onDismiss = this.onDismiss.bind(this);
    }

    onDismiss() {
        this.setState({ visible: false });
    }

    onValueChange(e){
        this.setState({
            [e.target.name]:e.target.value
        })
    }

    onFormSubmit(e){
        e.preventDefault();

        const full_name = this.state.full_name;
        const gender = this.state.gender;
        const date_of_birth = this.state.date_of_birth;
        const email = this.state.email;
        const password = this.state.password;


        const users={
            full_name,
            gender,
            date_of_birth,
            email,
            password
        }

        axios.post('http://localhost:8081/addusers',users)
            .then(
                (res)=>{
                    this.setState({
                        visible:true,
                        full_name:'',
                        gender: '',
                        date_of_birth: '',
                        email: '',
                        password:''

                    });

                    Swal.fire(
                        'Done',
                        'New User Added!',
                        'success'
                        )

                    this.props.history.push('/login');

                },
                (err)=>{
                    Swal.fire({
                        type: 'error',
                        title: 'Oops...',
                        text: 'Something went wrong!',
                        footer: '<a href>Why do I have this issue?</a>'
                      })
                }

            )

    }
    render(){
        return(
            <div className="container" style={{marginTop:'20px'}}>
                <main role="main" style={{marginTop:'40px'}}>
                    <section className="jumbotron text-center" >
                        <div className="container">
                                <div className="col-md-12 text-center">
                                <h2 className="pb-4">Register here!</h2>
                                <center>
                                    <form onSubmit={this.onFormSubmit}>
                                        <div className="col-lg-6 col-md-6 form-group">
                                            <label>Full name</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                name="full_name"
                                                placeholder="full_name"
                                                onChange={this.onValueChange}
                                                value={this.state.full_name}/>
                                        </div>

                                        <div className="col-lg-6 col-md-6 form-group">
                                            <label >Gender</label>
                                            <textarea
                                                    className="form-control"
                                                    name="gender"
                                                    placeholder="gender"
                                                    onChange={this.onValueChange}
                                                    value={this.state.gender}/>
                                        </div>


                                        <div className="col-lg-6 col-md-6 form-group">
                                            <label >Date Of Birth</label>
                                            <input
                                                    type="date"
                                                    className="form-control"
                                                    name="date_of_birth"
                                                    placeholder="Date_of_birth"
                                                    onChange={this.onValueChange}
                                                    value={this.state.date_of_birth}/>
                                        </div>
                                           <div className="col-lg-6 col-md-6 form-group">
                                            <label >Password</label>
                                            <input
                                                    type="password"
                                                    className="form-control"
                                                    name="password"
                                                    placeholder="password"
                                                    onChange={this.onValueChange}
                                                    value={this.state.password}/>
                                        </div>
                                           <div className="col-lg-6 col-md-6 form-group">
                                            <label >E-mail</label>
                                            <input
                                                    type="email"
                                                    className="form-control"
                                                    name="email"
                                                    rows="2"
                                                    placeholder="email"
                                                    onChange={this.onValueChange}
                                                    value={this.state.email}/>
                                        </div>

                                    <div className="form-group text-center">
                                        <button type="submit"className="admin-blue-button">Register</button>
                                    </div>
                                    </form>
                                    </center>
                            </div>
                            </div>

                    </section>
                </main>
            </div>
        );
    }
}

export default  Register ;