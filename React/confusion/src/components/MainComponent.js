import React, { Component } from 'react';
import Home from './HomeComponent';
import Menu from './MenuComponent';
import DishDetail from './DishdetailComponent';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import { DISHES } from '../shared/dishes';
import { Switch, Route, Redirect } from 'react-router-dom';

class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dishes: DISHES,
            selectedDish: 0
        };
    }
    onDishSelect(dishId) {
        this.setState({ selectedDish: dishId});
    }
    render() {
        const HomePage = () => {
            return(
                <Home
                />
            );
        }
        return (
            <div>
                <Header />
                <Menu dishes={this.state.dishes} onClick={(dishId) =>
                    this.onDishSelect(dishId)} />
                <DishDetail dish={this.state.dishes.filter((dish) => dish.id ===
                    this.state.selectedDish)[0]} />
                <Footer />
                <Switch>
                    <Route path='/home' component={HomePage} />
                    <Route exact path='/menu' component={() => <Menu
                        dishes={this.state.dishes} />} />
                    <Redirect to="/home" />
                </Switch>
            </div>
        );
    }


}
export default Main;
