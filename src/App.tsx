import React, {useState} from 'react';
import './App.css';
import {Button, Container, FormControlLabel, FormLabel, Radio, RadioGroup, Switch, TextField} from '@material-ui/core';



function App() {
    const {checked, setChecked} = useState(false);
    const {isFunny, setIsFunny } = useState(false);
    const {age, setAge}= useState();

    var handleChange = function () {


    }
    var toggleChecked = () => {
        setIsFunny(true);
    }

    return (
        <Container>


            <h1>Den store Dillerdaller-undersøgelse</h1>
            <TextField id="standard-basic" label="Alder"/>

            <FormLabel component="legend">Køn</FormLabel>
            <RadioGroup aria-label="gender" name="gender1" value={age} onChange={handleChange}>
                <FormControlLabel value="female" control={<Radio/>} label="Female"/>
                <FormControlLabel value="male" control={<Radio/>} label="Male"/>

            </RadioGroup>


            <FormControlLabel
                control={<Switch size="small" checked={checked} onChange={toggleChecked}/>}
                label="Er John sjov?"
            />
            <Button variant="contained" color="primary">
                Indsend
            </Button>
        </Container>)

}

export default App;
