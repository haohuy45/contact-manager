import React, { Component , useRef} from 'react';
import { Link } from 'react-router-dom';
import ContactCard from './ContactCard';

const ContactList = (props) =>{
    const inputEl = useRef('')



    const deleteContactHandler = (id) =>{
        props.getContactId(id)
    }

    const renderContactList = props.contacts.map((contact, index) => {
        return(
            <ContactCard contact={contact} clickHandler={deleteContactHandler} key={contact.id}/>
        )
    })
    const getSearchTerm = () =>{
        props.searchKeyword(inputEl.current.value)

    }
    return(
        <div className="main" style={{marginTop: "50px"}}>
            <div style={{display: "flex", justifyContent:"space-between"}}>
                <h2>Contact List</h2>
                <Link to="/add">
                    <button className="ui button blue right">Add Contact</button>
                </Link>
            </div>

            <div className="ui search">
                <div className="ui icon input">
                    <input ref={inputEl} type="text" placeholder="Search Contacts" className="prompt" value={props.term} onChange={getSearchTerm}/>
                </div>
            </div>
            <div className="ui celled list">{renderContactList.length > 0 ? renderContactList : 'No contact'}</div>
        </div>
    )
}

export default ContactList