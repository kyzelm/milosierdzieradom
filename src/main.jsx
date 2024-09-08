import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import App from './App.jsx'
import './css/index.css'
import emailJS from '@emailjs/browser'
import {RichTextSchema, storyblokInit, apiPlugin} from "@storyblok/js";
import cloneDeep from "clone-deep";

emailJS.init("aAQ95h8fXCqPdFzxU");

const mySchema = cloneDeep(RichTextSchema);

export const {storyblokApi} = storyblokInit({
    accessToken: import.meta.env.VITE_STORYBLOK_ACCESS_TOKEN,
    use: [apiPlugin],
    cache: {
        clear: 'auto',
        type: 'memory',
    },
    richText: {
        schema: mySchema,
        resolver: (component, blok) => {
            switch (component) {
                case 'tablePaste': {
                    let headTableText = '';
                    let bodyTableText = '';
                    let textTab = blok.textTab.replace(/ {4}/g, '\t');

                    let tableWidth = 0;

                    headTableText = textTab.split('\n').map((row, index) => {
                        if (index === 0) {
                            return `<tr>${row.split('\t').map((cell) => {
                                tableWidth++;
                                return `<th>${cell}</th>`
                            }).join('')}</tr>`;
                        }
                    }).join('');

                    bodyTableText = textTab.split('\n').map((row, index) => {
                        if (index !== 0) {
                            let rowWidth = row.split('\t').length;

                            for (let i = 0; i < tableWidth - rowWidth; i++) {
                                row += '\t';
                            }

                            return `<tr>${row.split('\t').map((cell) => {
                                return `<td>${cell}</td>`
                            }).join('')}</tr>`;
                        }
                    }).join('');

                    return `<table><thead>${headTableText}</thead><tbody>${bodyTableText}</tbody></table>`;
                }
                default:
                    return null;
            }
        }
    },
});

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <App/>
    </StrictMode>,
)