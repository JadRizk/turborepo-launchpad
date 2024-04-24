import React from "react";
import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";
import Form from "react-bootstrap/Form";
import { Contact } from "../interfaces/interfaces";
import useContacts from "../utilities/hooks/useContacts";

interface EditCanvasPanelProps {
  show: boolean;
  setShow: (show: boolean) => void;
  contactDetails: Contact;
}

const EditCanvasPanel: React.FC<EditCanvasPanelProps> = ({
  show,
  setShow,
  contactDetails,
}) => {
  const [contacts, updateContacts] = useContacts();

  const [isSubmitDisabled, setIsSubmitDisabled] = React.useState(true);
  const [formData, setFormData] = React.useState<Contact>({
    firstName: contactDetails.firstName,
    lastName: contactDetails.lastName,
    email: contactDetails.email,
    avatar: contactDetails.avatar,
    additionalInfo: contactDetails.additionalInfo,
    id: contactDetails.id,
  });

  const handleChange = (e: React.ChangeEvent<HTMLFormElement>) => {
    const { id, value } = e.target;
    setIsSubmitDisabled(false);
    setFormData((prevData) => ({
      ...contactDetails,
      [id]: value,
      id: contactDetails.id,
    }));
  };

  const handleSubmit = (e: React.ChangeEvent<HTMLFormElement>) => {
    const exisitngEmailContact = contacts.find((currContact) => {
      if (currContact.id === formData.id) {
        const updates = [
          ...contacts.slice(0, formData.id),
          Object.assign({}, formData.id, {
            ...contacts[formData.id],
            ...formData,
          }),
          ...contacts.slice(formData.id + 1),
        ];
        updateContacts(updates);
      } else if (currContact.email === formData.email) {
        e.preventDefault();
        return { currContact, formData };
      }
    });
    if (exisitngEmailContact) {
      alert(
        `email already exists for ${exisitngEmailContact.firstName} + ${exisitngEmailContact.lastName}`
      );
      return;
    }
    return;
  };
  return (
    <>
      <Offcanvas
        scroll
        show={show}
        onHide={() => setShow(false)}
        backdrop="static"
      >
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Contact Details/Edit</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Form onSubmit={handleSubmit} onChange={handleChange}>
            <Form.Group className="mb-3" controlId="avatar">
              <Form.Label>Avatar:</Form.Label>
              <Form.Control
                placeholder="Profile"
                type="file"
                accept="image/*"
              />
              <img src={contactDetails.avatar}></img>
            </Form.Group>
            <Form.Group className="mb-3" controlId="firstName">
              <Form.Label>First name:</Form.Label>
              <Form.Control
                defaultValue={contactDetails.firstName}
                placeholder="First Name"
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="lastName">
              <Form.Label>Last name:</Form.Label>
              <Form.Control
                defaultValue={contactDetails.lastName}
                placeholder="Last Name"
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="email">
              <Form.Label>Email address:</Form.Label>
              <Form.Control
                defaultValue={contactDetails.email}
                type="email"
                placeholder="Enter email"
              />
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>
            <Form.Group className="mb-3" controlId="additionalInfo">
              <Form.Label>Additional info:</Form.Label>
              <Form.Control
                as={"textarea"}
                defaultValue={contactDetails.additionalInfo}
              />
            </Form.Group>
            <Button disabled={isSubmitDisabled} variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};

export default EditCanvasPanel;
