import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';
import { LoginFormDark } from 'features/AuthByUsername/ui/LoginForm/LoginForm.stories';
import { LoginModal } from './LoginModal';

export default {
    title: 'features/LoginModal',
    component: LoginModal,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    args: {
        isOpen: true,
    },
} as ComponentMeta<typeof LoginModal>;

const Template: ComponentStory<typeof LoginModal> = (args) => <LoginModal {...args} />;

export const LoginModalLight = Template.bind({});
LoginModalLight.args = {};
LoginModalLight.decorators = [StoreDecorator({
    login: { username: '123', password: '123' },
})];

export const LoginModalDark = Template.bind({});
LoginModalDark.args = {};
LoginModalDark.decorators = [ThemeDecorator(Theme.DARK), StoreDecorator({
    login: { username: '123', password: '123' },
})];
