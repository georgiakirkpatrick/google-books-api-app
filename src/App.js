import React, { Component } from 'react';
import './App.css';
import SearchForm from './SearchForm/SearchForm';
import BookList from './BookList/BookList';
 
export class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            searchTerm: '',
            printType: '',
            bookType: ''
        }
    }

    componentDidMount() {
        const apiUrl = `https://www.googleapis.com/books/v1/volumes?q={this.state.searchTerm}&printType={this.state.printType}&filter={this.state.bookType}&key=AIzaSyCZeGtWQiK6Umx_z6gQoOG-ZkgOw8Eq0ZM`
    }

    render() {
        return (
            <main className='app'>
                <h1 className='app-title'>Google Book Search</h1>
                <SearchForm />
                <BookList />
            </main>
        )
    }
}