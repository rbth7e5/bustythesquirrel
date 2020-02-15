import {Paper, TextField} from "@material-ui/core";
import React from "react";

export default function Welcome() {
    return (
        <div className="Welcome">
            <Paper className="Login">
                <h1 style={{flex: 2, padding: 32}}>Welcome</h1>
                <div className="Form">
                    <TextField label="Username"/>
                    <TextField label="Password"/>
                </div>
            </Paper>
        </div>
    )
}
