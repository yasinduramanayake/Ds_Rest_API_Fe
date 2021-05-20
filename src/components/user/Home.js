import React, {Component} from 'react'
import axios from "axios";
import Swal from "sweetalert2";
import { Button } from 'reactstrap';
import {Link} from 'react-router-dom';

export default class Home extends Component {
    constructor(props) {
        super(props);

        this.state = {
            post: []
        }
        this.onDelete=this.onDelete.bind(this);
    }

    componentDidMount() {
        axios.get('http://localhost:4000/post/all')
            .then(response => {
                this.setState({
                    post: response.data.data,
                });
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    componentDidUpdate() {
        axios.get('http://localhost:4000/post/all')
            .then(response => {
                this.setState({
                    post: response.data.data,
                });
            })
            .catch(function (error) {
                console.log(error);
            });
    }
    logout() {
        localStorage.clear();
        window.location.href="/login"
    }

    onDelete(){
        axios.get('http://localhost:4000/editor/conference/delete/'+this.state.conference._id)
            .then(
                res => {
                    Swal.fire(
                        'Done',
                        'Conference Removed !',
                        'success'
                        )
                }
            )
    }
    render() {
        return (
            <div>


                <div className="conference text-center">
                    <h3>Up comming Conferences</h3>
                </div>
                 <div className="conference text-right">
                   <Button onClick={this.logout}>Log out</Button>
                    </div>


                {
                    this.state.post.map((post) => {
                        if (post.status === true && post.conference!=null)
                            return (
                                <div class="topic-listing col-md-12">
                                    <div class="topic-info">
                                        <div class="single_plan__block mb-30">
                                            <div class="plan-content-box plan-content-box__wight__bg">
                                                <div class="topic-date">
                                                    <h3 classname="plan-content-box1"><span>Event Date | {post.conference.startdate}</span></h3>
                                                </div>
                                                    <h4 className="plan-content-box2"><Link to={'/conferences/'+post.conference.name}>{post.conference.name}</Link></h4>
                                                <ul>
                                                    <li> <i class="fa fa-map-marker" aria-hidden="true"></i>{post.conference.venue}</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            );
                        else
                            return null;
                    })
                }
            </div>
        );
    }
}