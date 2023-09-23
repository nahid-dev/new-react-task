import React from "react";
import { useEffect } from "react";
import { useState } from "react";

const Problem2 = () => {
  const [showModalA, setShowModalA] = useState(false);
  const [showModalB, setShowModalB] = useState(false);
  const [contacts, setContacts] = useState([]);
  const [onlyEven, setOnlyEven] = useState(false);

  // Function to fetch contacts from the API
  const fetchContacts = async () => {
    try {
      // Fetch contacts from the API based on the selected category (All or US)
      // Update the 'contacts' state with the fetched data
    } catch (error) {
      console.error("Error fetching contacts:", error);
    }
  };

  // Function to toggle between Modals A and B
  const toggleModalA = () => {
    setShowModalA(true);
    setShowModalB(false);
  };

  const toggleModalB = () => {
    setShowModalA(false);
    setShowModalB(true);
  };

  // Function to close both modals
  const closeModal = () => {
    setShowModalA(false);
    setShowModalB(false);
  };

  // Function to toggle the "Only even" checkbox
  const handleCheckboxChange = () => {
    setOnlyEven(!onlyEven);
  };

  // Fetch contacts when the component mounts (you might want to use useEffect here)
  useEffect(() => {
    fetch("https://contact.mediusware.com/api/contacts/")
      .then((res) => res.json())
      .then((data) => setContacts(data.results));
  }, []);

  return (
    <div className="container">
      <div className="row justify-content-center mt-5">
        <h4 className="text-center text-uppercase mb-5">Problem-2</h4>

        <div className="d-flex justify-content-center gap-3">
          <button
            className="btn btn-lg btn-outline-primary"
            type="button"
            onClick={toggleModalA}
          >
            All Contacts
          </button>
          <button
            className="btn btn-lg btn-outline-warning"
            type="button"
            onClick={toggleModalB}
          >
            US Contacts
          </button>
        </div>
      </div>

      {showModalA && (
        <div className="border mt-5 p-5">
          <div>
            <h2 className="display-4">Modal A</h2>
          </div>
          <button className="btn me-5 btn-primary">All Contact</button>
          <button className="btn me-5 btn-secondary">US Contact</button>
          <button className="btn me-5 btn-warning">Close</button>
        </div>
      )}

      {showModalB && (
        <div className="border mt-5 p-5">
          <div>
            <h2 className="display-4">Modal B</h2>
          </div>
          <button className="btn me-5 btn-primary">All Contact</button>
          <button className="btn me-5 btn-secondary">US Contact</button>
          <button className="btn me-5 btn-warning">Close</button>
        </div>
      )}
    </div>
  );
};

export default Problem2;
