import { Meta, StoryObj } from '@storybook/react'
import { Envelope } from 'phosphor-react'
import { TextInput, TextInputInputProps, TextInputRootProps } from './TextInput'


export default {
    title: 'Components/Text Input',
    component: TextInput.Root,
    args: {
        children: [
            <TextInput.Icon>
                <Envelope />
            </TextInput.Icon>,
            <TextInput.Input placeholder="Type your email address" />
        ],
    },
    argTypes: {}
} as Meta<TextInputRootProps>

export const Default: StoryObj<TextInputRootProps> = {}