import React from "react";
import TrashDelete from "../assets/trash-delete.svg";
import Button from "react-bootstrap/Button";
import { Contact } from "../interfaces/interfaces";
import Avatar from "../assets/person-circle.svg";
interface ContactCardProps {
  contact: Contact;
  openConfirmationModal: React.Dispatch<React.SetStateAction<boolean>>;
  openEditingModal: React.Dispatch<React.SetStateAction<boolean>>;
  assignedKey: number;
}

const ContactCard: React.FC<ContactCardProps> = ({
  contact,
  assignedKey,
  openConfirmationModal,
  openEditingModal,
}) => {
  contact.id = assignedKey;
  return contact ? (
    <tr onClick={() => openEditingModal(true)}>
      <td scope="row">
        <img src={Avatar} />
      </td>
      <td>{contact.firstName}</td>
      <td>{contact.lastName}</td>
      <td>{contact.email}</td>
      <td>{contact.additionalInfo}</td>
      <td className="w-auto">
        <div className="bg-info rounded-circle" />
        <Button
          variant="primary"
          onClick={(e) => {
            e.stopPropagation(), openConfirmationModal(false);
          }}
        >
          <img src={TrashDelete}></img>
        </Button>
      </td>
    </tr>
  ) : (
    <h1>
      NO contacts yet <Button>Click me</Button> to start adding
    </h1>
  );
};

export default ContactCard;
