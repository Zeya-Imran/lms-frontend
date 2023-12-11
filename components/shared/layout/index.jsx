'use client'
import '@components/com.css'
import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Logo from '@components/shared/logo';
import { DashboardOutlined, VideoCameraOutlined, PicCenterOutlined, FileDoneOutlined, UserOutlined, AlertOutlined, SettingOutlined } from '@ant-design/icons';
import { Layout, Button, Menu, Breadcrumb } from 'antd';
const { Sider,Content,Header } = Layout;

const menus = [
    {
        label: <Link href="/admin">{'Dashboard'}</Link>,
        key: '/admin',
        icon: <DashboardOutlined />
    },
    {
        label: <Link href="/admin/students">{'Students'}</Link>,
        key: '/admin/students',
        icon: <UserOutlined />
    },
    {
        label: <Link href="/admin/courses">{'Courses'}</Link>,
        key: '/admin/courses',
        icon: <VideoCameraOutlined />
    },
    {
        label: <Link href="/admin/files">{'Files & Media'}</Link>,
        key: '/admin/files',
        icon: <FileDoneOutlined />
    },
    {
        label: <Link href="/admin/sales">{'Sales & Revenue'}</Link>,
        key: '/admin/sales',
        icon: <AlertOutlined />
    },
    {
        label: <Link href="/admin/setting">{'Settings'}</Link>,
        key: '/admin/setting',
        icon: <SettingOutlined />
    },
]

const LayoutSection = ({children, title=null, subtitle=null, toolbar=null})=>{
    //Hooks
    const pathName = usePathname()
    const [open, setOpen] = useState(false);
    
    const breadItems = ()=>{
        const items = pathName.split("/").map((item,index)=>(
            {title: <Link href={pathName.split(`/${item}`)[0]+`/${item}`}>{item}</Link>}
        ))
        return items;
    }

    return(
       <Layout>
            <Sider  
                trigger={null} 
                collapsible collapsed={open}
                style={{
                    overflow: 'auto',
                    height: '100vh',
                    position: 'fixed',
                    left: 0,
                    top: 0,
                    
            }}
            >
                {/* brnad logo */} 
                <div className='py-4'>
                    <Logo  color='white' />
                </div>           
                <Menu theme="dark" items={menus}  selectedkeys={[pathName]}/> 

            </Sider>
            <Layout style={{marginLeft:200}} className='min-h-screen'>
                <Header 
                    className='bg-white flex justify-between items-center h-20 px-6 shadow-md'
                    style={{
                        position: 'sticky',
                        top:0,
                        zIndex:1,
                        width:'100%'
                    }}
                >
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
                            <h1 className='text-lg font-semibold capitalize'>{title}</h1>
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
                <Content className='p-8 flex flex-col gap-y-4'>
                    <Breadcrumb items={breadItems()} />
                    {children}
                </Content>
            </Layout>
       </Layout>
       
    )
}

export default LayoutSection;