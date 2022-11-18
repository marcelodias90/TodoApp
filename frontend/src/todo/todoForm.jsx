import React from "react";
import Grid from "../template/grid";
import IconButton from "../template/iconButton";

export default props => (
    <div role='form' className="todoForm">
        <Grid cols='12 9 10'>
            <input id='description' className="form-control"
                placeholder="Adicione uma tarefa"onChange={props.handleChange} value={props.description}></input>
        </Grid>
        <Grid cols='12 3 2'>
            <IconButton btnStyle='primary' icon='plus'onClick={props.handleAdd}></IconButton>
            <IconButton btnStyle='info' icon='search' onClick={props.handleSearch}></IconButton>
            <IconButton btnStyle='default' icon='close' onClick={props.handleClear}></IconButton>
        </Grid>
    </div>
)