import React, {useState} from 'react';
import axios from "axios";
import './App.css';
import {
    Button,
    Container,
    FormControlLabel,
    FormLabel,
    Radio,
    RadioGroup,
    Snackbar,
    TextField
} from '@material-ui/core';
import {createStyles, makeStyles, Theme} from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import MuiAlert from '@material-ui/lab/Alert';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            flexGrow: 1,
        },
        paper: {
            padding: theme.spacing(2),
            textAlign: 'center',
            color: theme.palette.text.secondary,
        },
    }),
);

const App = () => {
    const classes = useStyles();
    let baseUrl = "https://dillerdata-api.herokuapp.com";
    if (process.env.NODE_ENV === "development") {
        baseUrl = "http://localhost:4000";
    }
    const [isFunny, setIsFunny] = useState<string>("");
    const [age, setAge] = useState<string>("");
    const [gender, setGender] = useState<string>("");
    const [open, setOpen] = useState<boolean>(false);
    const handleSubmit = async () => {
        const data = {
            isFunny: isFunny === "true",
            age: parseInt(age),
            gender
        };
        await axios.post(`${baseUrl}/v1/answers`, data);
        setOpen(true);
    }

    const handleSuccess = () => {

    }

    const Alert = (props: any) => {
        return <MuiAlert elevation={6} variant="filled" {...props} />;
    }

    const handleClose = () => {
        setOpen(false);
    }

    const updateFunny = (e: any) => {

        setIsFunny(e.target.value)
    }

    return (
        <Container>
            <h1>Den store Diller-undersøgelse</h1>
            <div className={classes.root}>
                <Grid container spacing={3}>
                    <Grid item xs>
                        <TextField id="standard-basic" label="Alder" value={age} onChange={(e: any) => {
                            setAge(e.target.value)
                        }}/>
                    </Grid>
                    <Grid item xs>
                        <FormLabel component="legend">Køn</FormLabel>
                        <RadioGroup aria-label="gender" name="gender1" onChange={(e: any) => setGender(e.target.value)}>
                            <FormControlLabel value="female" control={<Radio/>} checked={gender === "female"}
                                              label="Pige"/>
                            <FormControlLabel value="male" control={<Radio/>} checked={gender === "male"}
                                              label="Dreng"/>
                        </RadioGroup>
                    </Grid>
                    <Grid item xs>

                        <FormLabel component="legend">Er John Dillermand sjov?</FormLabel>
                        <RadioGroup aria-label="gender" name="gender1" value={isFunny} onChange={updateFunny}>
                            <FormControlLabel value="false" control={<Radio/>} checked={isFunny === "false"}
                                              label="Ja"/>
                            <FormControlLabel value="true" control={<Radio/>} checked={isFunny === "true"} label="Nej"/>
                        </RadioGroup>

                    </Grid>
                </Grid>

            </div>


            <br/>


            <br/>
            <Button variant="contained" color="primary" onClick={handleSubmit}>
                Indsend
            </Button>

            <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
                <Alert onClose={handleClose} severity="success">
                    Din besvarelse er modtaget - tak!
                </Alert>
            </Snackbar>

            <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
                <Alert onClose={handleClose} severity="success">
                    Din besvarelse er modtaget - tusind tak!
                </Alert>
            </Snackbar>


        </Container>)

}

export default App;
