/*
- Sales components cods
**/

'use client'
import Layout from '@components/shared/layout';
import Link from 'next/link'
import { Button, Dropdown, Avatar, Badge, Card, Divider, List } from 'antd';
import { MailOutlined, BellOutlined, UserOutlined, SettingOutlined, LogoutOutlined, VideoCameraOutlined, AlertOutlined, FileDoneOutlined } from '@ant-design/icons';
import ApexChart from 'react-apexcharts';
const items = [
{
    key:1,
    label:(
        <Link href="#" legacyBehavior>
            <a className='flex tiems-center gap-x-2'>
                <UserOutlined />
                Account
            </a>
        </Link>
    )
},
{
    key:2,
    label:(
        <Link href="#" legacyBehavior>
            <a className='flex tiems-center gap-x-2'>
                <SettingOutlined />
                Setting
            </a>
        </Link>
    )
},
{
    key:3,
    label:(
        <Link href="#" legacyBehavior>
            <a className='flex tiems-center gap-x-2'>
                <LogoutOutlined />
                Logout
            </a>
        </Link>
    )
}
];
const data = [
{
  title: 'Ant Design Title 1',
},
{
  title: 'Ant Design Title 2',
},
{
  title: 'Ant Design Title 3',
},
{
  title: 'Ant Design Title 4',
},
];


const Sales = ()=>{

const revenue = {
    series: [{
        name: 'series1',
        data: [31, 40, 28, 51, 42, 109, 100]
      }, {
        name: 'series2',
        data: [11, 32, 45, 32, 34, 52, 41]
      }],
      options: {
        chart: {
          height: 350,
          type: 'area'
        },
        dataLabels: {
          enabled: false
        },
        stroke: {
          curve: 'smooth'
        },
        xaxis: {
          type: 'datetime',
          categories: ["2018-09-19T00:00:00.000Z", "2018-09-19T01:30:00.000Z", "2018-09-19T02:30:00.000Z", "2018-09-19T03:30:00.000Z", "2018-09-19T04:30:00.000Z", "2018-09-19T05:30:00.000Z", "2018-09-19T06:30:00.000Z"]
        },
        tooltip: {
          x: {
            format: 'dd/MM/yy HH:mm'
          },
        },
      }
}
const Toolbar =()=>{
    return(
        <>
            <Button
                shape='circle'
                    size='large'
                    type='text'
                    icon={ <MailOutlined className='text-green-600'/> }
                    className='flex justify-center items-center bg-green-100'
            />
            <Button
                shape='circle'
                    size='large'
                    type='text'
                    icon={ 
                    <Badge count={99}>
                        <BellOutlined className='text-orange-600'/> 
                    </Badge>
                    }
                    className='flex justify-center items-center bg-orange-100'
            />
            <Dropdown 
                menu={{ items }} 
                placement="topRight" arrow>
                <Avatar src="https://img.icons8.com/pastel-glyph/64/person-male--v1.png" 
                    size='large'
                    type="text"
                    className='bg-indigo-100 flex items-center justify-center'
                />
            </Dropdown>
        </>
       
    )
}
return(
    <Layout
        title="Dashboard"
        subtitle="welcom in Dashboard in lms"
        toolbar={<Toolbar />}
    >
        <div>
            <div className='grid grid-cols-4 gap-4'>
                <Card className='shadow-md'>
                    <div className='flex justify-around items-center'>
                        <div className='flex flex-col items-center'>
                            <Button
                                size='large'
                                shape='circle'
                                icon={ <UserOutlined />}
                                className='flex justify-center items-center bg-rose-600 text-white'
                            />
                            <h1 className='text-xl font semibold text-rose-600'>Students</h1>
                        </div>
                        <Divider type='vertical' className='h-24' />
                        <div>
                            <h1 className='text-5xl font-bold text-rose-600'>36k</h1>
                            <p className='mt-1 text-lg text-zinc-600'>35,889</p>
                        </div>
                        
                    </div>
                </Card>
                <Card className='shadow-md'>
                    <div className='flex justify-around items-center'>
                        <div className='flex flex-col items-center'>
                            <Button
                                size='large'
                                shape='circle'
                                icon={ <VideoCameraOutlined />}
                                className='flex justify-center items-center bg-green-600 text-white'
                            />
                            <h1 className='text-xl font semibold text-green-600'>Students</h1>
                        </div>
                        <Divider type='vertical' className='h-24' />
                        <div>
                            <h1 className='text-5xl font-bold text-green-600'>16k</h1>
                            <p className='mt-1 text-lg text-zinc-600'>35,889</p>
                        </div>
                        
                    </div>
                </Card>
                <Card className='shadow-md'>
                    <div className='flex justify-around items-center'>
                        <div className='flex flex-col items-center'>
                            <Button
                                size='large'
                                shape='circle'
                                icon={ <FileDoneOutlined />}
                                className='flex justify-center items-center bg-orange-600 text-white'
                            />
                            <h1 className='text-xl font semibold text-orange-600'>Files</h1>
                        </div>
                        <Divider type='vertical' className='h-24' />
                        <div>
                            <h1 className='text-5xl font-bold text-orange-600'>08k</h1>
                            <p className='mt-1 text-lg text-zinc-600'>07,889</p>
                        </div>
                        
                    </div>
                </Card>
                <Card className='shadow-md'>
                    <div className='flex justify-around items-center'>
                        <div className='flex flex-col items-center'>
                            <Button
                                size='large'
                                shape='circle'
                                icon={ <AlertOutlined />}
                                className='flex justify-center items-center bg-blue-600 text-white'
                            />
                            <h1 className='text-xl font semibold text-Blue-600'>Sales</h1>
                        </div>
                        <Divider type='vertical' className='h-24' />
                        <div>
                            <h1 className='text-5xl font-bold text-Blue-600'>36k</h1>
                            <p className='mt-1 text-lg text-zinc-600'>35,889</p>
                        </div>
                        
                    </div>
                </Card>
                {/* <Card className='shadow-md col-span-2'>
                    <ApexChart
                        options={revenue.options}
                        series={revenue.series}
                        type='area'
                        height={300}
                    />
                </Card>
                <Card className='shadow-md' title='Recent Student'>
                    <List
                        itemLayout="horizontal"
                        dataSource={data}
                        renderItem={(item, index) => (
                        <List.Item>
                            <List.Item.Meta
                            avatar={<Avatar src={`https://xsgames.co/randomusers/avatar.php?g=pixel&key=${index}`} />}
                            title={<a href="https://ant.design">{item.title}</a>}
                            description="05-12-2023"
                            />
                        </List.Item>
                        )}
                    />
                </Card>
                <Card className='shadow-md' title='Queue File'>
                    <List
                        itemLayout="horizontal"
                        dataSource={data}
                        renderItem={(item, index) => (
                        <List.Item>
                            <List.Item.Meta
                            avatar={<Avatar src={`https://xsgames.co/randomusers/avatar.php?g=pixel&key=${index}`} />}
                            title={<a href="https://ant.design">{item.title}</a>}
                            description="05-12-2023"
                            />
                        </List.Item>
                        )}
                    />
                </Card> */}
            </div>
        </div>
    </Layout>
);
}

export default Sales;