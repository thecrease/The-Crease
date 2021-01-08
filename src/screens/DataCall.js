import React, { Component } from 'react';
import { getMovies } from '../data/data'
import { Table } from 'react-bootstrap'
import ProfileModal from './ProfileModal'
class DataCall extends Component {
    state = {
        movies: getMovies(),
        show: false
    }

    showProfile = (e) => {
        this.setState({ show: true })
    }
    render() {
        return (
            <React.Fragment>
                <br />
                {this.state.show && <ProfileModal />}
                <div className="container">
                    <Table striped bordered hover variant="light">
                        <tbody>
                            {this.state.movies.map(movie =>
                                <tr key={movie.title}>
                                    <td onClick={(e) => { window.location.href = '/player' }}>{movie.title}</td>
                                    <td onClick={(e) => { window.location.href = '/player' }}>{movie.title2}</td>
                                    <td onClick={(e) => { window.location.href = '/player' }}>{movie.title3}</td>
                                </tr>
                            )}
                        </tbody>
                    </Table>
                </div>

            </React.Fragment>

        );
    }
}

export default DataCall;