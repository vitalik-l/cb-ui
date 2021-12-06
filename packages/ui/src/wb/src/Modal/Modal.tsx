import { Modal as CoreModal } from '@cb-general/core/Modal';
import { styled } from '@cb-general/core/utils/styled';
import styles from './WbModal.module.scss';

export const Modal = styled(CoreModal, styles);
export const ModalActions = styled(`${styles.actions} ${styles.padding}`);
export const ModalContent = styled(`${styles.padding}`);
export const ModalHeader = styled(`${styles.header} ${styles.padding}`);
