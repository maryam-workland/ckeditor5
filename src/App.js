// App.jsx / App.tsx

import React, { Component } from "react";

import { CKEditor } from "@ckeditor/ckeditor5-react";

// NOTE: Use the editor from source (not a build)!
import { ClassicEditor } from "@ckeditor/ckeditor5-editor-classic";

import { Essentials } from "@ckeditor/ckeditor5-essentials";
// import { Paragraph } from "@ckeditor/ckeditor5-paragraph";
import { Autoformat } from "@ckeditor/ckeditor5-autoformat";
import {
  Bold,
  Italic,
  Strikethrough,
  Underline,
} from "@ckeditor/ckeditor5-basic-styles";
import { BlockQuote } from "@ckeditor/ckeditor5-block-quote";
import { Heading } from "@ckeditor/ckeditor5-heading";
import { AutoLink, Link } from "@ckeditor/ckeditor5-link";
import { List } from "@ckeditor/ckeditor5-list";
import { Alignment } from "@ckeditor/ckeditor5-alignment";
import { PasteFromOffice } from "@ckeditor/ckeditor5-paste-from-office";
import {
  Image,
  ImageCaption,
  ImageStyle,
  ImageToolbar,
  ImageUpload,
} from "@ckeditor/ckeditor5-image";
import { FindAndReplace } from "@ckeditor/ckeditor5-find-and-replace";
import { Base64UploadAdapter } from "@ckeditor/ckeditor5-upload";
import { Font } from "@ckeditor/ckeditor5-font";
import { GeneralHtmlSupport } from "@ckeditor/ckeditor5-html-support";
import { MediaEmbed } from "@ckeditor/ckeditor5-media-embed";
import { TextTransformation } from "@ckeditor/ckeditor5-typing";
import { Indent, IndentBlock } from "@ckeditor/ckeditor5-indent";
import { SourceEditing } from "@ckeditor/ckeditor5-source-editing";
import { RemoveFormat } from "@ckeditor/ckeditor5-remove-format";
import { SpecialCharacters } from "@ckeditor/ckeditor5-special-characters";
import { SpecialCharactersEssentials } from "@ckeditor/ckeditor5-special-characters";
import { PageBreak } from "@ckeditor/ckeditor5-page-break";

const editorConfiguration = {
  plugins: [
    Essentials,
    Autoformat,
    Bold,
    Italic,
    Underline,
    BlockQuote,
    Heading,
    Link,
    List,
    Strikethrough,
    ImageUpload,
    Image,
    ImageCaption,
    ImageStyle,
    ImageToolbar,
    Indent,
    Alignment,
    PasteFromOffice,
    FindAndReplace,
    Base64UploadAdapter,
    Font,
    GeneralHtmlSupport,
    TextTransformation,
    MediaEmbed,
    SourceEditing,
    RemoveFormat,
    SpecialCharacters,
    SpecialCharactersEssentials,
    PageBreak,
    IndentBlock,
    AutoLink,
    
  ],
  toolbar: [
    "heading",
    "|",
    "bold",
    "underline",
    "italic",
    "strikethrough",
    "|",
    "fontSize",
    "fontFamily",
    "fontColor",
    "fontBackgroundColor",
    "|",
    "link",
    "bulletedList",
    "numberedList",
    "blockQuote",
    "insertTable",
    "undo",
    "redo",
    "alignment",
    "imageUpload",
    "mediaEmbed",

    "|",
    "findAndReplace",
    "|",
    "indent",
    "outdent",
    "htmlEmbed",
    "htmlSupport",
    "sourceEditing",
    "removeFormat",
    "specialCharacters",
    "pageBreak",
  ],
};

class App extends Component {
  render() {
    return (
      <div className="App">
        <h2>Using CKEditor&nbsp;5 from source in React</h2>
        <CKEditor
          editor={ClassicEditor}
          config={editorConfiguration}
          data="<p>Hello from CKEditor&nbsp;5!</p>"
          onReady={(editor) => {
            // You can store the "editor" and use when it is needed.
            console.log("Editor is ready to use!", editor);
          }}
          onChange={(event) => {
            console.log(event);
          }}
          onBlur={(event, editor) => {
            console.log("Blur.", editor);
          }}
          onFocus={(event, editor) => {
            console.log("Focus.", editor);
          }}
        />
      </div>
    );
  }
}

export default App;
