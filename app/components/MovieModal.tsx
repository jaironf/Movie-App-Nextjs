"use client";

import { FC, useState } from "react";
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button } from "@nextui-org/react";
import { MovieModalProps } from "../types";




const MovieModal: FC<MovieModalProps> = ({ movie }) => {


  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  return (
    <>
      <Button
        onPress={openModal}
        className="text-tiny text-white bg-danger/50 hover:bg-warning/50 hover:text-white transition-all duration-300 ease-in-out"
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
                <ModalHeader className="text-3xl">{movie.title || "Movie Details"}</ModalHeader>
                <ModalBody>
                {movie.imageUrl && (
                  <img src={movie.imageUrl} alt={movie.title} className="w-full h-auto mb-4 rounded-lg" />
                )}
                  <p>{movie.overview || "No description available."}</p>
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

