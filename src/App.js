import { Container, CssBaseline } from "@material-ui/core";
import { ThemeProvider } from "@material-ui/core/styles";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import theme from "./theme";
import Students from "./components/students/students";
import Student from "./components/students/student";
import AddStudent from "./components/students/addstudent";
import EditStudent from "./components/students/editstudent";

function App() {
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Container>
          <Switch>
            <Route exact path="/" component={Students} />
            <Route exact path="/students/create" component={AddStudent} />
            <Route exact path="/students/:id" component={Student} />
            <Route exact path="/students/:id/edit" component={EditStudent} />
          </Switch>
        </Container>
      </ThemeProvider>
    </Router>
  );
}

export default App;
