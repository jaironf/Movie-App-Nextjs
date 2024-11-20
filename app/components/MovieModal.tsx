"use client";

import React, { useState } from "react";
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button } from "@nextui-org/react";

interface MovieModalProps {
  movieTitle?: string;
  movieDescription?: string;
}

const MovieModal: React.FC<MovieModalProps> = ({ movieTitle, movieDescription }) => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  return (
    <>
      <Button
  onPress={openModal}
  className="text-tiny text-white bg-danger/50 hover:bg-warning/50 hover:text-black transition-all duration-300 ease-in-out"
  variant="flat"
  color="default"
  radius="lg"
  size="sm"
>
  View Details
</Button>
      <Modal backdrop='blur' isOpen={isOpen} onClose={closeModal}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader>{movieTitle || "Movie Details"}</ModalHeader>
              <ModalBody>
                <p>{movieDescription || "No description available."}</p>
              </ModalBody>
              <ModalFooter>
                <Button color="danger" onPress={onClose}>
                  Close
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
};

export default MovieModal;