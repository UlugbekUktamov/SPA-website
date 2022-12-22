import { Route, Switch } from "react-router-dom"
import Footer from "./Components/Footer"
import Navbar from "./Components/Navbar"
import Home from "./pages/Home"
import About from "./pages/About"
import Contact from "./pages/Contact"
import NotFound from "./pages/NotFound"
import Category from "./pages/Category"
import Recipe from "./pages/Recipe"
import "./App.css"

function App() {
    return (
        <div className="App">
            <Navbar />
            <main className="container content">
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route path="/about" component={About} />
                    <Route path="/contacts" component={Contact} />
                    <Route path="/category/:name" component={Category} />
                    <Route path="/meal/:id" component={Recipe} />
                    <Route component={NotFound} />
                </Switch>
            </main>
            <Footer />
        </div>
    );
}

export default App
