import React from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import { Contact } from "../interfaces/interfaces";
import useContacts from "../utilities/hooks/useContacts";

interface CustomModalProps {
  confirmation: boolean;
  onCloseConfirmation: () => void;
  contact: Contact;
  contactModalOpen?: boolean;
  onCloseContact: () => void;
}
const CustomModal: React.FC<CustomModalProps> = ({
  confirmation,
  onCloseConfirmation,
  onCloseContact,
  contact,
  contactModalOpen,
}) => {
  const [contacts, createContacts] = useContacts();
  const [formData, setFormData] = React.useState({
    firstName: "",
    lastName: "",
    email: "",
    avatar: "",
    additionalInfo: "",
    id: contact.id,
  });

  const modalReturned = React.useMemo(() => {
    const handleChange = (e: React.ChangeEvent<HTMLFormElement>) => {
      const { id, value } = e.target;
      formData.id = contact.id;
      setFormData((prevData) => ({
        ...prevData,
        [id]: value,
      }));
    };

    const deleteItem = () => {
      const currentArray = contacts;
      currentArray.splice(contact.id, 1);
      createContacts(currentArray);
      onCloseConfirmation();
    };

    const handleSubmit = (e: React.ChangeEvent<HTMLFormElement>) => {
      const yala = contacts.find((o) => {
        if (o.email === formData.email) {
          return { o, formData };
        }
      });
      if (yala) {
        e.preventDefault();
        alert(`email already exists for ${yala.firstName} + ${yala.lastName}`);
      } else createContacts([...contacts, formData]);
    };

    if (contactModalOpen) {
      return (
        <Modal
          size="lg"
          show={contactModalOpen}
          onHide={() => onCloseContact()}
        >
          <Modal.Header closeButton>
            <Modal.Title>Create a contact</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form onSubmit={handleSubmit} onChange={handleChange}>
              <Form.Group className="mb-3" controlId="avatar">
                <Form.Label>Avatar</Form.Label>
                <Form.Control
                  placeholder="Profile"
                  type="file"
                  accept="image/jpeg, image/png"
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="firstName">
                <Form.Label>First Name</Form.Label>
                <Form.Control required placeholder="First Name" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="lastName">
                <Form.Label>Last Name</Form.Label>
                <Form.Control required placeholder="Last Name" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="email">
                <Form.Label>Email address</Form.Label>
                <Form.Control required type="email" placeholder="Enter email" />
                <Form.Text className="text-muted">
                  We'll never share your email with anyone else.
                </Form.Text>
              </Form.Group>
              <Form.Group className="mb-3" controlId="additionalInfo">
                <Form.Label>Additional Info</Form.Label>
                <Form.Control
                  as="textarea"
                  placeholder="Best friends since 2018"
                />
              </Form.Group>

              <Modal.Footer>
                <Button variant="primary" type="submit">
                  Submit
                </Button>
              </Modal.Footer>
            </Form>
          </Modal.Body>
        </Modal>
      );
    } else if (confirmation) {
      return (
        <Modal show={confirmation} onHide={() => onCloseConfirmation()}>
          <Modal.Header closeButton>
            <Modal.Title>Delete contact?</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            {contact.firstName}'s details will be gone forever
          </Modal.Body>
          <Modal.Footer>
            <Button variant="outline" onClick={() => onCloseConfirmation()}>
              Close
            </Button>
            <Button variant="danger" onClick={deleteItem}>
              Delete
            </Button>
          </Modal.Footer>
        </Modal>
      );
    } else return null;
  }, [
    confirmation,
    contact.firstName,
    contact.id,
    contactModalOpen,
    contacts,
    formData,
    onCloseConfirmation,
    onCloseContact,
    createContacts,
  ]);
  return <>{modalReturned}</>;
};

export default CustomModal;
