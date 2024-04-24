import { useState, useEffect } from "react";
import { Contact } from "../../interfaces/interfaces";

const useContacts = (): [
  Contact[],
  (contacts: Contact[]) => void,
  (contacts: Contact[]) => void
] => {
  const [contacts, setContacts] = useState<Contact[]>([]);
  useEffect(() => {
    const storedContacts = localStorage.getItem("contacts");
    if (storedContacts) {
      try {
        setContacts(JSON.parse(storedContacts));
      } catch (error) {
        console.error("Error parsing contacts from localStorage:", error);
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [localStorage.getItem("contacts")]);

  const updateContacts = (updatedContacts: Contact[]) => {
    setContacts((prevContacts) => {
      const updatedList = prevContacts.map((contact) => {
        const updatedContact = updatedContacts.find((c) => c.id === contact.id);
        return updatedContact ? { ...contact, ...updatedContact } : contact;
      });
      return updatedList;
    });
    localStorage.setItem("contacts", JSON.stringify(updatedContacts));
  };

  const createContacts = (newContacts: Contact[]) => {
    setContacts((prev) => {
      [...prev, newContacts];
    });
    localStorage.setItem("contacts", JSON.stringify(newContacts));
  };

  return [contacts, createContacts, updateContacts];
};

export default useContacts;
