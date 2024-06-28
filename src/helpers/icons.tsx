import { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> ;

export const Icons = {
    Login: (props: IconProps) => (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={props.width}
            height={props.height}
            viewBox="0 0 24 24"
            style={{ fill: "rgba(255, 255, 255, 1)", }}
            {...props}
            >
            <path
                d="m10.998 16 5-4-5-4v3h-9v2h9z"></path>
            <path
                d="M12.999 2.999a8.938 8.938 0 0 0-6.364 2.637L8.049 7.05c1.322-1.322 3.08-2.051 4.95-2.051s3.628.729 4.95 2.051S20 10.13 20 12s-.729 3.628-2.051 4.95-3.08 2.051-4.95 2.051-3.628-.729-4.95-2.051l-1.414 1.414c1.699 1.7 3.959 2.637 6.364 2.637s4.665-.937 6.364-2.637C21.063 16.665 22 14.405 22 12s-.937-4.665-2.637-6.364a8.938 8.938 0 0 0-6.364-2.637z"></path>
        </svg>
    ),
    Search: (props: IconProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" 
            width={props.width} 
            height={props.height} 
            viewBox="0 0 24 24" 
            style={{fill: "rgba(255, 255, 255, 1)"}}
            {...props}    
        >
            <path d="M10 18a7.952 7.952 0 0 0 4.897-1.688l4.396 4.396 1.414-1.414-4.396-4.396A7.952 7.952 0 0 0 18 10c0-4.411-3.589-8-8-8s-8 3.589-8 8 3.589 8 8 8zm0-14c3.309 0 6 2.691 6 6s-2.691 6-6 6-6-2.691-6-6 2.691-6 6-6z">
            </path>
        </svg>
    ),
    Back: (props: IconProps) => (
        <svg 
        xmlns="http://www.w3.org/2000/svg" 
        width={props.width} 
        height={props.height} 
        viewBox="0 0 24 24" 
        style={{fill: "rgba(255, 255, 255, 1)"}}
        {...props}
        >
            <path d="M21 11H6.414l5.293-5.293-1.414-1.414L2.586 12l7.707 7.707 1.414-1.414L6.414 13H21z">
            </path>
        </svg>
    ),
    Cart: (props: IconProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" 
            width={props.width}  
            height={props.height} 
            viewBox="0 0 24 24" 
            style={{fill: "rgba(255, 255, 255, 1)"}}
            {...props}    
        >
            <path d="M21.822 7.431A1 1 0 0 0 21 7H7.333L6.179 4.23A1.994 1.994 0 0 0 4.333 3H2v2h2.333l4.744 11.385A1 1 0 0 0 10 17h8c.417 0 .79-.259.937-.648l3-8a1 1 0 0 0-.115-.921zM17.307 15h-6.64l-2.5-6h11.39l-2.25 6z"></path>
            <circle cx="10.5" cy="19.5" r="1.5"></circle>
            <circle cx="17.5" cy="19.5" r="1.5"></circle>
        </svg>
    ),
    LikeOutlined: (props: IconProps) => (
        <svg 
            xmlns="http://www.w3.org/2000/svg" 
            width={props.width}  
            height={props.height}
            viewBox="0 0 24 24" 
            style={{fill: "rgba(255, 255, 255, 1)"}}
            {...props} >
            <path d="M12 4.595a5.904 5.904 0 0 0-3.996-1.558 5.942 5.942 0 0 0-4.213 1.758c-2.353 2.363-2.352 6.059.002 8.412l7.332 7.332c.17.299.498.492.875.492a.99.99 0 0 0 .792-.409l7.415-7.415c2.354-2.354 2.354-6.049-.002-8.416a5.938 5.938 0 0 0-4.209-1.754A5.906 5.906 0 0 0 12 4.595zm6.791 1.61c1.563 1.571 1.564 4.025.002 5.588L12 18.586l-6.793-6.793c-1.562-1.563-1.561-4.017-.002-5.584.76-.756 1.754-1.172 2.799-1.172s2.035.416 2.789 1.17l.5.5a.999.999 0 0 0 1.414 0l.5-.5c1.512-1.509 4.074-1.505 5.584-.002z">
            </path>
        </svg>

    ),
    LikeFullFilled: (props: IconProps) => (
        <svg 
            xmlns="http://www.w3.org/2000/svg" 
            width={props.width}  
            height={props.height}
            viewBox="0 0 24 24" 
            style={{fill: "rgba(255, 255, 255, 1)"}}
            {...props} >
            <path d="M20.205 4.791a5.938 5.938 0 0 0-4.209-1.754A5.906 5.906 0 0 0 12 4.595a5.904 5.904 0 0 0-3.996-1.558 5.942 5.942 0 0 0-4.213 1.758c-2.353 2.363-2.352 6.059.002 8.412L12 21.414l8.207-8.207c2.354-2.353 2.355-6.049-.002-8.416z">
            </path>
        </svg>

    )
};