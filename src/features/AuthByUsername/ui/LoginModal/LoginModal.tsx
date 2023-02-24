import { classNames } from 'shared/lib/classNames/classNames';
import { Modal } from 'shared/ui/Modal/Modal';
import { LoginForm } from '../LoginForm/LoginForm';
import cls from './LoginModal.module.scss';

interface LoginModalProps {
    className?: string;
    isOpen: boolean;
    onClose: () => void;
}

export const LoginModal = ({
    className,
    isOpen,
    onClose,
}: LoginModalProps) => (
    <Modal
        isOpen={isOpen}
        className={classNames(cls.LoginModal, {}, [className])}
        onClose={onClose}
        lazy
    >
        <LoginForm />
    </Modal>
);
