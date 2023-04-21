// app.js

import ClassicEditor from '@ckeditor/ckeditor5-editor-classic/src/classiceditor';
import Essentials from '@ckeditor/ckeditor5-essentials/src/essentials';
import Paragraph from '@ckeditor/ckeditor5-paragraph/src/paragraph';
import Heading from '@ckeditor/ckeditor5-heading/src/heading';
import List from '@ckeditor/ckeditor5-list/src/list';
import Bold from '@ckeditor/ckeditor5-basic-styles/src/bold';
import Italic from '@ckeditor/ckeditor5-basic-styles/src/italic';

import SimpleBox from './simplebox/simplebox';

import CKEditorInspector from '@ckeditor/ckeditor5-inspector';                 // ADDED

ClassicEditor
    .create( document.querySelector( '#editor' ), {
        plugins: [ Essentials, Paragraph, Heading, List, Bold, Italic, SimpleBox ],
        // Insert the "simpleBox" button into the editor toolbar.
        toolbar: [ 'heading', 'bold', 'italic', 'numberedList', 'bulletedList', 'simpleBox' ]
    } )
    .then( editor => {
        // This code runs after the editor initialization.
        // ...
    } )
    .catch( error => {
        // Error handling if something goes wrong during initialization.
        // ...
    } );