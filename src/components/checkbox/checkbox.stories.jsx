import  Checkbox  from './checkbox.jsx';
import ThemeContextProvider from '../../components/themeProvider/themeContextProvider.jsx';


export default {
    component: Checkbox,
    title: 'UI/Checkbox',
    tags: ['autodocs'],
    decorators: [
        (Story) => (
            <ThemeContextProvider >
                <Story />
            </ThemeContextProvider>
        )
    ]
};

const Template = (args) => <Checkbox {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    type: 'primary',
    checked: true
}

export const Secondary = Template.bind({});
Secondary.args = {
    type: 'secondary',
    checked: false
}
