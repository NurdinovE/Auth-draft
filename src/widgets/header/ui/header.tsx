import React from 'react';
import {Group, Box, Button, Modal, Text} from '@mantine/core';
import {useDisclosure} from '@mantine/hooks';
import classes from './header-simple.module.css';
import logo from "../assets/mainlogo.jpg"
import RegistrationForm from "../../../features/register-form/RegistrationForm.tsx";
import LoginForm from "../../../features/login-form/LoginForm.tsx";
import {useModals} from "@mantine/modals";

const links = [
    {link: '/Tours', label: 'Tours'},
    {link: '/pricing', label: 'Pricing'},
    {link: '/learn', label: 'Learn'},
    {link: '/community', label: 'Community'},
];

export const Header: React.FC = () => {
    const [opened, {open, close}] = useDisclosure(false);

    const modals = useModals();

    const openMultiStepModal = () =>
        modals.openConfirmModal({
            title: 'Регистрация',
            closeOnConfirm: false,
            children: (
                <RegistrationForm confirm={confirm()}/>
            ),
            onConfirm: () =>
                modals.openConfirmModal({
                    title: 'This is modal at second layer',
                    labels: {confirm: 'Close modal', cancel: 'Back'},
                    closeOnConfirm: false,
                    children: (
                        <Text size="sm">When this modal is closed modals state will revert to first modal</Text>
                    ),
                    onConfirm: () => modals.closeAll(),
                }),
        });


    const items = links.map((link) => (
        <a
            key={link.label}
            href={link.link}
            className={classes.link}
        >
            {link.label}
        </a>
    ));


    return (
        <header className={classes.header}>
            <div className="container">
                <Box className={classes.inner}>
                    <Group gap={5} visibleFrom="xs">
                        <div className={classes.logo}>
                            <img src={logo} alt="logo"/>
                        </div>
                    </Group>
                    <Group gap={5} visibleFrom="xs">
                        {items}

                        <Button className={classes.link} onClick={openMultiStepModal}>Register</Button>

                        <Button
                            // navigate={'/register'}
                            className={classes.link}
                            onClick={open}>
                            Login
                        </Button>
                        <Modal opened={opened} onClose={close} title="Authentication"
                               overlayProps={{
                                   backgroundOpacity: 0.55,
                                   blur: 3,
                               }}>
                            <RegistrationForm/>
                        </Modal>
                        <Modal opened={opened} onClose={close} title="Authentication"
                               overlayProps={{
                                   backgroundOpacity: 0.55,
                                   blur: 3,
                               }}>
                            <LoginForm/>
                        </Modal>
                    </Group>
                </Box>
            </div>
        </header>
    );
};