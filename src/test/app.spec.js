import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from "react-router-dom";
import App from '../App';
import Header from '../composition/Header/Header';
import LoginForm from '../composition/LoginForm/LoginForm';
import RegistrationForm from '../composition/RegistrationForm/RegistrationForm';
import Slideshow from '../composition/Slideshow/Slideshow';
import FilterableList from '../composition/FilterableList/FilterableList';
import FilterOptions from '../composition/FilterOptions/FilterOptions';
import SearchBar from '../composition/SearchBar/SearchBar';
import SearchBox from '../composition/SearchBox/SearchBox';
import ListItem from '../composition/ListItem/ListItem';
import NewTripForm from '../composition/NewTripForm/NewTripForm';
import LoginPage from '../routes/LoginPage/LoginPage';
import MoreInfo from '../routes/MoreInfo/MoreInfo';
import NewTripPage from '../routes/NewTripPage/NewTripPage';
import NotFoundPage from '../routes/NotFoundPage/NotFoundPage';
import RegistrationPage from '../routes/RegistrationPage/RegistrationPage';
import SearchPage from '../routes/SearchPage/SearchPage';
import WelcomeMessage from '../routes/WelcomeMessage/WelcomeMessage';


it('App component renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<BrowserRouter><App /></BrowserRouter>, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('Header component renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<BrowserRouter><Header /></BrowserRouter>, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('LoginForm component renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<LoginForm />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('RegistrationForm component renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<RegistrationForm />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('Slideshow component renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Slideshow />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('FilterableList component renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<FilterableList />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('FilterOptions component renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<FilterOptions />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('SearchBar component renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<SearchBar />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('SearchBox component renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<SearchBox />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('ListItem component renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<ListItem />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('NewTripForm component renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<NewTripForm />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('LoginPage component renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<BrowserRouter><LoginPage /></BrowserRouter>, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('MoreInfo component renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<BrowserRouter><MoreInfo /></BrowserRouter>, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('NewTripPage component renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<BrowserRouter><NewTripPage /></BrowserRouter>, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('NotFoundPage component renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<BrowserRouter><NotFoundPage /></BrowserRouter>, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('RegistrationPage component renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<BrowserRouter><RegistrationPage /></BrowserRouter>, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('SearchPage component renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<BrowserRouter><SearchPage /></BrowserRouter>, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('WelcomeMessage component renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<BrowserRouter><WelcomeMessage /></BrowserRouter>, div);
  ReactDOM.unmountComponentAtNode(div);
});