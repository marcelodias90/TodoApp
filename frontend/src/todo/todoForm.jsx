import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import Grid from "../template/grid";
import IconButton from "../template/iconButton";
import { add, changeDescription, search, clear } from "./todoActions";

class TodoForm extends Component {
    constructor(props) {
        super(props)
        this.keyHandler = this.keyHandler.bind(this)
    }

    componentWillMount() {
        this.props.search()
    }

    keyHandler(e) {
        const { add, search, description, clear } = this.props
        if (e.key === 'Enter') {
            e.shiftKey ? search() : add(description)
        } else if (e.key === 'Escape') {
            clear()
        }
    }

    render() {
        const { add, search, description, clear } = this.props
        return (
            <div role='form' className="todoForm">
                <Grid cols='12 9 10'>
                    <input id='description' className="form-control" onKeyUp={this.keyHandler}
                        placeholder="Adicione uma tarefa" onChange={this.props.changeDescription} value={this.props.description}></input>
                </Grid>
                <Grid cols='12 3 2'>
                    <IconButton btnStyle='primary' icon='plus' onClick={() => add(description)}></IconButton>
                    <IconButton btnStyle='info' icon='search' onClick={search}></IconButton>
                    <IconButton btnStyle='default' icon='close' onClick={clear}></IconButton>
                </Grid>
            </div>
        )
    }
}


const mapStateToProps = state => ({ description: state.todo.description })
const mapDispatchToProps = dispach => bindActionCreators({ add, changeDescription, search, clear }, dispach)
export default connect(mapStateToProps, mapDispatchToProps)(TodoForm)