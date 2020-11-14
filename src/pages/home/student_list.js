import React, { Component } from 'react'
import { connect } from 'react-redux';
import {Card,Button} from 'react-bootstrap'
import { Redirect } from 'react-router-dom'

const mapStateToProps = (state) => ({
    statusLogin: state.auth.isLogin
})

class Home extends Component {
    constructor(props){
        super(props)
        this.state = {
            studentList:[]
        }
    }
    
    
    render() {
        if (!this.props.statusLogin) {return <Redirect to='/login' /> } 

        return (
            <div>
            
            <div style={{display:'inline-block'}}>
               
                {
                    this.props.student.map((element,i) => {
                        return(
                            <Card key={i+1}style={{width:'18rem', marginRight:'10px', display:'inline-block'}}>
                                <Card.Img variant="top" style={{height:'20rem'}} src={element.photo} />
                                <Card.Body>
                                    <Card.Title style={{height:'3rem'}}>{element.nama}</Card.Title>
                                    <Card.Text style={{height:'9rem'}}>
                                        {element.motto}
                                    </Card.Text>
                                    <Button variant="primary"><a style={{color:"black"}}href={element.git} target="blank">Git</a></Button>
                                </Card.Body>
                            </Card>
                        )
                    })
                }
            </div>
            {/* <div style={{display:'inline-block'}}>
                {
                    this.props.student.map((element,i) => {
                        return(
                            <Card key={i+7}style={{width:'18rem', marginRight:'10px', display:'inline-block'}}>
                                <Card.Img variant="top" style={{height:'9rem'}} src='./react' />
                                <Card.Body>
                                    <Card.Title style={{height:'3rem'}}>{element.nama}</Card.Title>
                                    <Card.Text style={{height:'9rem'}}>
                                        {element.motto}
                                    </Card.Text>
                                    <Button variant="primary"><a href={element.git} target="blank">Git</a></Button>
                                </Card.Body>
                            </Card>
                        )
                    })
                }
            </div> */}
            </div>
        )
    }
}

export default connect(mapStateToProps)(Home)