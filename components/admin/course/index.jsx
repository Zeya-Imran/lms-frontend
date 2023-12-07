import Layout from "@components/shared/layout";
import { PlusOutlined } from '@ant-design/icons';
import { Button } from 'antd';
import Link from 'next/link';

const Course = ()=>{
    const Toolbar = ()=>{
       return(
        <Link href='/admin/course/new'>
            <Button
            icon={<PlusOutlined />}
                className="bg-indigo-600 font-semibold"
                size="large"
                type="primary"
                style={{borderRadius:0}}
                
        >New courses</Button>
        </Link>
       )
    }
    return(
        <Layout
            title="Courses"
            subtitle="your selective course is here"
            toolbar={<Toolbar />}
        >
        <h1>From Courses</h1>
        </Layout>
    );
}

export default Course;