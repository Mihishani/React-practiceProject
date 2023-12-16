import React from 'react';
import Header from "./component/layout/header.tsx"
import Footer from "./component/layout/footer.tsx";
import Login from "./views/login.tsx";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./views/home.tsx";
import Signup from "./views/signup.tsx";
import Editor from "./views/editor.tsx";

class App extends React.Component<any, any> {

    state = {
        count: 0
    }

    up = () => {
        this.setState({count: this.state.count + 1})
    }

    render(): React.ReactElement<any, string | React.JSXElementConstructor<any>> | string | number | Iterable<React.ReactNode> | React.ReactPortal | boolean | any | null | undefined {
        return (
            <div>


                <BrowserRouter>
                    <Header/>
                    <Routes>
                        <Route path={"/"}element={<Home/>}/>
                        <Route path={"/Login"}element={<Login/>}/>
                        <Route path={"/Signup"}element={<Signup/>}/>
                        <Route path={"/Editor"}element={<Editor/>}/>
                    </Routes>
                    <Footer/>
                </BrowserRouter>



            </div>
        );
    }

}

export default App