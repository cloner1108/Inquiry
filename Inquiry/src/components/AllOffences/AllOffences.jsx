import React, { useEffect, useState } from "react";

import { getOffenceList } from "../../api/get-offence-list.api";
import { TableWithActions } from "./TableWithActions";
import {
  Button,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  useDisclosure,
} from "@nextui-org/react";

const AllOffences = () => {
  const [offenceList, setOffeenceList] = useState([]);
  const [modalContent, setModelContent] = useState();
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  const getList = async () => {
    const data = await getOffenceList();
    const numAdded = data.map((item, index) => {
      return {
        ...item,
        price: item.price.toLocaleString("fa-IR") + " تومان",
        index: index + 1,
      };
    });

    setOffeenceList(numAdded);
  };

  useEffect(() => {
    getList();
  }, []);

  const columns = [
    {
      key: "index",
      label: "ردیف",
    },
    {
      key: "title",
      label: "عنوان",
    },
    {
      key: "price",
      label: "مبلغ جریمه",
    },
    {
      key: "actions",
      label: "بیشتر",
    },
  ];
  return (
    <div>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1 mt-4">
                عملیات مربوط به تخلف :
              </ModalHeader>
              <ModalBody>
                {modalContent ? modalContent.title : "empty"}
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  بستن
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
      <TableWithActions
        columns={columns}
        rows={offenceList}
        isStriped={true}
        setModelContent={setModelContent}
        setOpenModal={onOpen}
      />{" "}
    </div>
  );
};

export { AllOffences };
