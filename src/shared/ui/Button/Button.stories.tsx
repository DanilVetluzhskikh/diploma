import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { Button, ButtonSize, ButtonTheme } from './Button';

export default {
    title: 'shared/Button',
    component: Button,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    args: {
        children: 'Text',
    },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {};

export const PrimaryDark = Template.bind({});
PrimaryDark.args = {};
PrimaryDark.decorators = [ThemeDecorator(Theme.DARK)];

export const Clear = Template.bind({});
Clear.args = {
    theme: ButtonTheme.CLEAR,
};

export const ClearDark = Template.bind({});
ClearDark.args = {
    theme: ButtonTheme.CLEAR,
};
ClearDark.decorators = [ThemeDecorator(Theme.DARK)];

export const ClearInverted = Template.bind({});
ClearInverted.args = {
    theme: ButtonTheme.CLEAR_INVERTED,
};

export const ClearInvertedDark = Template.bind({});
ClearInvertedDark.args = {
    theme: ButtonTheme.CLEAR_INVERTED,
};
ClearInvertedDark.decorators = [ThemeDecorator(Theme.DARK)];

export const Outline = Template.bind({});
Outline.args = {
    theme: ButtonTheme.OUTLINE,
};

export const OutlineDark = Template.bind({});
OutlineDark.args = {
    theme: ButtonTheme.OUTLINE,
};
OutlineDark.decorators = [ThemeDecorator(Theme.DARK)];

export const Background = Template.bind({});
Background.args = {
    theme: ButtonTheme.BACKGROUND,
};

export const BackgroundDark = Template.bind({});
BackgroundDark.args = {
    theme: ButtonTheme.BACKGROUND,
};
BackgroundDark.decorators = [ThemeDecorator(Theme.DARK)];

export const BackgroundInverted = Template.bind({});
BackgroundInverted.args = {
    theme: ButtonTheme.BACKGROUND_INVERTED,
};

export const BackgroundInvertedDark = Template.bind({});
BackgroundInvertedDark.args = {
    theme: ButtonTheme.BACKGROUND_INVERTED,
};
BackgroundInvertedDark.decorators = [ThemeDecorator(Theme.DARK)];

export const SquareS = Template.bind({});
SquareS.args = {
    children: '<',
    theme: ButtonTheme.BACKGROUND_INVERTED,
    square: true,
    size: ButtonSize.S,
};

export const SquareM = Template.bind({});
SquareM.args = {
    children: '<',
    theme: ButtonTheme.BACKGROUND_INVERTED,
    square: true,
    size: ButtonSize.M,
};

export const SquareL = Template.bind({});
SquareL.args = {
    children: '<',
    theme: ButtonTheme.BACKGROUND_INVERTED,
    square: true,
    size: ButtonSize.L,
};

export const SquareXL = Template.bind({});
SquareXL.args = {
    children: '<',
    theme: ButtonTheme.BACKGROUND_INVERTED,
    square: true,
    size: ButtonSize.XL,
};

export const S = Template.bind({});
S.args = {
    theme: ButtonTheme.OUTLINE,
    size: ButtonSize.S,
};

export const M = Template.bind({});
M.args = {
    theme: ButtonTheme.OUTLINE,
    size: ButtonSize.M,
};

export const L = Template.bind({});
L.args = {
    theme: ButtonTheme.OUTLINE,
    size: ButtonSize.L,
};

export const XL = Template.bind({});
XL.args = {
    theme: ButtonTheme.OUTLINE,
    size: ButtonSize.XL,
};
