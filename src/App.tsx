import React, {useState} from 'react';
import axios from "axios";
import './App.css';
import {Button, Container, FormControlLabel, FormLabel, Radio, RadioGroup, Switch, TextField} from '@material-ui/core';

const App = () => {
    let baseUrl = "https://dillerdata-api.herokuapp.com";
    if(process.env.NODE_ENV === "development") {
        baseUrl = "http://localhost:4000";
    }
    const [isFunny, setIsFunny] = useState<boolean>(false);
    const [age, setAge]= useState<string>("");
    const [gender, setGender] = useState<string>("");

    const handleSubmit = async () => {
        const data = {isFunny, age, gender};
        await axios.post(`${baseUrl}/v1/answers`, data);

    }

    return (
        <Container>


            <h1>Den store Dillerdaller-undersøgelse</h1>
            <TextField id="standard-basic" label="Alder" value={age} onChange={(e: any) =>  {setAge(e.target.value)}} />

            <FormLabel component="legend">Køn</FormLabel>
            <RadioGroup aria-label="gender" name="gender1" value={age} onChange={(e:any) => setGender(e.target.value)}>
                <FormControlLabel value="female" control={<Radio/>} checked={gender === "female"} label="Female"/>
                <FormControlLabel value="male" control={<Radio/>} checked={gender === "male"} label="Male"/>

            </RadioGroup>


            <FormControlLabel
                control={<Switch size="small" checked={isFunny} onChange={() => {setIsFunny((old) => !old)}}/>}
                label="Er John sjov?"
            />

            <br />
            <Button variant="contained" color="primary" onClick={handleSubmit}>
                Indsend
            </Button>
        </Container>)

}

export default App;
