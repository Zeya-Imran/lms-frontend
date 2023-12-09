/*
    -CKEditor component
**/

import { useEffect, useRef } from "react";
const config = {
toolbar: [
    'undo',
    'redo',
    '|',
    'heading',
    'bold',
    'italic',
    '|',
    'numberedList', 'bulletedList' 
]
}
const Editor = ({loading,getValue})=>{
    const el = useRef();
    const {CKEditor, ClassicEditor} = (el.current || {});
    useEffect(()=>{
        el.current = {
            CKEditor: require('@ckeditor/ckeditor5-react').CKEditor,
            ClassicEditor: require("@ckeditor/ckeditor5-build-classic")
        }
    },[])
    return(
       <div>
             {
            loading ? '' :
            <CKEditor 
            config={config}
            editor={ClassicEditor}
            OnChange={(event,editor)=>{
                const data= editor.getData()
                console.log(data)
                console.log('fdsfsdf');
                getValue(data)
            }}
            />
        }
       </div>
    )
}

export default Editor;