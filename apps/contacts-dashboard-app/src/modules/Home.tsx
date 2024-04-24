import React, { useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import CustomModal from "../components/CustomModal";
import { Contact } from "../interfaces/interfaces";
import EditCanvasPanel from "../components/CustomCanvas";
import useContacts from "../utilities/hooks/useContacts";
import PaginationComponent from "../components/Pagination";
import ContactTable from "../components/ContactTable";

const HomeModule: React.FC = () => {
  const [contacts, createContacts] = useContacts();
  const [isEditingCanvasFormOpen, setIsEditingCanvasFormOpen] = useState(false);
  const [isConfirmationOpen, setIsConfirmationOpen] = useState(false);
  const [contactsList, setContactsList] = useState<Contact[]>(contacts || []);
  const [isContactModalOpen, setIsContactModalOpen] = useState(
    contacts.length <= 0 ? false : true
  );
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 9;

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const [selectedContactDetails, setSelectedContactDetails] = useState({
    id: JSON.parse(localStorage?.getItem("contacts"))
      ? JSON.parse(localStorage?.getItem("contacts")).length
      : 0,
    firstName: "",
    lastName: "",
    email: "",
  });

  const onClickDeleteRow = (contact: Contact) => {
    contact.id = contacts.length;
    setIsConfirmationOpen(true);
    setSelectedContactDetails(contact);
  };
  const onClickEditRow = (contact: Contact) => {
    setIsEditingCanvasFormOpen(true);
    setSelectedContactDetails(contact);
  };
  const onShow = (contact: boolean) => {
    setIsEditingCanvasFormOpen(contact);
  };

  const [searchTerm, setSearchTerm] = useState("");

  React.useEffect(() => {
    const savedData = contacts || [];
    setContactsList(savedData);
  }, [contacts, selectedContactDetails, createContacts]);

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  const filteredData = React.useMemo(() => {
    if (contactsList.length > 0) {
      return contactsList.filter(
        (item: Contact) =>
          item.firstName.toLowerCase().includes(searchTerm.toLowerCase()) ||
          item.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
          item.lastName.toLowerCase().includes(searchTerm.toLowerCase()) ||
          item.additionalInfo?.toLowerCase().includes(searchTerm.toLowerCase())
      );
    } else return [];
  }, [contactsList, searchTerm]);
  const displayedData = filteredData.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );
  return (
    <Container>
      <Row className="align-items-center">
        <Col md={6}>
          <div className="mb-3">
            <h5 className="card-title">
              You got
              <span className="text-muted fw-normal ms-2">
                {contactsList.length}
              </span>{" "}
              Contacts{" "}
            </h5>
          </div>
        </Col>
        <Col md={6}>
          <div className="d-flex flex-wrap align-items-center justify-content-end gap-2 mb-3">
            <Button onClick={() => setIsContactModalOpen(true)}>
              New contact
            </Button>
          </div>
        </Col>
      </Row>
      <Row>
        <Col sm={12}>
          <div className="table-container">
            <Form.Group className="my-1" controlId="search">
              <Form.Control
                type="text"
                placeholder="Search by any keyword"
                value={searchTerm}
                onChange={handleSearchChange}
              />
            </Form.Group>
            <ContactTable
              contacts={displayedData}
              currentPage={currentPage}
              itemsPerPage={itemsPerPage}
              onClickDeleteRow={onClickDeleteRow}
              onClickEditRow={onClickEditRow}
            />
          </div>
        </Col>
      </Row>
      <Row className="g-0 align-items-center pb-4">
        <Col sm={6}>
          <div>
            <p className="mb-sm-0">
              Showing 0 to 10 of {contactsList.length} entries
            </p>
          </div>
        </Col>
        <Col sm={6}>
          <div className="float-sm-end">
            <PaginationComponent
              totalItems={contactsList.length}
              onPageChange={handlePageChange}
            />
          </div>
        </Col>
      </Row>
      <CustomModal
        confirmation={isConfirmationOpen}
        onCloseConfirmation={() => setIsConfirmationOpen(false)}
        contact={selectedContactDetails}
        contactModalOpen={false}
        onCloseContact={() => setIsContactModalOpen(false)}
      />
      <CustomModal
        confirmation={false}
        contactModalOpen={isContactModalOpen}
        onCloseConfirmation={() => setIsConfirmationOpen(false)}
        contact={selectedContactDetails}
        onCloseContact={() => setIsContactModalOpen(false)}
      />
      <EditCanvasPanel
        show={isEditingCanvasFormOpen}
        setShow={() => onShow(false)}
        contactDetails={selectedContactDetails}
      />
    </Container>
  );
};

export default HomeModule;
