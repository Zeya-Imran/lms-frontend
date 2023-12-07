/*
    -New Courses component
**/

'use client'
import Layout from '@components/shared/layout';
import Editor from '@components/shared/editior';
import { useEffect, useState } from 'react';

const NewCourses = ()=>{
    const [editorLoading, setEditorLoading] = useState(true);
    useEffect(()=>{
        setEditorLoading(false);
    },[])
    return(
        
        <Layout
            title='New Courses'
            subtitle='create a course to start your new Journey'
        >
            <h1>new from courses</h1>
            <Editor 
                loading={editorLoading}
            />

        </Layout>

    )
}

export default NewCourses;