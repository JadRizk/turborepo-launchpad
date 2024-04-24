import React from "react";
import { Table } from "react-bootstrap";
import ContactCard from "./ContactCard";
import { Contact } from "../interfaces/interfaces";

interface ContactTableProps {
  contacts: Contact[];
  currentPage: number;
  itemsPerPage: number;
  onClickEditRow: (contact: Contact) => void;
  onClickDeleteRow: (contact: Contact) => void;
}

const ContactTable: React.FC<ContactTableProps> = ({
  contacts,
  currentPage,
  itemsPerPage,
  onClickDeleteRow,
  onClickEditRow,
}) => {
  const startIndex = (currentPage - 1) * itemsPerPage;
  const displayedContacts = contacts.slice(
    startIndex,
    startIndex + itemsPerPage
  );

  return (
    <div className="table-responsive">
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Profile Pic</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Additional Info</th>
          </tr>
        </thead>
        <tbody>
          {displayedContacts.map((contact, index) => (
            <ContactCard
              openConfirmationModal={() => onClickDeleteRow(contact)}
              contact={contact}
              openEditingModal={() => onClickEditRow(contact)}
              assignedKey={index}
              key={index}
            />
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default ContactTable;
