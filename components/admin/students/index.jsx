'user client'
import Layout from '@components/shared/layout';
import { Input, Button, Card, Avatar, Dropdown } from 'antd';
import { UserOutlined, SearchOutlined, EnvironmentOutlined, MoreOutlined, VideoCameraOutlined } from '@ant-design/icons';

const StudentList = [
    {
        id: 1,
        name: 'zeya khan',
        image: '/img/01.jpg',
        payment: 12000,
        totalcourse: 3,
        state: 'Banglore',
        createdAt: new Date()
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
        return(
            <Dropdown>
                <Button 
                    icon={ <MoreOutlined />}
                    shape='circle'
                    type='text'
                    size='large'
                    className='bg-gray-100'
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
                            </Card>
                        ))
                    }
               </div>
            </div>
        </Layout>
    )
}

export default Students;