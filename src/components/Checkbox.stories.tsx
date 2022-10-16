import { Meta, StoryObj } from '@storybook/react'
import { Checkbox, CheckboxProps } from './Checkbox';
import { Text } from './Text';

export default {
    title: 'Components/Checkbox',
    component: Checkbox,
    args: {
        children: 'Create Account'
    },
    argTypes: {},
    decorators: [
        (Story) => {
            return (
                <div className='flex items-center gap-3'>
                    {Story()}
                    <Text size='sm'>Remind me for 30 days</Text>
                </div>
            )
        }
    ]
} as Meta<CheckboxProps>

export const Default: StoryObj<CheckboxProps> = {}