import {Menu} from 'antd'
import Link from 'next/link';
import {AppstoreAddOutlined,UserAddOutlined, LoginOutlined} from '@ant-design/icons'

const TopNav = () => {
    const {Item} = Menu
    return (
        <Menu mode="horizontal">
            <Item icon={<AppstoreAddOutlined/>}>
                <Link href="/">Home</Link>
            </Item>
            <Item icon={<LoginOutlined/>}>
                <Link href="/login">Login</Link>
            </Item>
            <Item icon={<UserAddOutlined/>}>
                <Link href="/register">Register</Link>
            </Item>
        </Menu>
    )
};

export default TopNav;