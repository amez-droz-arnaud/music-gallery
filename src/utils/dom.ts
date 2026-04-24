interface ElementOptions {
    className?: string[];
    textContent?: string;
    attributes?: [string, string][];
}


export function createElement(type: string, options: ElementOptions): HTMLElement {

    const { className = [], textContent = "", attributes = []} = options
    
    const html_element = document.createElement(type)

    if (className.length > 0)
        html_element.className = className.join(" ")

    if (textContent)
        html_element.textContent = textContent

    if (attributes) {
        for (const attribute of attributes)
            html_element.setAttribute(attribute[0], attribute[1])
    }

    return html_element
}