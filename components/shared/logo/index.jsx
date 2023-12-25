'use client'
import { Button } from 'antd';
import { DingdingOutlined } from '@ant-design/icons';
import Image from 'next/image'
const Logo = ({size=32, color='inherit'})=>{
    return(
        // <Button 
        //     icon={<DingdingOutlined className='text-rose-600'/>}
        //     style={{
        //     fontSize:size,
        //     color
        //     }}
        //     className='font-bold w-fit flex items-center shadow-none border-0'
        // >
        // LMS 
        // </Button>

    <Button className='border-0'> 
        <Image src='/img/logo-tech-dark.png' 
        alt="logo"
        width={0}
        height={0}
        layout='responsive'
        style={{
                fontSize:size,
                color,
        }}
        />
    </Button>
    )
}

export default Logo;