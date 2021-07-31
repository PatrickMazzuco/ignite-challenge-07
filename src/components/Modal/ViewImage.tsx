import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalFooter,
  ModalBody,
  Image,
  Link,
} from '@chakra-ui/react';

interface ModalViewImageProps {
  isOpen: boolean;
  onClose: () => void;
  imgUrl: string;
}

export function ModalViewImage({
  isOpen,
  onClose,
  imgUrl,
}: ModalViewImageProps): JSX.Element {
  return (
    <Modal isOpen={isOpen} onClose={onClose} isCentered size="5xl">
      <ModalOverlay />
      <ModalContent maxWidth={900} maxHeight={600} w="auto" h="auto" mx="auto">
        <ModalBody p={0}>
          <Image src={imgUrl} maxWidth={900} maxHeight={600} />
        </ModalBody>
        <ModalFooter
          justifyContent="flex-start"
          py="2"
          px="2.5"
          borderBottomRadius={6}
          bg="pGray.800"
        >
          <Link href={imgUrl} isExternal fontSize={14}>
            Abrir original
          </Link>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}
