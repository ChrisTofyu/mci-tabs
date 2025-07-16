import React, { ReactElement } from 'react';

import Button from '@radix-styles/atoms/Button';
import * as Dialog from '@radix-ui/react-dialog';
import { classNames } from '@utils/common/classNames';
import { VisuallyHidden } from '@radix-ui/themes';

import styles from './Modal.module.scss';

export interface ModalProps {
  /**
   * Button name which will that open up the modal/popup
   * @property
   */
  buttonName: string;
  /**
   * Styling for button
   * @property
   */
  className?: string;
  /**
   * Children as jsx, react component will show inside the modal
   * @property
   */
  children: React.ReactNode;
  /**
   * Boolean state to represent hide/show of the modal
   * @property
   * @default false
   */
  open?: boolean;
  /**
   * toggle function to change between open and close state of the modal
   * @property
   */
  setOpen?: React.Dispatch<React.SetStateAction<boolean>>;
}

/**
 * Modal component is to show the content in a popup/modal.
 *
 * @group Molecules
 * @category Radix Component
 *
 * @param {ModalProps} props - The Modal props
 * @returns {ReactElement} - Modal Component
 */
export const Modal = ({
  open,
  setOpen,
  buttonName,
  className,
  children,
}: ModalProps): ReactElement => {
  return (
    <Dialog.Root open={open} onOpenChange={setOpen}>
      <Dialog.Trigger asChild>
        <Button
          size="sm"
          aria-haspopup="dialog"
          aria-controls={open ? 'dialog-content' : undefined}
          mode="transparent"
          text={buttonName}
          className={classNames(className)}
        />
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className={styles.Overlay} />
        <Dialog.Content className={styles.Content} id="dialog-content">
          <VisuallyHidden>
            <Dialog.DialogTitle>Accessible Dialog Title</Dialog.DialogTitle>
          </VisuallyHidden>
          {children}
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};
export default Modal;
