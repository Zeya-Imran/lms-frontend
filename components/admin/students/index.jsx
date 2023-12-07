'user client'
import Layout from '@components/shared/layout';
import { Input, Button, Card, Avatar, Dropdown, Divider, Tooltip, Pagination, Menu } from 'antd';
import { DeleteOutlined, EditOutlined, CalendarOutlined, UserOutlined, SearchOutlined, EnvironmentOutlined, MoreOutlined, VideoCameraOutlined, MailOutlined, BlockOutlined } from '@ant-design/icons';

const currentDate = new Date().toDateString();
const date = currentDate.toLocaleString()
const StudentList = [
    {
        id: 1,
        name: 'zeya khan',
        image: '/img/01.jpg',
        payment: 12000,
        totalcourse: 3,
        state: 'Banglore',
        createdAt: date
    },
    {
        id: 1,
        name: 'zeya khan',
        image: '/img/01.jpg',
        payment: 12000,
        totalcourse: 3,
        state: 'Banglore',
        createdAt: date
    },
    {
        id: 1,
        name: 'zeya khan',
        image: '/img/01.jpg',
        payment: 12000,
        totalcourse: 3,
        state: 'Banglore',
        createdAt: date
    },
    {
        id: 1,
        name: 'zeya khan',
        image: '/img/01.jpg',
        payment: 12000,
        totalcourse: 3,
        state: 'Banglore',
        createdAt: date
    },
    {
        id: 1,
        name: 'zeya khan',
        image: '/img/01.jpg',
        payment: 12000,
        totalcourse: 3,
        state: 'Banglore',
        createdAt: date
    },
    {
        id: 1,
        name: 'zeya khan',
        image: '/img/01.jpg',
        payment: 12000,
        totalcourse: 3,
        state: 'Banglore',
        createdAt: date
    }
]


const Students = ()=>{
    //custom title design
    const Ttitle = ({TitleProps})=>{
        return(
            <div className='flex items-center gap-x-5 py-2'>
                <Avatar src={TitleProps.image}  style={{width:48, height:48}}/>
                <div>
                    <h1 className='text-xl capitalize'>{TitleProps.name}</h1>
                    <small className='text-zinc-400'>
                        <EnvironmentOutlined /> {TitleProps.state}
                    </small>
                </div>
            </div>
        )
    }

    const Extra = ({item})=>{
        const menu = (
            <Menu>
                <Menu.Item key="edit">
                    <div className='flex gap-x-2 items-center'>
                        <EditOutlined />
                        Edit
                    </div>
                </Menu.Item>
                <Menu.Item key="delete">
                    <div className='flex gap-x-2 items-center'>
                        <DeleteOutlined />
                        Delete
                    </div>
                </Menu.Item>
            </Menu>
        )
        return (
            <Dropdown overlay={menu} arrow placement='bottomRight'>
                <Button 
                    shape="circle"
                    icon={<MoreOutlined />} 
                    className='flex items-center justify-center bg-gray-100'
                    type="text"
                />
            </Dropdown>
        )
    }

    const Toolbar = ()=>{
        return(
            <>
                <Input 
                    className='border-zinc-300 w-96'
                    placeholder='Search Student'
                    style={{borderRadius:0}}
                    suffix={
                        <Button
                            className='flex items-center justify-center text-zinc-300' 
                            type='text'
                        >
                            <SearchOutlined />
                        </Button>
                    }
                
                />
                <Button
                    icon={<UserOutlined />}
                    className="bg-green-500 font-semibold"
                    size="large"
                    type="primary"
                    style={{borderRadius:0}}
                >
                    Enroll
                </Button>
            </>
        )
    }
    return(
        
        <Layout 
            title="Students"
            subtitle="List of Creative Students and Users"
            toolbar={<Toolbar />}
        >
            <div>
               <div className='grid grid-cols-3 gap-6'>
                    {
                        StudentList.map((student)=>(
                            <Card 
                                key={student.id} 
                                className='shadow-md'
                                title={<Ttitle TitleProps={student}/>}
                                extra={<Extra item={student}/>}
                            >
                                <div className='flex justify-between'>
                                    <div className='flex items-center gap-x-4'>
                                        <Button shape='circle' type='text' className='bg-green-200 text-green-600 font-bold'>
                                            ₹
                                        </Button>
                                        <p className='font-semibold text-md'>Payments</p>
                                    </div>
                                    <p className='text-zinc-500 font-semibold'>{student.payment}</p>
                                </div>

                                <div className='flex justify-between mt-5'>
                                    <div className='flex items-center gap-x-4'>
                                        <Button shape='circle' type='text' className='bg-orange-200 text-orange-600 font-bold' 
                                            icon={<VideoCameraOutlined />}
                                        />
                                            
                                        <p className='font-semibold text-md'>Courses</p>
                                    </div>
                                    <p className='text-zinc-500 font-semibold'>{student.totalcourse}</p>
                                </div>

                                <div className='flex justify-between mt-5'>
                                    <div className='flex items-center gap-x-4'>
                                        <Button shape='circle' type='text' className='bg-indigo-200 text-indigo-600 font-bold' 
                                            icon={<CalendarOutlined />}
                                        />
                                            
                                        <p className='font-semibold text-md'>Joined</p>
                                    </div>
                                    <p className='text-zinc-500 font-semibold'>{student.createdAt}</p>
                                </div>
                                <Divider>
                                    <div className='flex gap-x-4'>
                                        <Tooltip title="Message">
                                            <Button 
                                                icon={<MailOutlined className='text-blue-600' />}
                                                type='text'
                                                shape='circle'
                                                size='large'
                                                className='bg-blue-100'
                                            />
                                        </Tooltip>
                                        <Tooltip title="Block">
                                            <Button 
                                                icon={<BlockOutlined className='text-rose-600' />}
                                                type='text'
                                                shape='circle'
                                                size='large'
                                                className='bg-rose-100'
                                            />
                                        </Tooltip>
                                    </div>
                                    
                                </Divider>

                                
                            </Card>
                        ))
                    }
               </div>
                <div className='flex justify-end mt-10'>
                    <Pagination total={500}  />
                </div>
            </div>
        </Layout>
    )
}

export default Students;