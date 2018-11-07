import React, { Component } from 'react'
export default class UserAdd extends Component {
    handleSubmit(name) {
        console.log(name.value);
    }
    render() {
        return (
            <form onSubmit={(e) => {
                e.preventDefault()
                this.handleSubmit(this.name)
            }}>
                <div className="from-group">
                    <label htmlFor="name22">姓名</label>
                    <input type="text" className="form-control" ref={ref => this.name = ref} />
                </div>
                <div className="from-group">
                    <input type="submit" className="btn btn-primary" />
                </div>
            </form>
        )
    }

}