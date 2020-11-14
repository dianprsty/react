import React, { Component } from 'react'
import Input from '../element/input'
import TextArea from '../element/textarea'
import { Redirect } from 'react-router-dom'

class AddStudent extends Component {
    constructor(props){
        super(props)
        this.state = {
            nama:"",
            motto:"",
            photo:"",
            git:"",
            redirect:false
        }
    }

    addStudent = async () => {
        const student = this.state
        await this.props.sendStudent(student)
        alert("Data siswa berhasil ditambahkan")
        this.setState({
            redirect : true
        })

    }

    render() {
        if (this.state.redirect){
            return <Redirect to='/student-list' />
        }
        return (
            <div>
                <Input
                    label="Nama Siswa:"
                    type="text"
                    name="nama"
                    inputData = {e => this.setState({[e.name]:e.value})}
                />
                <TextArea
                    label="Motto :"
                    name = "motto"
                    textArea = {e => this.setState({[e.name]:e.value})}
                />
                <Input
                    label="URL Photo:"
                    type="url"
                    name="photo"
                    inputData = {e => this.setState({[e.name]:e.value})}
                />
                <Input
                    label="URL Github:"
                    type="url"
                    name="git"
                    inputData = {e => this.setState({[e.name]:e.value})}
                />

                <button onClick ={this.addStudent}>Add Siswa</button>
            </div>
        )
    }
}

export default AddStudent
