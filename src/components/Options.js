import React from "react";

const Options = (props) => {
    const {list = []} = props;
    const listItems = list.map((item, index) => <option key={index}>{item}</option>)
    return (
        <>
            {listItems}
        </>
    )
};

export default Options;