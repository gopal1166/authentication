import React, { Component } from 'react';

import Person from '../components/Person/Person';
import AddPerson from '../components/AddPerson/AddPerson';
import { connect } from 'react-redux';
import * as actionTypes from '../store/actions/actionTypes';

class Persons extends Component {
    state = {
        persons: []
    }

    componentDidMount() {

      console.log("mapStateToProps;",this.props.persons)
    }



    personDeletedHandler = (personId) => {
        this.setState( ( prevState ) => {
            return { persons: prevState.persons.filter(person => person.id !== personId)}
        } );
    }

    render () {
        return (
            <div>

                <AddPerson personAdded={this.props.onAddPerson} />
                {this.props.persons.map(person => (
                    <Person
                        key={person.id}
                        name={person.name}
                        age={person.age}
                        clicked={() => this.props.onDeletePerson(person.id)}/>
                ))}
            </div>
        );
    }
}

const mapStateToProps = state => {
  return {
    persons: state.persons
  }
}

const dispatching = dispatch => {
  return {
    onAddPerson: (name, age) => dispatch( {type: actionTypes.ADD_PERSON, personData: {name: name, age: age}} ),
    onDeletePerson: (id) => dispatch( {type: actionTypes.DELETE_PERSON, personId: id} )
  }
}

export default connect(mapStateToProps, dispatching)(Persons);
