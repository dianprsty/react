import React, { Component } from 'react'
import { connect } from 'react-redux';
import { Switch, Route, Link } from "react-router-dom"
import { Login, AddStudent, Home } from "../../pages"

const mapStateToProps = (state) => ({
    statusLogin: state.auth.isLogin
})

class Content extends Component {
    constructor(props) {
        super(props);
        this.state = {
            studentList:[
                {
                    nama:"Shirleen Adriana",
                    motto:"Mengajar adalah cara terbaik untuk belajar",
                    photo:"https://lh3.googleusercontent.com/q5HKjY6JCKLOiW1pKLAy6mS996Q7LH85yYegDzwtl0MF7Ww7ibvJ9_IcL8k_ih2qDkGmT8LxgNJHptPG-NnU=w1366-h624",
                    git:"https://github.com/shirahub"
                },
                {
                    nama:"ASEP AGUS HERI HERMAWAN",
                    motto:"he who didn't taste the bitterness of learning, will suffer the humiliation of ignorance for the rest of his life.",
                    photo:"https://lh6.googleusercontent.com/3rh11_Bso3wjfNRGwRFg-uBoOT-pWuzxQdVq20WVQ8jHFPdCaZ8Tl5ZTgXRLCWR6P8fJV7cTlWIEPpM3T-zy=w1960-h1474-rw",
                    git:"https://github.com/asep10001"
                },
                {
                    nama:"Pramadhio Ari Putro",
                    motto:"Khawatir adalah penyalahgunaan sebuah imajinasi",
                    photo:"https://ch3302files.storage.live.com/y4mTOb_Bl_YvpEqNpOjzzQMeW_eJczDkB9VEL1ZE8WFNz_8CBCrlXHBN7DRQP9B-J6_6ukSVoTQbGmt5tANZnlhVSMWv6Tmwn8IbpAazolGGZJoHcf1uGvVyr9OXn7y5HdkV9Jg6RlM1kPUVrzTeE9ThRqE5eYeuLDKUQNesMlfXC8ALsL3uHLv2-3Za263na4lPEBieqqX1t_WakSvtS_L0Q/pas%20foto%20%28merah%3Bno%20glasses%29.jpg?psid=1&width=675&height=1012",
                    git:"https://github.com/dhioputro"
                },
                {
                    nama:"Rifki Harbi Awali",
                    motto:"Basthotan Fil Ilmi Wal Jismi",
                    photo:"https://lh4.googleusercontent.com/BMy0pkCAyXqqzp4tVyH3lGeKfQrWeIQP7de2UZN7-dyBFTMWO8HyzGirl36zfdjZ65StWTsJv0vnrxFn54ub=w1960-h1474-rw",
                    git:"https://github.com/rifkiharbiawali"
                },
                {
                    nama:"Dian Prasetyo",
                    motto:"Sabar, Ikhlas, Bersyukur",
                    photo:"https://lh6.googleusercontent.com/LRZPSd_fVc-ssbICrhE4sWODP1cX62UuuhWQO0ZOb9g-PqbMdduVG-1Id6u31FXUb6kkoLub7I-PAJ6yXkq4=w1960-h1474-rw",
                    git:"https://github.com/dianprsty"
                }
            ]
        }
    }
    addStudent = (std) => {
        let listTemp = this.state.studentList
        listTemp.push(std)
        this.setState({
            studentList:listTemp
        })
        console.log(this.state.studentList)
    }

    

    // Navigation = () => {
    //     if (!this.props.isLogin) {
    //         return(
    //             <Link to="/login">
    //                 <div style={{ margin: "10px", padding: "10px 15px", border: "solid 1px gray" }}>Login</div>
    //             </Link>
    //         )
    //     }else {
    //         return(
    //             <div>
    //                 <Link to="/">
    //                     <div style={{ margin: "10px", padding: "10px 15px", border: "solid 1px gray" }}>Home</div>
    //                 </Link>
    //                 <Link to="/add-student">
    //                     <div style={{ margin: "10px", padding: "10px 15px", border: "solid 1px gray" }}>Register</div>
    //                 </Link>
    //             </div>
    //         )
    //     }
    // }

    render() {
        return (
            <div>
                <div style={{ display: "flex", justifyContent: "flex-start" }}>
                    <Link to="/">
                        <div style={{ margin: "10px", padding: "10px 15px", border: "solid 1px gray" }}>Home</div>
                    </Link>
                    <Link to="/login">
                        <div style={{ margin: "10px", padding: "10px 15px", border: "solid 1px gray" }}>Login</div>
                    </Link>
                    <Link to="/add-student">
                        <div style={{ margin: "10px", padding: "10px 15px", border: "solid 1px gray" }}>Register</div>
                    </Link>
                    {/* {this.Navigation} */}
                </div>

                <Switch>
                    <Route exact path="/" component={Home} >
                        <Home student = {this.state.studentList}/>
                    </Route>
                    <Route path="/login" component={Login} />
                    <Route  path="/add-student" component={AddStudent}/>
                </Switch>
            </div>
        );
    }
}

export default connect(mapStateToProps)(Content);