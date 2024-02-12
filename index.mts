import clientParser from 'html-dom-parser/lib/client/html-to-dom';
import parser from 'html-dom-parser';
import serverParser from 'html-dom-parser/lib/server/html-to-dom';
import type { Comment, Element, ProcessingInstruction, Text, DOMNode } from 'html-dom-parser';

let comment: Comment;
let element: Element;
let processingInstruction: ProcessingInstruction;
let text: Text;
let domNode: DOMNode;

parser('');
clientParser('');
serverParser('');
