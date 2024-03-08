export const GrayBlock = (props) => {
    return (
        <div className='gray-block'>
            {props.children}
            <style jsx>
                {`
                    .gray-block {
                        box-shadow: 0px 0px 11px 1px rgba(0, 0, 0, 0.75);
                        background: #333b42;
                        height: 100%;
                    }
                `}
            </style>
        </div>
    )
}