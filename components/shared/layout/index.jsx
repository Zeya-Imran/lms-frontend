'use client'
import '@components/com.css'
import Logo from '@components/shared/logo';
import { useState } from 'react';
import Link from 'next/link';
import { DashboardOutlined, VideoCameraOutlined, PicCenterOutlined, FileDoneOutlined, UserOutlined, AlertOutlined, SettingOutlined } from '@ant-design/icons';
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
    },
    {
        id:3,
        name: "Files & Media",
        href: "/admin/files",
        icon: <FileDoneOutlined />
    },
    {
        id:4,
        name: "Students",
        href: "/admin/students",
        icon: <UserOutlined />
    },
    {
        id:5,
        name: "Sales & Revenue",
        href: "/admin/sales",
        icon: <AlertOutlined />
    },
    {
        id:6,
        name: "Setting",
        href: "/admin/setting",
        icon: <SettingOutlined />
    }
]

const LayoutSection = ({children, title=null, subtitle=null, toolbar=null})=>{
    //Hooks
    const [open, setOpen] = useState(false);
    return(
       <Layout>
            <Sider className='min-h-screen' trigger={null} collapsible collapsed={open}>
                {/* brnad logo */}
                <div className='py-4'>
                    <Logo  color='white' />
                </div>           
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
                <Header className='bg-white flex justify-between items-center h-20 px-6'>
                <div className='flex items-center gap-x-6'>
                    <Button 
                        onClick={()=>setOpen(!open)} 
                        icon={<PicCenterOutlined />} 
                        style={{
                            width: 40,
                            height: 40
                        }}
                        className="flex items-center justify-center"
                    />
                    <div>
                        {
                            title && 
                            <h1 className='text-lg font-semibold'>{title}</h1>
                        }
                        {
                            subtitle && 
                            <p className='text-sm text-zinc-500'>{subtitle}</p>
                        }
                    </div>
                </div>
                    <div className='flex gap-x-5'>
                        {toolbar}
                    </div>
                </Header>
                <Content className='p-8'>
                    {children}
                </Content>
            </Layout>
       </Layout>
       
    )
}

export default LayoutSection;