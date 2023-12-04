'use client'
import Logo from '@components/shared/logo';
import { useState } from 'react';
import Link from 'next/link';
import { DashboardOutlined, VideoCameraOutlined, PicCenterOutlined } from '@ant-design/icons';
import { Layout, Button, Menu } from 'antd';
const { Sider,Content,Header } = Layout;

const menus = [
    {
        id:1,
        name: "Dashboard",
        href: "/admin",
        icon: <DashboardOutlined />
    },
    {
        id:2,
        name: "Course",
        href: "/admin/course",
        icon: <VideoCameraOutlined />
    }
]

const LayoutSection = ({children})=>{
    //Hooks
    const [open, SetOpen] = useState(false);
    return(
       <Layout>
            <Sider className='min-h-screen' trigger={null} collapsible collapsed={open}>
                <Menu theme='dark'>
                    {
                        menus.map((menus)=>(
                           <Menu.Item
                           key={menus.id}
                           icon={menus.icon}
                           >
                                <Link href={menus.href}>{menus.name}</Link>
                           </Menu.Item> 
                        ))
                    }
                </Menu>

            </Sider>
            <Layout>
                <Header className='bg-white flex justify-between items-center'>
                    {/* brnad logo */}
                    <Logo />

                    <Button onClick={()=>SetOpen(!open)} 
                        icon={<PicCenterOutlined />}
                        type='text'
                        className=''
                        style={{width:40, height:40}}
                    />
                </Header>
                <Content>
                    {children}
                </Content>
            </Layout>
       </Layout>
       
    )
}

export default LayoutSection;